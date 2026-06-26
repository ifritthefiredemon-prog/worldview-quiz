alert("JavaScript Loaded!");

const openButton = document.getElementById("openAssessment");
const modal = document.getElementById("assessmentModal");

openButton.addEventListener("click", function () {
    alert("Button clicked!");
    modal.classList.add("show");
});
