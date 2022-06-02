import * as errors from 'restify-errors';
import IMatch from '../../interfaces/IMatches';
import Teams from '../../database/models/Teams';
import Matches from '../../database/models/Matches';

class MatchesUseCase {
  private model: typeof Matches;

  constructor() {
    this.model = Matches;
  }

  async getAll() {
    const matches = await this.model.findAll({
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      }, {
        model: Teams,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      }],
    });
    if (!matches) throw new errors.NotFoundError('Matches Not Found');

    return matches;
  }

  async getAllFiltered(filter: boolean | undefined) {
    if (filter === undefined) {
      const matches = await this.getAll();
      return matches;
    }

    const matches = await this.model.findAll({
      where: { inProgress: filter },
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      }, {
        model: Teams,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      }],
    });
    if (!matches) throw new errors.NotFoundError('Matches Not Found');

    return matches;
  }

  async create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress }: IMatch) {
    const newMatch = await this.model.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });

    return newMatch;
  }
}

export default new MatchesUseCase();
