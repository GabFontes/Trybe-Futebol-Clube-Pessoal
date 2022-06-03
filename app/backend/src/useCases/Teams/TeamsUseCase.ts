import * as errors from 'restify-errors';
import Teams from '../../database/models/Teams';

class TeamsUseCase {
  private model: typeof Teams;

  constructor() {
    this.model = Teams;
  }

  async getAll(): Promise<Teams[]> {
    const teams = await this.model.findAll();
    if (!teams) throw new errors.NotFoundError('Teams Not Found');

    return teams;
  }

  async getById(id: string | number): Promise<Teams | null> {
    const team = await this.model.findByPk(id);
    if (!team) throw new errors.NotFoundError('Team Not Found');
    return team;
  }
}

export default new TeamsUseCase();
