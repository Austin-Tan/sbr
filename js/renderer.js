/**
 * DOM rendering functions
 */
const Renderer = {
  app: null,
  
  /**
   * Initialize renderer with app element
   */
  init(elementId = 'app') {
    this.app = document.getElementById(elementId);
    return this.app !== null;
  },
  
  /**
   * Render error message
   */
  renderError(message = 'Something went wrong. Please refresh the page.') {
    this.app.innerHTML = `
      <div class="error">
        <h2>Oops!</h2>
        <p>${message}</p>
        <button onclick="location.reload()">Try Again</button>
      </div>
    `;
  },
  
  renderQuestion(question, questionIndex, totalQuestions, onAnswer) {
    const answersHTML = question.answers
      .map((answer, index) => `
        <button class="answer-button" data-answer="${index}">${answer.text}</button>
      `)
      .join('');
    
    this.app.innerHTML = `
      <h2>${question.text}</h2>
      <div class="answers">
        ${answersHTML}
      </div>
      ${questionIndex > 0 ? `
        <p class="progress-text">Question ${questionIndex + 1} of ${totalQuestions}</p>
      ` : ''}
    `;
    
    // Attach event listeners (better than inline onclick)
    this.app.querySelectorAll('[data-answer]').forEach(button => {
      button.addEventListener('click', () => {
        const answerIndex = parseInt(button.dataset.answer, 10);
        onAnswer(answerIndex);
      });
    });
  },
  
  renderEmailCapture(onSubmit, onSkip) {
    this.app.innerHTML = `
      <h2>Just one more thing...</h2>
      <h3>Can we get your email?</h3>
      <p>We'd love to keep you up to date on all things Sweetie Baddie Rascal, with a no-spam guarantee.</p>
      
      <form id="email-form">
        <label for="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button id="skip-btn" class="secondary">I'm already signed up!</button>
    `;
    
    // Form submission
    document.getElementById('email-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      onSubmit(email);
    });
    
    // Skip button
    document.getElementById('skip-btn').addEventListener('click', onSkip);
  },
  
  /**
   * Render quiz results
   */
  renderResults(results, onRestart) {
    const { percentages, dominantTraits, primaryTrait } = results;
    
    const listItems = Object.keys(percentages)
      .map(trait => {
        const name = CONFIG.getTraitName(trait);
        const percent = percentages[trait];
        const text = `${name}: ${percent}%`;
        
        return dominantTraits.includes(trait)
          ? `<li><strong>${text}</strong></li>`
          : `<li>${text}</li>`;
      })
      .join('');
    
    this.app.innerHTML = `
      <h2>Your Truth Revealed: ${CONFIG.getTraitTitle(primaryTrait)}</h2>
      
      <img
        src="${CONFIG.getTraitImage(primaryTrait)}"
        alt="${CONFIG.getTraitName(primaryTrait)}"
        class="result-image"
      />

      <p>
        ${CONFIG.getTraitDescriptor(primaryTrait)}
      </p>
      
      <ul class="results-list">
        ${listItems}
      </ul>
      
      <button id="restart-btn">Take Quiz Again</button>
    `;
    
    document.getElementById('restart-btn').addEventListener('click', onRestart);
  }
};