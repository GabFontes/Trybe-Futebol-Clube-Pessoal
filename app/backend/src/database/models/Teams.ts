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

Matches.belongsTo(Teams, { foreignKey: 'id', as: 'teams_home_team' });
Matches.belongsTo(Teams, { foreignKey: 'id', as: 'teams_away_team' });

Teams.hasMany(Matches, { foreignKey: 'home_team', as: 'matches_home_team' });
Teams.hasMany(Matches, { foreignKey: 'away_team', as: 'matches_away_team' });
export default Teams;
