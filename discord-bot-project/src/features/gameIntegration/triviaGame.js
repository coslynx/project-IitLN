const triviaGame = {
  questions: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    }
  ],
  currentQuestionIndex: 0,
  userScores: {},

  displayQuestion: function () {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    return currentQuestion.question + "\nOptions: " + currentQuestion.options.join(", ");
  },

  checkAnswer: function (userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (userAnswer === currentQuestion.answer) {
      return true;
    } else {
      return false;
    }
  },

  updateUserScore: function (userId, isCorrect) {
    if (isCorrect) {
      if (this.userScores[userId]) {
        this.userScores[userId]++;
      } else {
        this.userScores[userId] = 1;
      }
    }
  },

  getNextQuestion: function () {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.questions.length) {
      this.currentQuestionIndex = 0;
    }
    return this.displayQuestion();
  }
};

module.exports = triviaGame;