const matches = [
  [
    {
      "id": 9,
      "homeTeam": 1,
      "homeTeamGoals": 0,
      "awayTeam": 12,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 1,
      "away_team": 12
    },
    {
      "id": 17,
      "homeTeam": 1,
      "homeTeamGoals": 2,
      "awayTeam": 8,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 1,
      "away_team": 8
    },
    {
      "id": 33,
      "homeTeam": 1,
      "homeTeamGoals": 1,
      "awayTeam": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 1,
      "away_team": 16
    }
  ],
  [
    {
      "id": 10,
      "homeTeam": 2,
      "homeTeamGoals": 0,
      "awayTeam": 9,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 2,
      "away_team": 9
    },
    {
      "id": 25,
      "homeTeam": 2,
      "homeTeamGoals": 0,
      "awayTeam": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 2,
      "away_team": 6
    },
    {
      "id": 36,
      "homeTeam": 2,
      "homeTeamGoals": 0,
      "awayTeam": 7,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 2,
      "away_team": 7
    }
  ],
  [
    {
      "id": 4,
      "homeTeam": 3,
      "homeTeamGoals": 0,
      "awayTeam": 2,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 3,
      "away_team": 2
    },
    {
      "id": 30,
      "homeTeam": 3,
      "homeTeamGoals": 0,
      "awayTeam": 12,
      "awayTeamGoals": 4,
      "inProgress": false,
      "home_team": 3,
      "away_team": 12
    },
    {
      "id": 39,
      "homeTeam": 3,
      "homeTeamGoals": 2,
      "awayTeam": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 3,
      "away_team": 11
    }
  ],
  [
    {
      "id": 3,
      "homeTeam": 4,
      "homeTeamGoals": 3,
      "awayTeam": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 4,
      "away_team": 11
    },
    {
      "id": 22,
      "homeTeam": 4,
      "homeTeamGoals": 3,
      "awayTeam": 3,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 4,
      "away_team": 3
    }
  ],
  [
    {
      "id": 6,
      "homeTeam": 5,
      "homeTeamGoals": 1,
      "awayTeam": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 5,
      "away_team": 13
    },
    {
      "id": 27,
      "homeTeam": 5,
      "homeTeamGoals": 1,
      "awayTeam": 15,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 5,
      "away_team": 15
    }
  ],
  [
    {
      "id": 12,
      "homeTeam": 6,
      "homeTeamGoals": 0,
      "awayTeam": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 6,
      "away_team": 4
    },
    {
      "id": 21,
      "homeTeam": 6,
      "homeTeamGoals": 3,
      "awayTeam": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 6,
      "away_team": 13
    }
  ],
  [
    {
      "id": 5,
      "homeTeam": 7,
      "homeTeamGoals": 1,
      "awayTeam": 10,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 7,
      "away_team": 10
    },
    {
      "id": 20,
      "homeTeam": 7,
      "homeTeamGoals": 0,
      "awayTeam": 9,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 7,
      "away_team": 9
    }
  ],
  [
    {
      "id": 13,
      "homeTeam": 8,
      "homeTeamGoals": 2,
      "awayTeam": 5,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 8,
      "away_team": 5
    },
    {
      "id": 31,
      "homeTeam": 8,
      "homeTeamGoals": 2,
      "awayTeam": 10,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 8,
      "away_team": 10
    }
  ],
  [
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 9,
      "away_team": 14
    },
    {
      "id": 29,
      "homeTeam": 9,
      "homeTeamGoals": 0,
      "awayTeam": 4,
      "awayTeamGoals": 4,
      "inProgress": false,
      "home_team": 9,
      "away_team": 4
    },
    {
      "id": 34,
      "homeTeam": 9,
      "homeTeamGoals": 3,
      "awayTeam": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 9,
      "away_team": 6
    }
  ],
  [
    {
      "id": 15,
      "homeTeam": 10,
      "homeTeamGoals": 0,
      "awayTeam": 15,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 10,
      "away_team": 15
    },
    {
      "id": 24,
      "homeTeam": 10,
      "homeTeamGoals": 2,
      "awayTeam": 14,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 10,
      "away_team": 14
    },
    {
      "id": 35,
      "homeTeam": 10,
      "homeTeamGoals": 1,
      "awayTeam": 5,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 10,
      "away_team": 5
    }
  ],
  [
    {
      "id": 16,
      "homeTeam": 11,
      "homeTeamGoals": 0,
      "awayTeam": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 11,
      "away_team": 7
    },
    {
      "id": 19,
      "homeTeam": 11,
      "homeTeamGoals": 2,
      "awayTeam": 2,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 11,
      "away_team": 2
    }
  ],
  [
    {
      "id": 7,
      "homeTeam": 12,
      "homeTeamGoals": 2,
      "awayTeam": 6,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 12,
      "away_team": 6
    },
    {
      "id": 18,
      "homeTeam": 12,
      "homeTeamGoals": 4,
      "awayTeam": 5,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 12,
      "away_team": 5
    },
    {
      "id": 40,
      "homeTeam": 12,
      "homeTeamGoals": 4,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 12,
      "away_team": 8
    }
  ],
  [
    {
      "id": 11,
      "homeTeam": 13,
      "homeTeamGoals": 1,
      "awayTeam": 3,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 13,
      "away_team": 3
    },
    {
      "id": 26,
      "homeTeam": 13,
      "homeTeamGoals": 1,
      "awayTeam": 1,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 13,
      "away_team": 1
    }
  ],
  [
    {
      "id": 14,
      "homeTeam": 14,
      "homeTeamGoals": 2,
      "awayTeam": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 14,
      "away_team": 16
    },
    {
      "id": 32,
      "homeTeam": 14,
      "homeTeamGoals": 5,
      "awayTeam": 11,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 14,
      "away_team": 11
    },
    {
      "id": 38,
      "homeTeam": 14,
      "homeTeamGoals": 2,
      "awayTeam": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 14,
      "away_team": 4
    }
  ],
  [
    {
      "id": 8,
      "homeTeam": 15,
      "homeTeamGoals": 0,
      "awayTeam": 1,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 15,
      "away_team": 1
    },
    {
      "id": 23,
      "homeTeam": 15,
      "homeTeamGoals": 2,
      "awayTeam": 16,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 15,
      "away_team": 16
    },
    {
      "id": 37,
      "homeTeam": 15,
      "homeTeamGoals": 0,
      "awayTeam": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 15,
      "away_team": 13
    }
  ],
  [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 16,
      "away_team": 8
    },
    {
      "id": 28,
      "homeTeam": 16,
      "homeTeamGoals": 3,
      "awayTeam": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 16,
      "away_team": 7
    }
  ]
]

const matchBodyPost = {
  homeTeam: 1,
  awayTeam: 2,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
}

const newMatchBody = {
  id: 49,
  homeTeam: 1,
  awayTeam: 2,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
}

const updateGoalsBodyPatch = {
  homeTeamGoals: 3,
  awayTeamGoals: 1
}


const searchedTeams = [
  { id: 1, teamName: 'Avaí/Kindermann' },
  { id: 2, teamName: 'Bahia' }
]

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjU0MTEzNjkzLCJleHAiOjE2NTQ3MTg0OTN9.sbq1DrVyAOqvyhI8R9jdzAMTrz2gA2TZlUGq0cKmoIg'

export { matches, matchBodyPost, updateGoalsBodyPatch, searchedTeams, newMatchBody, token };