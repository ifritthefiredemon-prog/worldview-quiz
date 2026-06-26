// ======================================
// THE WORLDVIEW COMPASS
// Main Script
// ======================================

// ---------- ELEMENTS ----------

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

const hero = document.querySelector(".hero");
const nav = document.querySelector("nav");

// ---------- VARIABLES ----------

let answers = new Array(questions.length).fill(null);

let currentQuestion = 0;

const nextButton = document.getElementById("nextQuestion");
const prevButton = document.getElementById("prevQuestion");

const nextButton = document.getElementById("nextQuestion");
const prevButton = document.getElementById("prevQuestion");

// ---------- OPEN MODAL ----------

openButton.addEventListener("click", () => {

    modal.classList.add("show");

});

// ---------- CLOSE MODAL ----------

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

});

// ---------- BEGIN QUIZ ----------

startButton.addEventListener("click", () => {

    modal.classList.remove("show");

    loadingScreen.classList.add("show");

    startLoading();

});

// ---------- LOADING ----------

function startLoading() {

    let progress = 0;

    const messages = [

        "Calibrating your Worldview Compass...",
        "Preparing questions...",
        "Analyzing worldview dimensions...",
        "Almost Ready..."

    ];

    loadingText.textContent = messages[0];

    const timer = setInterval(() => {

        progress++;

        progressFill.style.width = progress + "%";

        if (progress === 25)
            loadingText.textContent = messages[1];

        if (progress === 50)
            loadingText.textContent = messages[2];

        if (progress === 80)
            loadingText.textContent = messages[3];

        if (progress >= 100) {

            clearInterval(timer);

            loadingScreen.classList.remove("show");

            // Hide landing page
            hero.style.display = "none";
            nav.style.display = "none";

            // Show quiz
            quizScreen.classList.add("show");

            loadQuestion();

        }

    }, 20);

}

// ---------- LOAD QUESTION ----------

function loadQuestion() {

    if (typeof questions === "undefined") {

        alert("questions.js failed to load.");

        return;

    }

    const question = questions[currentQuestion];

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.statement;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    quizProgressFill.style.width = progress + "%";

}
// ==========================
// NEXT QUESTION
// ==========================

nextButton.addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

});
