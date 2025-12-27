/**
 * Main application entry point
 */
const App = {
  async init() {
    // Initialize renderer
    if (!Renderer.init('app')) {
      console.error('Could not find app element');
      return;
    }
    
    // Load quiz questions
    const loaded = await Quiz.init();
    if (!loaded) {
      Renderer.renderError('Failed to load quiz. Please try again.');
      return;
    }
    
    // Start the quiz
    this.showQuestion();
  },
  
  showQuestion() {
    if (Quiz.isComplete()) {
      this.showEmailCapture();
      return;
    }
    
    const question = Quiz.getCurrentQuestion();
    const progress = Quiz.getProgress();
    
    Renderer.renderQuestion(
      question,
      Quiz.currentIndex,
      progress.total,
      (answerIndex) => this.handleAnswer(answerIndex)
    );
  },
  
  handleAnswer(answerIndex) {
    Quiz.submitAnswer(answerIndex);
    this.showQuestion();
  },
  
  showEmailCapture() {
    Renderer.renderEmailCapture(
      (email) => this.handleEmailSubmit(email),
      () => this.showResults()
    );
  },
  
  handleEmailSubmit(email) {
    console.log('Captured email:', email);
    // TODO: Send email to your backend/service
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
    this.showResults();
  },
  
  showResults() {
    const results = Quiz.getResults();
    Renderer.renderResults(results, () => this.restart());
  },
  
  restart() {
    Quiz.reset();
    this.showQuestion();
  }
};

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});