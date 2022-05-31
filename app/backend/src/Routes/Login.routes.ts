import * as express from 'express';
import LoginValidation from '../middlewares/LoginValidation';
import LoginController from '../useCases/Login/LoginController';

const loginRouter = express.Router();

loginRouter.post('/', LoginValidation, LoginController.login);

export default loginRouter;
