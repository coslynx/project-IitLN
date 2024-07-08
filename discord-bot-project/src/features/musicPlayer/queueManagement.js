const queueManagement = {
  queue: [],
  nowPlaying: null,
  isPlaying: false,

  addToQueue(song) {
    this.queue.push(song);
  },

  removeFromQueue(index) {
    if (index >= 0 && index < this.queue.length) {
      this.queue.splice(index, 1);
    }
  },

  playNext() {
    if (this.queue.length > 0) {
      this.nowPlaying = this.queue.shift();
      this.isPlaying = true;
    } else {
      this.nowPlaying = null;
      this.isPlaying = false;
    }
  },

  pause() {
    this.isPlaying = false;
  },

  resume() {
    this.isPlaying = true;
  },

  skip() {
    this.playNext();
  },

  getQueue() {
    return this.queue;
  },

  getNowPlaying() {
    return this.nowPlaying;
  },

  getIsPlaying() {
    return this.isPlaying;
  }
};

module.exports = queueManagement;