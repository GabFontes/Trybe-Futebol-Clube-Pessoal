import { NextFunction, Request, Response } from 'express';
import LoginUseCase from './LoginUseCase';

class LoginController {
  private loginUseCase: LoginUseCase;

  constructor() {
    this.loginUseCase = new LoginUseCase();
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      const UserAndToken = await this.loginUseCase.login({ email, password });
      return res.status(200).json(UserAndToken);
    } catch (error) {
      next(error);
    }
  }
}

export default new LoginController();
