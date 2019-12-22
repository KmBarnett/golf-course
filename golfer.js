class Golfer {
  constructor(golfer) {
    this.name = golfer.name
    this.handicap = golfer.handicap
    this.frustration = 0
    this.confidence = 0
  }
  calculateAvg() {
    return `I usually shoot a ${this.handicap + 72} on average.`
  }
  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard'){
      this.frustration = 500
    } else if (golfCourse.difficulty === 'moderate') {
    this.frustration = 100
    }
  }
  hitTheRange() {
    this.confidence += 10
  }
}

module.exports = Golfer;
