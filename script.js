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
      "തരുൺ മൂർത്തി സംവിധാനം ചെയ്ത്, മോഹൻലാലും ശോഭനയും 20 വർഷങ്ങൾക്ക് ശേഷം വീണ്ടും ഒന്നിക്കുന്ന 2025-ൽ റിലീസ് ചെയ്യുന്ന സിനിമ ഏതാണ്?",
    answers: [
      { text: "Vrushabha (വൃഷഭ)", correct: false },
      { text: "L2: Empuraan (എമ്പുരാൻ)", correct: false },
      { text: "Thudarum (തുടരും)", correct: true },
      { text: "Ram (റാം)", correct: false },
    ],
  },
  {
    question:
      "നസ്ലെനും മമിത ബൈജുവും വീണ്ടും ഒന്നിക്കുന്ന, ഗിരീഷ് എ.ഡി. സംവിധാനം ചെയ്ത, പ്രണയ ചിത്രം ഏതാണ്?",
    answers: [
      { text: "Super Sharanya (സൂപ്പർ ശരണ്യ)", correct: false },
      { text: "Premalu (പ്രേമലു)", correct: true },
      {
        text: "Thanneer Mathan Dinangal (തണ്ണീർ മത്തൻ ദിനങ്ങൾ)",
        correct: false,
      },
      { text: "Manjummel Boys (മഞ്ഞുമ്മൽ ബോയ്സ്)", correct: false },
    ],
  },
  {
    question:
      "മലയാളത്തിലെ ഏറ്റവും പുതിയ ബ്ലോക്ക്ബസ്റ്റർ ചിത്രമായ 'ആവേശത്തി'ൽ (Aavesham) ഫഹദ് ഫാസിൽ അവതരിപ്പിച്ച പ്രധാന കഥാപാത്രത്തിൻ്റെ പേര് എന്താണ്?",
    answers: [
      { text: "Jayan (ജയൻ)", correct: false },
      { text: "Ranga (രംഗ)", correct: true },
      { text: "Dasan (ദാസൻ)", correct: false },
      { text: "Amban (അമ്പാൻ)", correct: false },
    ],
  },
  {
    question:
      "മോഹൻലാലും പ്രിയദർശനും ചേർന്ന് ഒരുക്കിയ 'മരക്കാർ അറബിക്കടലിന്റെ സിംഹം' എന്ന സിനിമയ്ക്ക് ലഭിച്ച ദേശീയ പുരസ്കാരം ഏതാണ്?",
    answers: [
      { text: "മികച്ച നടൻ (Best Actor)", correct: false },
      { text: "മികച്ച തിരക്കഥ (Best Screenplay)", correct: false },
      {
        text: "മികച്ച ദേശീയോദ്ഗ്രഥന ചിത്രം (Best Feature Film on National Integration)",
        correct: false,
      },
      { text: "മികച്ച ഫീച്ചർ ചിത്രം (Best Feature Film)", correct: true },
    ],
  },
  {
    question:
      "മോഹൻലാൽ, മീന, പൃഥ്വിരാജ്, കല്യാണി പ്രിയദർശൻ എന്നിവർ പ്രധാന വേഷങ്ങളിൽ അഭിനയിച്ച, പൃഥ്വിരാജ് സംവിധാനം ചെയ്ത കുടുംബചിത്രം ഏതാണ്?",
    answers: [
      { text: "Lucifer (ലൂസിഫർ)", correct: false },
      { text: "Bro Daddy (ബ്രോ ഡാഡി)", correct: true },
      { text: "Neru (നേര്)", correct: false },
      {
        text: "Ittimani: Made in China (ഇട്ടിമാണി: മെയ്ഡ് ഇൻ ചൈന)",
        correct: false,
      },
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