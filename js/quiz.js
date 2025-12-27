/**
 * Quiz state management and logic
 */
const Quiz = {
  questions: [],
  currentIndex: 0,
  scores: { s: 0, b: 0, r: 0 },
  
  /**
   * Initialize the quiz by loading questions
   */
  async init() {
    try {
      const response = await fetch(CONFIG.questionsPath);
      if (!response.ok) throw new Error('Failed to fetch questions');
      this.questions = await response.json();
      this.reset();
      return true;
    } catch (error) {
      console.error('Quiz init error:', error);
      return false;
    }
  },
  
  /**
   * Reset quiz to initial state
   */
  reset() {
    this.currentIndex = 0;
    this.scores = { s: 0, b: 0, r: 0 };
  },
  
  /**
   * Get current question
   */
  getCurrentQuestion() {
    return this.questions[this.currentIndex] || null;
  },
  
  /**
   * Process an answer and advance
   */
  submitAnswer(answerIndex) {
    const question = this.getCurrentQuestion();
    if (!question) return false;
    
    const weights = question.answers[answerIndex]?.weights;
    if (!weights) return false;
    
    // Add weights to scores
    for (const [trait, weight] of Object.entries(weights)) {
      if (this.scores.hasOwnProperty(trait)) {
        this.scores[trait] += weight;
      }
    }
    
    this.currentIndex++;
    return true;
  },
  
  /**
   * Check if quiz is complete
   */
  isComplete() {
    return this.currentIndex >= this.questions.length;
  },
  
  /**
   * Get progress info
   */
  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.questions.length
    };
  },
  
  /**
   * Calculate and return results
   */
  getResults() {
    const total = Object.values(this.scores).reduce((a, b) => a + b, 0);
    
    // Calculate percentages
    const percentages = {};
    for (const [trait, score] of Object.entries(this.scores)) {
      percentages[trait] = total > 0 ? Math.round((score / total) * 100) : 0;
    }
    
    // Find dominant trait(s)
    const maxScore = Math.max(...Object.values(this.scores));
    const dominantTraits = Object.keys(this.scores).filter(
      key => this.scores[key] === maxScore
    );
    
    return {
      scores: { ...this.scores },
      percentages,
      dominantTraits,
      primaryTrait: dominantTraits[0]
    };
  }
};