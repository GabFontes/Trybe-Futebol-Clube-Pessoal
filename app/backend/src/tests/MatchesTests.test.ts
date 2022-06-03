import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import {
  matches,
  updateGoalsBodyPatch,
  searchedTeams,
  matchBodyPost,
  newMatchBody,
  token
} from './Mocks/MatchesMocks/Matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota Matches', () => {
  let chaiHttpResponse: Response;

  describe('/matches GET', () => {
    describe('Rota matches retorna um array com todas as partidas', async () => {
      before(async () => {
        sinon
          .stub(Matches, "findAll")
          .resolves(matches as unknown as Matches[]);

        chaiHttpResponse = await chai
          .request(app)
          .get('/matches')
      });

      after(() => {
        (Matches.findAll as sinon.SinonStub).restore();
      });

      it('Retorna todas as partidas', () => {
        expect(chaiHttpResponse.body).to.deep.equal(matches);
        expect(chaiHttpResponse).to.have.status(200);
      });
    });
  });

  describe('/matches/:id/finish PATCH', () => {
    describe('Rota matches finaliza as partidas através do id recebido corretamente', async () => {
      before(async () => {
        sinon
          .stub(Matches, 'update')
          .resolves()

        chaiHttpResponse = await chai
          .request(app)
          .patch('/matches/1/finish')
      });

      after(() => {
        (Matches.update as sinon.SinonStub).restore();
      });

      it('Verifica se a partida com o id 1 foi finalizada com o status 200, OK', () => {
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Finished' })
        expect(chaiHttpResponse).to.have.status(200)

      });
    });
  });

  describe('/matches/:id PATCH', () => {
    describe('Rota matches atualiza os gols da partida com o id correspondente', async () => {
      before(async () => {
        sinon
          .stub(Matches, 'update')
          .resolves()

        chaiHttpResponse = await chai
          .request(app)
          .patch('/matches/1')
          .send(updateGoalsBodyPatch)
      });

      after(() => {
        (Matches.update as sinon.SinonStub).restore();
      });

      it('Verifica se a partida com o id 1 teve os gols alterados com o status 200, OK', () => {
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: "The match 1 has been updated" });
        expect(chaiHttpResponse).to.have.status(200);
      })
    });
  });

  describe('/matches POST', () => {
    describe('Rota matches cria as partidas corretamente', async () => {
      before(async () => {
        sinon
          .stub(Teams, "findByPk")
          .onCall(0)
          .resolves(searchedTeams[0] as Teams)
          .onCall(1)
          .resolves(searchedTeams[1] as Teams)
        sinon
          .stub(Matches, 'create')
          .resolves(newMatchBody as Matches)

        chaiHttpResponse = await chai
          .request(app)
          .post('/matches')
          .set('authorization', token)
          .send(matchBodyPost)
      });

      after(() => {
        (Teams.findByPk as sinon.SinonStub).restore();
        (Matches.create as sinon.SinonStub).restore();
      });

      it('Verifica se retorna uma nova partida com status 201, CREATED', () => {
        const { token } = chaiHttpResponse.body;

        expect(chaiHttpResponse).to.have.status(201);
        expect(chaiHttpResponse.body).to.be.deep.equal(newMatchBody);
        expect(token).to.be.equal(token)
      })
    });
  });

});
