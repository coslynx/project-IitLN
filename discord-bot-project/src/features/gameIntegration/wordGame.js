const Discord = require('discord.js');

const wordGame = {
  words: ['apple', 'banana', 'cherry', 'orange', 'grape', 'melon', 'pear'],
  currentWord: '',
  shuffledWord: '',
  maxAttempts: 3,
  attempts: 0,

  startGame: function(message) {
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.shuffledWord = this.shuffleWord(this.currentWord);
    this.attempts = 0;

    message.channel.send(`Unscramble the word: **${this.shuffledWord}**`);
  },

  shuffleWord: function(word) {
    let shuffledWord = word.split('').sort(function() {
      return 0.5 - Math.random();
    }).join('');
    return shuffledWord;
  },

  makeGuess: function(message, guess) {
    if (guess.toLowerCase() === this.currentWord) {
      message.channel.send(`Congratulations! You unscrambled the word.`);
    } else {
      this.attempts++;
      if (this.attempts === this.maxAttempts) {
        message.channel.send(`You've run out of attempts. The word was: **${this.currentWord}**`);
      } else {
        message.channel.send(`Incorrect guess. Try again. Attempt ${this.attempts}/${this.maxAttempts}`);
      }
    }
  }
};

module.exports = wordGame;