import sortArray = require('sort-array');
import Teams from '../../database/models/Teams';
import Matches from '../../database/models/Matches';

class AwayLeaderBoardUseCase {
  private teams: typeof Teams;
  private matches: typeof Matches;

  constructor() {
    this.teams = Teams;
    this.matches = Matches;
  }

  static totalWins(finishedMatches: Matches[]) {
    return finishedMatches
      .reduce((acc, curr) => (curr.awayTeamGoals > curr.homeTeamGoals ? acc + 1 : acc), 0);
  }

  static totalLoses(finishedMatches: Matches[]) {
    return finishedMatches
      .reduce((acc, curr) => (curr.awayTeamGoals < curr.homeTeamGoals ? acc + 1 : acc), 0);
  }

  static totalDraws(finishedMatches: Matches[]) {
    return finishedMatches
      .reduce((acc, curr) => (curr.awayTeamGoals === curr.homeTeamGoals ? acc + 1 : acc), 0);
  }

  static totalPoints(finishedMatches: Matches[]) {
    return ((this.totalWins(finishedMatches) * 3) + this.totalDraws(finishedMatches));
  }

  static goalsFavor(finishedMatches: Matches[]) {
    return finishedMatches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
  }

  static goalsOwn(finishedMatches: Matches[]) {
    return finishedMatches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
  }

  static goalsBalance(finishedMatches: Matches[]) {
    return (this.goalsFavor(finishedMatches) - this.goalsOwn(finishedMatches));
  }

  static totalMatches(finishedMatches: Matches[]) {
    return finishedMatches.length;
  }

  static efficiency(finishedMatches: Matches[]) {
    return +((this.totalPoints(finishedMatches) / (this.totalMatches(finishedMatches) * 3)) * 100)
      .toFixed(2);
  }

  static boardWithoutName(finishedMatches: Matches[]) {
    return {
      totalPoints: this.totalPoints(finishedMatches),
      totalGames: this.totalMatches(finishedMatches),
      totalVictories: this.totalWins(finishedMatches),
      totalDraws: this.totalDraws(finishedMatches),
      totalLosses: this.totalLoses(finishedMatches),
      goalsFavor: this.goalsFavor(finishedMatches),
      goalsOwn: this.goalsOwn(finishedMatches),
      goalsBalance: this.goalsBalance(finishedMatches),
      efficiency: this.efficiency(finishedMatches),
    };
  }

  async awayLeaderBoard() {
    const allTeams = await this.teams.findAll();

    const completedLeaderBoard = allTeams.map(async (team) => {
      const finishedMatches = await this.matches.findAll(
        { where: { homeTeam: team.id, inProgress: false } },
      );

      const boardWithoutName = AwayLeaderBoardUseCase.boardWithoutName(finishedMatches);

      return {
        name: team.teamName,
        ...boardWithoutName,
      };
    });

    const resolvedLeaderBoard = await Promise.all(completedLeaderBoard);

    const keysOrder = ['totalPoints', 'totalVictories', 'goalsBalance', 'goalsFavor', 'goalsOwn'];
    const order = ['desc', 'desc', 'desc', 'desc', 'desc'];

    return sortArray(resolvedLeaderBoard, { by: keysOrder, order });
  }
}

export default new AwayLeaderBoardUseCase();
