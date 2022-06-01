import * as express from 'express';
import LoginValidation from '../middlewares/LoginValidation';
import LoginController from '../useCases/Login/LoginController';

const loginRouter = express.Router();

loginRouter.get('/validate', (req, res, next) => {
  LoginController.loginValidate(req, res, next);
});

loginRouter.post('/', LoginValidation, (req, res, next) => {
  LoginController.login(req, res, next);
});

export default loginRouter;
