import * as express from 'express';
import LoginValidation from '../middlewares/LoginValidation';
import LoginController from '../useCases/Login/LoginController';

const LoginRouter = express.Router();

LoginRouter.get('/validate', (req, res, next) => {
  LoginController.loginValidate(req, res, next);
});

LoginRouter.post('/', LoginValidation, (req, res, next) => {
  LoginController.login(req, res, next);
});

export default LoginRouter;
