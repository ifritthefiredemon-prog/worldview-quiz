// ======================================
// THE WORLDVIEW COMPASS
// Results Page v3
// ======================================

// --------------------------------------
// Short Descriptions
// --------------------------------------

const philosophyDescriptions = {

    "Humanism":"You value human dignity, compassion, reason, and helping people flourish together.",

    "Existentialism":"You believe meaning is created through personal choice and responsibility.",

    "Stoicism":"You believe wisdom comes from mastering yourself rather than controlling the world.",

    "Confucianism":"You value harmony, respect, family, and moral responsibility.",

    "Naturalism":"You trust scientific explanations and the natural world.",

    "Theism":"You believe a divine reality plays an important role in existence.",

    "Pantheism":"You see the universe and the divine as deeply interconnected.",

    "Agnosticism":"You remain open-minded about questions that cannot be answered with certainty.",

    "Pragmatism":"You judge ideas by how well they work in practice.",

    "Empiricism":"You trust observation, evidence, and experience.",

    "Rationalism":"You value logic and reason above all else.",

    "Idealism":"You believe ideas and consciousness are central to reality.",

    "Utilitarianism":"You believe the best actions produce the greatest good for the greatest number.",

    "Secular Humanism":"You believe people can live meaningful and ethical lives without religion.",

    "Deism":"You believe a creator exists but rarely intervenes.",

    "Absurdism":"You embrace life even without absolute meaning.",

    "Nihilism":"You question whether objective meaning truly exists."

};

// --------------------------------------
// Detailed Meaning
// --------------------------------------

const philosophyMeanings = {

    "Humanism":"You generally believe people are capable of improving themselves and society through reason, compassion, and cooperation. Human dignity and ethical responsibility are central to your worldview.",

    "Existentialism":"You believe meaning is created through your own choices. Rather than waiting for life to provide purpose, you accept responsibility for creating it yourself.",

    "Stoicism":"You strive to remain calm under pressure, focusing on what you can control while accepting what you cannot. Discipline and resilience guide your decisions.",

    "Confucianism":"You believe strong moral character, respect, family, and social harmony create a healthy society. Personal responsibility begins with how we treat others.",

    "Naturalism":"You understand reality primarily through nature and science. Evidence and observation shape how you evaluate ideas and beliefs.",

    "Theism":"You believe a higher power or divine being provides purpose, moral guidance, and meaning within the universe.",

    "Pantheism":"You view nature, the universe, and the divine as deeply connected, often finding spirituality within the natural world itself.",

    "Agnosticism":"You recognize that some questions may never have definite answers. Rather than claiming certainty, you remain intellectually open-minded.",

    "Pragmatism":"You judge ideas by their practical usefulness. If something consistently produces good results, you see value in applying it.",

    "Empiricism":"You believe knowledge should come from evidence, observation, experimentation, and real-world experience.",

    "Rationalism":"You naturally rely on logic, careful reasoning, and critical thinking. You prefer evidence-supported conclusions and enjoy examining different perspectives before making decisions.",

    "Idealism":"You believe ideas, values, and consciousness are fundamental to understanding reality, often placing principles above material concerns.",

    "Utilitarianism":"You evaluate actions by their consequences and generally believe the best decisions produce the greatest benefit for the greatest number of people.",

    "Secular Humanism":"You believe people can build meaningful, ethical, and fulfilling lives through reason, compassion, and shared human values without depending on religion.",

    "Deism":"You believe a creator exists but allows the universe to function according to natural laws without regular supernatural intervention.",

    "Absurdism":"You recognize that life may lack absolute meaning, yet you choose to embrace life fully and create value through your own experiences.",

    "Nihilism":"You question whether objective meaning or universal purpose truly exists, encouraging deep examination of assumptions and beliefs."

};

// --------------------------------------
// Load Results
// --------------------------------------

window.onload = function () {

    const results = JSON.parse(localStorage.getItem("worldviewScores"));

    if (!results || results.length === 0) {

        document.body.innerHTML =
            "<h2 style='text-align:center;margin-top:100px;'>No Results Found.</h2>";

        return;
    }

    // --------------------------
    // Primary Philosophy
    // --------------------------

    document.getElementById("primaryName").textContent =
        results[0].name;

    document.getElementById("primaryDescription").textContent =
        philosophyDescriptions[results[0].name] ||
        "Description coming soon.";

    document.getElementById("meaningText").textContent =
        philosophyMeanings[results[0].name] ||
        "More information about this philosophy will be available soon.";

    // --------------------------
    // Top Three
    // --------------------------

    const topThree = document.getElementById("topThree");

    topThree.innerHTML = "";

    results.slice(0,3).forEach((item,index)=>{

        topThree.innerHTML += `

        <div class="result-card">

            <h3>#${index+1}</h3>

            <h2>${item.name}</h2>

            <p>${item.percentage}% Match</p>

        </div>

        `;

    });

    // --------------------------
    // Score Bars
    // --------------------------

    const scoreList = document.getElementById("scoreList");

    scoreList.innerHTML = "";

    results.forEach(item=>{

        scoreList.innerHTML += `

        <div class="score-item">

            <div class="score-header">

                <span>${item.name}</span>

                <span>${item.percentage}%</span>

            </div>

            <div class="score-bar">

                <div class="score-fill"
                     style="width:${item.percentage}%">
                </div>

            </div>

        </div>

        `;

    });

    // --------------------------
    // Radar Chart
    // --------------------------

    const ctx = document
        .getElementById("radarChart")
        .getContext("2d");

    new Chart(ctx, {

        type: "radar",

        data: {

            labels: results.slice(0,8).map(r => r.name),

            datasets: [{

                data: results.slice(0,8).map(r => r.percentage),

                backgroundColor: "rgba(22,196,255,.25)",

                borderColor: "#16c4ff",

                borderWidth: 3,

                pointBackgroundColor: "#16c4ff",

                pointRadius: 4,

                fill: true

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                r: {

                    min: 0,

                    max: 100,

                    ticks: {

                        display: false

                    },

                    grid: {

                        color: "rgba(255,255,255,.15)"

                    },

                    angleLines: {

                        color: "rgba(255,255,255,.15)"

                    },

                    pointLabels: {

                        color: "#ffffff",

                        font: {

                            size: 12

                        }

                    }

                }

            }

        }

    });

};
