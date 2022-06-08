import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import { matches, } from './Mocks/MatchesMocks/Matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota LeaderBoard', () => {
  let chaiHttpResponse: Response;

  describe('/leaderboard/homem GET', () => {
    describe('Rota leardboard/home retorna um arrai com as classificações dos times mandantes', async () => {
      before(async () => {
        sinon
          .stub(Matches, "findAll")
          .resolves(matches as unknown as Matches[]);

        chaiHttpResponse = await chai
          .request(app)
          .get('/leardboard/home')
      });

      after(() => {
        (Matches.findAll as sinon.SinonStub).restore();
      });

      it('Retorna as classificações com o status 200, OK', () => {
        console.log(chaiHttpResponse.body);
      });
    });
  });
});
