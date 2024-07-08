const userPreferences = {
  musicPlayback: {
    enableMusicPlayback: true,
    defaultMusicSource: 'YouTube',
    volume: 50,
    favoriteSongs: [],
    favoriteArtists: [],
    userSpecificPreferences: {},
    setUserSpecificPreference: function(userId, preferenceKey, preferenceValue) {
      this.userSpecificPreferences[userId] = this.userSpecificPreferences[userId] || {};
      this.userSpecificPreferences[userId][preferenceKey] = preferenceValue;
    },
    getUserSpecificPreference: function(userId, preferenceKey) {
      return this.userSpecificPreferences[userId] ? this.userSpecificPreferences[userId][preferenceKey] : null;
    }
  },
  gameSelection: {
    enableGameSelection: true,
    availableGames: ['Trivia', 'Word Game', 'Puzzle'],
    userGameSelection: {},
    setUserGameSelection: function(userId, gameSelection) {
      this.userGameSelection[userId] = gameSelection;
    },
    getUserGameSelection: function(userId) {
      return this.userGameSelection[userId] ? this.userGameSelection[userId] : null;
    }
  },
  customCommands: {
    customCommandsList: [],
    addCustomCommand: function(command, action) {
      this.customCommandsList.push({ command, action });
    },
    executeCustomCommand: function(command) {
      const customCommand = this.customCommandsList.find(cmd => cmd.command === command);
      if (customCommand) {
        customCommand.action();
      } else {
        console.log('Command not found');
      }
    }
  }
};

module.exports = userPreferences;