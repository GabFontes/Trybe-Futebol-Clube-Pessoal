import { Model, DataTypes } from 'sequelize';
import matches from './matches';
import db from '.';

class teams extends Model {
  id: number;
  teamName: string;
}
teams.init({
  teamName: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
  underscored: true,
});

matches.belongsTo(teams, { foreignKey: 'id', as: 'teams_home_team' });
matches.belongsTo(teams, { foreignKey: 'id', as: 'teams_away_team' });

teams.hasMany(matches, { foreignKey: 'home_team', as: 'matches_home_team' });
teams.hasMany(matches, { foreignKey: 'away_team', as: 'matches_away_team' });
export default teams;
