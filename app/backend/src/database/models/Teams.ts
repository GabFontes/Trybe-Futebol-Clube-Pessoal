import { Model, DataTypes } from 'sequelize';
import Matches from './Matches';
import db from '.';

class Teams extends Model {
  id: number;
  teamName: string;
}
Teams.init({
  teamName: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
  underscored: true,
});

Matches.belongsTo(Teams, { foreignKey: 'home_team', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'away_team', as: 'teamAway' });

Teams.hasMany(Matches, { foreignKey: 'home_team', as: 'teamHome' });
Teams.hasMany(Matches, { foreignKey: 'away_team', as: 'teamAway' });
export default Teams;
