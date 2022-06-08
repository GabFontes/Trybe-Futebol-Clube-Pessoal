import { NextFunction, Request, Response } from 'express';
import HomeLeaderBoardUseCase from './HomeLeaderBoardUseCase';
import AwayLeaderBoardUseCase from './AwayLeaderBoardUseCase';

class LoginController {
  private homeLeaderBoardUseCase: typeof HomeLeaderBoardUseCase;
  private awayLeaderBoardUseCase: typeof AwayLeaderBoardUseCase;

  constructor() {
    this.homeLeaderBoardUseCase = HomeLeaderBoardUseCase;
    this.awayLeaderBoardUseCase = AwayLeaderBoardUseCase;
  }

  async getAllHome(req: Request, res: Response, next: NextFunction) {
    try {
      const homeLeaderBoard = await this.homeLeaderBoardUseCase.homeLeaderBoard();
      return res.status(200).json(homeLeaderBoard);
    } catch (error) {
      next(error);
    }
  }

  async getAllAway(req: Request, res: Response, next: NextFunction) {
    try {
      const awayLeaderBoard = await this.awayLeaderBoardUseCase.awayLeaderBoard();
      return res.status(200).json(awayLeaderBoard);
    } catch (error) {
      next(error);
    }
  }
}

export default new LoginController();
