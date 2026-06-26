// ==========================
// ELEMENTS
// ==========================

const openButton = document.getElementById("openAssessment");
const modal = document.getElementById("assessmentModal");

const startButton = document.getElementById("startQuiz");

const loadingScreen = document.getElementById("loadingScreen");
const progressFill = document.getElementById("progressFill");
const loadingText = document.getElementById("loadingText");

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

    alert("Begin Journey clicked!");

    modal.classList.remove("show");

    loadingScreen.classList.add("show");

};
