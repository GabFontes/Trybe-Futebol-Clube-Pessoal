import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import Teams from '../database/models/Teams';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import allTeams from './Mocks/TeamsMocks/Teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota Teams', () => {
  let chaiHttpResponse: Response;

  describe('/teams GET', () => {
    describe('Rota Teams retorna um array com todos os times', async () => {
      before(async () => {
        sinon
          .stub(Teams, "findAll")
          .resolves(allTeams as Teams[]);

        chaiHttpResponse = await chai
          .request(app)
          .get('/teams')
      });

      after(() => {
        (Teams.findAll as sinon.SinonStub).restore();
      });

      it('Retorna todos os times', () => {
        expect(chaiHttpResponse.body).to.deep.equal(allTeams);

        expect(chaiHttpResponse).to.have.status(200);
      });
    });
  });

  describe('/teams/:id GET', () => {
    describe('Rota Teams retorna um time específico correspondente ao id', async () => {
      before(async () => {
        sinon
          .stub(Teams, "findByPk")
          .resolves(allTeams[0] as Teams);

        chaiHttpResponse = await chai
          .request(app)
          .get('/teams/1')
      });

      after(() => {
        (Teams.findByPk as sinon.SinonStub).restore();
      });

      it('Retorna apenas um time', () => {
        expect(chaiHttpResponse.body).to.deep.equal(allTeams[0]);
        expect(chaiHttpResponse).to.have.status(200);
      });
    });
  });

  describe('/teams/:id GET', () => {
    describe('Rota Teams retorna uma mensagem de erro se passado um id inexistente', async () => {
      before(async () => {
        sinon
          .stub(Teams, "findByPk")
          .resolves(allTeams[150] as Teams);

        chaiHttpResponse = await chai
          .request(app)
          .get('/teams/150')
      });

      after(() => {
        (Teams.findByPk as sinon.SinonStub).restore();
      });

      it('Retorna uma mensagem de erro', () => {
        expect(chaiHttpResponse.body).to.deep.equal({
          message: "Team Not Found"
        });
        expect(chaiHttpResponse).to.have.status(500);
      });
    });
  });

});