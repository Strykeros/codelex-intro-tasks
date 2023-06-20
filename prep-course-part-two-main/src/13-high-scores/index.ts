/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];

  constructor(scores: number[]) {
    this.scores = scores;
  }

  // returns last score from arrau
  get latest() {
    return this.scores[this.scores.length - 1];
  }

  // returns the max score from the array
  get personalBest() {
    let maxScore = this.scores[0];
    for (let i = 1; i < this.scores.length; i++) {
      if (this.scores[i] > maxScore) {
        maxScore = this.scores[i];
      }
    }
    return maxScore;
  }

  // returns 3 highest scores from the array
  get personalTopThree() {
    const sortedScores = [...this.scores];
    sortedScores.sort(function (a, b) {
      return b - a;
    });
    return sortedScores.slice(0, 3);
  }
}

export { HighScores };
