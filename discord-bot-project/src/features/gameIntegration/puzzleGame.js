const puzzleGame = {
  puzzles: [
    {
      question: "What has keys but can't open locks?",
      answer: "A piano"
    },
    {
      question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      answer: "An echo"
    },
    {
      question: "The more you take, the more you leave behind. What am I?",
      answer: "Footsteps"
    }
  ],

  currentPuzzleIndex: 0,
  userScores: {},

  displayPuzzle: function (userId) {
    const currentPuzzle = this.puzzles[this.currentPuzzleIndex];
    // Code to display the puzzle question to the user
  },

  checkAnswer: function (userId, userAnswer) {
    const currentPuzzle = this.puzzles[this.currentPuzzleIndex];
    if (userAnswer.toLowerCase() === currentPuzzle.answer.toLowerCase()) {
      // Code to award points to the user
      // Update user scores
      this.updateUserScore(userId);
      // Move to the next puzzle
      this.moveToNextPuzzle();
      return true;
    } else {
      return false;
    }
  },

  updateUserScore: function (userId) {
    if (!this.userScores[userId]) {
      this.userScores[userId] = 1;
    } else {
      this.userScores[userId]++;
    }
  },

  moveToNextPuzzle: function () {
    this.currentPuzzleIndex++;
    if (this.currentPuzzleIndex === this.puzzles.length) {
      this.currentPuzzleIndex = 0; // Restart from the first puzzle
    }
  }
};

module.exports = puzzleGame;