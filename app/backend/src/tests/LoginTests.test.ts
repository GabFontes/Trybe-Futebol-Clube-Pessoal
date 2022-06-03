import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import Users from '../database/models/Users';
import chaiHttp = require('chai-http');
import {
  users,
  loginBody,
  loginBodyWithoutEmail,
  loginBodyWithoutPassword,
  // loginBodyWrongEmail,
  // loginBodyWrongPassword
} from './Mocks/LoginMocks/login';

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota Login', () => {
  let chaiHttpResponse: Response;

  describe('/login POST', () => {
    describe('Quando é feita a requisição corretamente', async () => {
      before(async () => {
        sinon
          .stub(Users, "findOne")
          .resolves(users[0] as Users);

        chaiHttpResponse = await chai
          .request(app)
          .post('/login')
          .send(loginBody)
      });

      after(() => {
        (Users.findOne as sinon.SinonStub).restore();
      });

      it('Retorna o corpo correto com o status 200, OK', () => {
        const { user, token } = chaiHttpResponse.body;

        expect(chaiHttpResponse).to.have.status(200)
        expect(user.email).to.be.equal('admin@admin.com')
        expect(user.role).to.be.equal('admin')
        expect(user.username).to.be.equal('Admin')
        expect(token).not.to.be.undefined;

      });
    });

    describe('Quando a requisição é feita incorretamente', async () => {
      before(async () => {
        sinon
          .stub(Users, "findOne")
          .resolves(users[0] as Users);

        chaiHttpResponse = await chai
          .request(app)
          .post('/login')
          .send(loginBodyWithoutEmail)
      });

      after(() => {
        (Users.findOne as sinon.SinonStub).restore();
      });

      it('Quando a requisição é feita sem o email 400, BAD REQUEST', () => {
        expect(chaiHttpResponse).to.have.status(400)
        expect(chaiHttpResponse.body).to.be.deep.equal({
          message: "All fields must be filled"
        });
      });

      it('Quando a requisição é feita sem a senha 400, BAD REQUEST', () => {
        before(async () => {
          sinon
            .stub(Users, "findOne")
            .resolves(users[0] as Users);

          chaiHttpResponse = await chai
            .request(app)
            .post('/login')
            .send(loginBodyWithoutPassword)
        });

        after(() => {
          (Users.findOne as sinon.SinonStub).restore();
        });

        expect(chaiHttpResponse).to.have.status(400)
        expect(chaiHttpResponse.body).to.be.deep.equal({
          message: "All fields must be filled"
        });
      });
    });

  });

});
