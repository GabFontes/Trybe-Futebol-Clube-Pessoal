import * as express from 'express';
import MatchesController from '../useCases/Matches/MatchesController';
import TokenValidation from '../middlewares/TokenValidation';

const MatchesRouter = express.Router();

MatchesRouter.get('/', (req, res, next) => {
  MatchesController.getAllFiltered(req, res, next);
});

MatchesRouter.post('/', TokenValidation, (req, res, next) => {
  MatchesController.create(req, res, next);
});

MatchesRouter.patch('/:id', (req, res, next) => {
  MatchesController.update(req, res, next);
});

MatchesRouter.patch('/:id/finish', (req, res, next) => {
  MatchesController.finishMatch(req, res, next);
});

export default MatchesRouter;
