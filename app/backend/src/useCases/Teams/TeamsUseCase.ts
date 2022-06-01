import * as errors from 'restify-errors';
import Teams from '../../database/models/Teams';

class TeamsUseCase {
  private model: typeof Teams;

  constructor() {
    this.model = Teams;
  }

  async getAll() {
    const teams = await this.model.findAll();
    if (!teams) throw new errors.NotFoundError('Teams Not Found');

    return teams;
  }

  async getById(id: string) {
    const teams = await this.model.findByPk(id);
    if (!teams) throw new errors.NotFoundError('Teams Not Found');

    return teams;
  }
}

export default new TeamsUseCase();
