let questions = []
let currentQuestion = 0;
const scores = { carrot: 0, potato: 0 };
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
        a => `<button onclick="answer('${a.value}')">${a.text}</button>`
      ).join("")}
    </div>
  `;
}

function answer(value) {
  scores[value]++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const result = scores.carrot > scores.potato ? "Carrot 🥕" : "Potato 🥔";

  app.innerHTML = `
    <h1>You are a ${result}</h1>
    <button onclick="location.reload()">Restart</button>
  `;
}

renderQuestion();
