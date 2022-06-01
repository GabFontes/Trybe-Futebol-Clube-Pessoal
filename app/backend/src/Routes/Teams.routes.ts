import * as express from 'express';
import TeamsController from '../useCases/Teams/TeamsController';

const TeamsRouter = express.Router();

TeamsRouter.get('/', (req, res, next) => {
  TeamsController.getAll(req, res, next);
});

TeamsRouter.get('/:id', (req, res, next) => {
  TeamsController.getById(req, res, next);
});

export default TeamsRouter;
