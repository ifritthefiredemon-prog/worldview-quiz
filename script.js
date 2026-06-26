const openButton = document.getElementById("openAssessment");
const modal = document.getElementById("assessmentModal");

openButton.addEventListener("click", function () {
    modal.classList.add("show");
});
