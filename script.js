// ==========================
// ELEMENTS
// ==========================

const openButton = document.getElementById("openAssessment");
const modal = document.getElementById("assessmentModal");
const startButton = document.getElementById("startQuiz");
const loadingScreen = document.getElementById("loadingScreen");

// ==========================
// OPEN MODAL
// ==========================

openButton.addEventListener("click", () => {
    modal.classList.add("show");
});

// ==========================
// CLOSE MODAL
// ==========================

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// ==========================
// BEGIN JOURNEY
// ==========================

startButton.addEventListener("click", () => {
    modal.classList.remove("show");
    loadingScreen.classList.add("show");
});
