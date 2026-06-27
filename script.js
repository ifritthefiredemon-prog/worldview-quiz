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

// ---------- VARIABLES ----------

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

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

    // Save nickname
    const nickname = document
        .getElementById("nickname")
        .value
        .trim();

    localStorage.setItem(
        "worldviewNickname",
        nickname || "Explorer"
    );

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

            hero.style.display = "none";
            nav.style.display = "none";

            quizScreen.classList.add("show");

            loadQuestion();

        }

    }, 20);

}

// ---------- LOAD QUESTION ----------

function loadQuestion() {

    const question = questions[currentQuestion];

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.statement;

    quizProgressFill.style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    // Clear radio buttons
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.checked = false;
    });

    // Restore saved answer
    if (answers[currentQuestion] !== null) {

        const saved = document.querySelector(
            `input[name="answer"][value="${answers[currentQuestion]}"]`
        );

        if (saved) {
            saved.checked = true;
        }

    }

    // Update buttons
    prevButton.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish";
    } else {
        nextButton.textContent = "Next →";
    }

}

// ---------- NEXT ----------

nextButton.addEventListener("click", () => {

    const selected =
        document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    answers[currentQuestion] = Number(selected.value);

    if (currentQuestion === questions.length - 1) {

    // Calculate philosophy scores
    const scores = calculateScores(questions, answers);

    console.log(scores);

    // Save for the results page
    localStorage.setItem(
        "worldviewScores",
        JSON.stringify(scores)
    );

    // Go to results page
    window.location.href = "results.html";

    return;

    }

    currentQuestion++;

    loadQuestion();

});

// ---------- PREVIOUS ----------

prevButton.addEventListener("click", () => {

    if (currentQuestion === 0) return;

    const selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {
        answers[currentQuestion] = Number(selected.value);
    }

    currentQuestion--;

    loadQuestion();

});
