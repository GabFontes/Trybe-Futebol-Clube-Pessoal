import * as errors from 'restify-errors';
import IMatch, { IUpdateMatch } from '../../interfaces/IMatches';
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

  async create(match: IMatch) {
    if (match.homeTeam === match.awayTeam) {
      throw new errors
        .UnauthorizedError('It is not possible to create a match with two equal teams');
    }

    const exists = [match.homeTeam, match.awayTeam].map((team) => this.getById(team));

    const response = await Promise.all(exists);

    if (response.includes(null)) throw new errors.NotFoundError('There is no team with such id!');

    return this.model.create(match);
  }

  async update({ homeTeamGoals, awayTeamGoals, id }: IUpdateMatch) {
    const updatedMatch = await this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );

    return updatedMatch;
  }

  async finishMatch(id: string) {
    await this.model.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  }
}

export default new MatchesUseCase();
