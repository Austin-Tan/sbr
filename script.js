let questions = []
let currentQuestion = 0;
const scores = { s: 0, b: 0, r: 0 };
const app = document.getElementById("app");

fetch("questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    renderQuestion();
  })
  .catch(err => {
    app.textContent = "Failed to load quiz.";
    console.error(err);
  });

function renderQuestion() {
  const q = questions[currentQuestion];
  app.innerHTML = `
    <h1>${q.text}</h1>
    <div>
      ${q.answers.map(
        (a, i) => `<button onclick="answer('${i}')">${a.text}</button>`
      ).join("")}
    </div>
    <p>Question ${currentQuestion + 1} of ${questions.length}</p>
  `;
}

function answer(answerIndex) {
    const weights = questions[currentQuestion].answers[answerIndex].weights;

    for (const attr in weights) {
        const weight = weights[attr]
        scores[attr] += weight;
        console.log(`Added ${weight} to attribute ${attr}`)
    }
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
const total = Object.values(scores).reduce((a, b) => a + b, 0);

  const percentages = {};
  for (const attr in scores) {
    percentages[attr] = Math.round((scores[attr] / total) * 100);
  }


  // Find the predominant trait
  const maxScore = Math.max(...Object.values(scores));
  const predominantTraits = Object.keys(scores).filter(
    key => scores[key] === maxScore
  );

  // Pick one for the image (first in case of tie)
  const dominantTrait = predominantTraits[0];

  const traitImages = {
    "s": "sweetie.png",
    "b": "baddie.png",
    "r": "rascal.png"
  };

  // Generate list items with bold for the predominant trait(s)
  const listItems = Object.keys(scores)
    .map(attr => {
        let name = ""
        switch(attr) {
            case "s":
                name = "Sweetie"
                break;
            case "b":
                name = "Baddie"
                break;
            case "r":
                name = "Rascal"
                break;
            default:
                break;
        }
      const text = `${name}: ${percentages[attr]}%`;
      return predominantTraits.includes(attr)
        ? `<li><strong>${text}</strong></li>`   // bold
        : `<li>${text}</li>`;
    })
    .join("");

  app.innerHTML = `
    <h1>Your Truth Revealed</h1>

    <img
        src="${traitImages[dominantTrait]}"
        alt="${dominantTrait}"
          class="result-image"

    />

    <ul>
      ${listItems}
    </ul>
    <button onclick="location.reload()">Restart</button>
  `;
}

renderQuestion();
