const userScores = {
  scores: {},

  addUser: (userId) => {
    if (!userScores.scores[userId]) {
      userScores.scores[userId] = 0;
    }
  },

  updateUserScore: (userId, points) => {
    if (userScores.scores[userId] !== undefined) {
      userScores.scores[userId] += points;
    }
  },

  getUserScore: (userId) => {
    return userScores.scores[userId] || 0;
  },

  getLeaderboard: () => {
    const sortedScores = Object.entries(userScores.scores).sort((a, b) => b[1] - a[1]);
    return sortedScores;
  },

  resetScores: () => {
    userScores.scores = {};
  }
};

module.exports = userScores;