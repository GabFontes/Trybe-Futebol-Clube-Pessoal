import { NextFunction, Request, Response } from 'express';
import TeamsUseCase from './TeamsUseCase';

class TeamsController {
  private teamsUseCase: typeof TeamsUseCase;

  constructor() {
    this.teamsUseCase = TeamsUseCase;
  }

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.teamsUseCase.getAll();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const teams = await this.teamsUseCase.getById(id);
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}

export default new TeamsController();
