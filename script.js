// ======================================
// THE WORLDVIEW COMPASS
// Main Script v2
// ======================================

// ---------- ELEMENTS ----------

const openButton = document.getElementById("openAssessment");
const modal = document.getElementById("assessmentModal");
const startButton = document.getElementById("startQuiz");

const loadingScreen = document.getElementById("loadingScreen");
const progressFill = document.getElementById("progressFill");
const loadingText = document.getElementById("loadingText");

const hero = document.querySelector(".hero");
const nav = document.querySelector("nav");

const quizScreen = document.getElementById("quizScreen");

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const quizProgressFill = document.getElementById("quizProgressFill");

const nextButton = document.getElementById("nextQuestion");
const prevButton = document.getElementById("prevQuestion");

const answerInputs = document.querySelectorAll('input[name="answer"]');

// ---------- VARIABLES ----------

let currentQuestion = 0;
let answers = new Array(window.questions.length).fill(null);

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

        if(progress===25) loadingText.textContent=messages[1];
        if(progress===50) loadingText.textContent=messages[2];
        if(progress===80) loadingText.textContent=messages[3];

        if(progress>=100){

            clearInterval(timer);

            loadingScreen.classList.remove("show");

            hero.style.display="none";
            nav.style.display="none";

            quizScreen.classList.add("show");

            loadQuestion();

        }

    },20);

}
