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

  async getById(id: string | number) {
    const team = await this.model.findByPk(id);
    return team;
  }

  async create(
    { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress }: IMatch,
  ) {
    if (homeTeam === awayTeam) {
      throw new errors
        .UnauthorizedError('It is not possible to create a match with two equal teams');
    }

    const hTeam = await this.getById(homeTeam);
    const aTeam = await this.getById(awayTeam);

    if (!hTeam) throw new errors.NotFoundError('There is no team with such id!');
    if (!aTeam) throw new errors.NotFoundError('There is no team with such id!');

    const newMatch = await this.model.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });

    return newMatch;
  }

  async finishMatch(id: string) {
    await this.model.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  }
}

export default new MatchesUseCase();
