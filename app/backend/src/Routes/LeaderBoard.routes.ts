import * as express from 'express';
import LeaderBoardController from '../useCases/LeaderBoard/LeaderBoardController';

const LeaderBoardRouter = express.Router();

LeaderBoardRouter.get('/home', (req, res, next) => {
  LeaderBoardController.getAllHome(req, res, next);
});

LeaderBoardRouter.get('/away', (req, res, next) => {
  LeaderBoardController.getAllAway(req, res, next);
});

export default LeaderBoardRouter;
