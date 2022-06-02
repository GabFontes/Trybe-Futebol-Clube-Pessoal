import { NextFunction, Request, Response } from 'express';
import MatchesUseCase from './MatchesUseCase';

class MatchesController {
  private matchesUseCase: typeof MatchesUseCase;

  constructor() {
    this.matchesUseCase = MatchesUseCase;
  }

  async getAllFiltered(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      const filter = inProgress === 'true';
      const result = inProgress ? filter : undefined;
      const matches = await this.matchesUseCase.getAllFiltered(result);

      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
      } = req.body;

      const newMatch = await this.matchesUseCase.create({
        homeTeam,
        awayTeam,
        homeTeamGoals,
        awayTeamGoals,
        inProgress,
      });

      return res.status(201).json(newMatch);
    } catch (error) {
      next(error);
    }
  }
}

export default new MatchesController();
