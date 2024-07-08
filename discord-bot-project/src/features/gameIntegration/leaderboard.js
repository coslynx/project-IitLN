const leaderboard = {
  users: [],
  
  addUser: function(user) {
    this.users.push(user);
  },
  
  updateUserScore: function(username, newScore) {
    this.users.forEach(user => {
      if (user.username === username) {
        user.score = newScore;
      }
    });
  },
  
  getUserScore: function(username) {
    const user = this.users.find(user => user.username === username);
    return user ? user.score : 'User not found';
  },
  
  getTopPlayers: function(numPlayers) {
    const sortedUsers = this.users.sort((a, b) => b.score - a.score);
    return sortedUsers.slice(0, numPlayers);
  },
  
  removeUser: function(username) {
    this.users = this.users.filter(user => user.username !== username);
  },
  
  resetLeaderboard: function() {
    this.users = [];
  }
};

module.exports = leaderboard;