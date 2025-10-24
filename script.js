// Dom ELe,ents

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "2024-ൽ ഏറ്റവും കൂടുതൽ കളക്ഷൻ നേടിയ മലയാള സിനിമ ഏതാണ്?",
    answers: [
      { text: "The Goat Life (ആടുജീവിതം)", correct: false },
      { text: "Premalu (പ്രേമലു)", correct: false },
      { text: "Manjummel Boys (മഞ്ഞുമ്മൽ ബോയ്സ്)", correct: true },
      { text: "Aavesham (ആവേശം)", correct: false },
    ],
  },
  {
    question: "'Guruvayoor Ambalanadayil' എന്ന സിനിമയുടെ സംവിധായകൻ ആരാണ്?",
    answers: [
      { text: "Chidambaram (ചിദംബരം)", correct: false },
      { text: "Vipin Das (വിപിൻ ദാസ്)", correct: true },
      { text: "Gireesh A. D. (ഗിരീഷ് എ.ഡി.)", correct: false },
      { text: "Jithu Madhavan (ജിത്തു മാധവൻ)", correct: false },
    ],
  },
  {
    question:
      "മോഹൻലാലിനെ നായകനാക്കി ലിജോ ജോസ് പെല്ലിശ്ശേരി സംവിധാനം ചെയ്ത 2024-ലെ സിനിമ ഏതാണ്?",
    answers: [
      { text: "Malaikottai Vaaliban (മലൈക്കോട്ടൈ വാലിബൻ)", correct: true },
      { text: "L2: Empuraan (എമ്പുരാൻ)", correct: false },
      { text: "Neru (നേര്)", correct: false },
      { text: "Odiyan (ഒടിയൻ)", correct: false },
    ],
  },
  {
    question:
      "'ഭ്രമയുഗം' എന്ന ഹൊറർ-ത്രില്ലർ സിനിമയിലെ പ്രധാന കഥാപാത്രത്തെ അവതരിപ്പിച്ചത് ആരാണ്?",
    answers: [
      { text: "Fahadh Faasil (ഫഹദ് ഫാസിൽ)", correct: false },
      { text: "Jayasurya (ജയസൂര്യ)", correct: false },
      { text: "Mammootty (മമ്മൂട്ടി)", correct: true },
      { text: "Prithviraj Sukumaran (പൃഥ്വിരാജ് സുകുമാരൻ)", correct: false },
    ],
  },
  {
    question:
      "2024-ൽ റിലീസ് ചെയ്ത 'വരഷങ്ങൾക്കു ശേഷം' (Varshangalkku Shesham) എന്ന സിനിമയുടെ സംവിധായകൻ ആരാണ്?",
    answers: [
      { text: "Vineeth Sreenivasan (വിനീത് ശ്രീനിവാസൻ)", correct: true },
      { text: "Alphonse Puthren (അൽഫോൺസ് പുത്രൻ)", correct: false },
      { text: "Basil Joseph (ബേസിൽ ജോസഫ്)", correct: false },
      { text: "Omar Lulu (ഒമർ ലുലു)", correct: false },
    ],
  }, // --- LATEST MALAYALAM MOVIE QUESTIONS END HERE ---
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}