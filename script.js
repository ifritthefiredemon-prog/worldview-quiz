// ==========================
// ELEMENTS
// ==========================

const openButton = document.getElementById("openAssessment");
const modal = document.getElementById("assessmentModal");
const startButton = document.getElementById("startQuiz");

const loadingScreen = document.getElementById("loadingScreen");
const progressFill = document.getElementById("progressFill");
const loadingText = document.getElementById("loadingText");

const quizScreen = document.getElementById("quizScreen");

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const quizProgressFill = document.getElementById("quizProgressFill");

// ==========================
// QUIZ VARIABLES
// ==========================

let currentQuestion = 0;

// ==========================
// OPEN MODAL
// ==========================

openButton.onclick = function () {

    modal.classList.add("show");

};

// ==========================
// CLOSE MODAL
// ==========================

modal.onclick = function (e) {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

};

// ==========================
// BEGIN JOURNEY
// ==========================

startButton.onclick = function () {

    modal.classList.remove("show");

    loadingScreen.classList.add("show");

    startLoading();

};

// ==========================
// LOADING
// ==========================

function startLoading() {

    let progress = 0;

    const messages = [

        "Calibrating your Worldview Compass...",

        "Preparing questions...",

        "Analyzing worldview dimensions...",

        "Almost Ready..."

    ];

    loadingText.innerText = messages[0];

    const timer = setInterval(() => {

        progress++;

        progressFill.style.width = progress + "%";

        if (progress == 25)
            loadingText.innerText = messages[1];

        if (progress == 50)
            loadingText.innerText = messages[2];

        if (progress == 80)
            loadingText.innerText = messages[3];

        if (progress >= 100) {

            clearInterval(timer);

            loadingScreen.classList.remove("show");

            quizScreen.classList.add("show");

            loadQuestion();

        }

    }, 25);

}

// ==========================
// LOAD QUESTION
// ==========================

function loadQuestion() {

    const question = questions[currentQuestion];

    questionCounter.innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.innerText = question.statement;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    quizProgressFill.style.width = progress + "%";

}
