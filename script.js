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

openButton.addEventListener("click", () => {

    modal.classList.add("show");

});

// ==========================
// CLOSE MODAL
// ==========================

modal.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.classList.remove("show");

    }

});

// ==========================
// BEGIN JOURNEY
// ==========================

startButton.addEventListener("click", () => {

    modal.classList.remove("show");

    loadingScreen.classList.add("show");

    startLoading();

});

// ==========================
// LOADING ANIMATION
// ==========================

function startLoading(){

    let progress = 0;

    const messages = [

        "Calibrating your Worldview Compass...",

        "Analyzing philosophical dimensions...",

        "Preparing assessment questions...",

        "Loading worldview framework...",

        "Almost ready..."

    ];

    let currentMessage = 0;

    loadingText.innerText = messages[0];

    progressFill.style.width = "0%";

    const timer = setInterval(()=>{

        progress++;

        progressFill.style.width = progress + "%";

        if(progress === 20){

            loadingText.innerText = messages[1];

        }

        if(progress === 40){

            loadingText.innerText = messages[2];

        }

        if(progress === 60){

            loadingText.innerText = messages[3];

        }

        if(progress === 85){

            loadingText.innerText = messages[4];

        }

        if(progress >= 100){

            clearInterval(timer);

            setTimeout(()=>{

                loadingScreen.classList.remove("show");

                alert("Question 1 will appear here.");

            },500);

        }

    },30);

}
