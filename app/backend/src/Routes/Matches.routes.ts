import * as express from 'express';
import MatchesController from '../useCases/Matches/MatchesController';

const MatchesRouter = express.Router();

MatchesRouter.get('/', (req, res, next) => {
  MatchesController.getAllFiltered(req, res, next);
});

MatchesRouter.post('/', (req, res, next) => {
  MatchesController.create(req, res, next);
});

export default MatchesRouter;
