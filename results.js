// ======================================
// THE WORLDVIEW COMPASS
// Results Page
// ======================================

// Philosophy descriptions

const philosophyDescriptions = {

    "Humanism":
        "You value human dignity, compassion, reason, and the potential of people to solve problems together.",

    "Existentialism":
        "You believe individuals create meaning through their own choices and accept responsibility for their lives.",

    "Stoicism":
        "You value self-control, resilience, wisdom, and focusing on what you can control.",

    "Confucianism":
        "You believe harmony, respect, family, and moral character are essential to a good society.",

    "Naturalism":
        "You believe reality is best understood through nature and scientific explanation.",

    "Theism":
        "You believe a divine being or higher power plays an important role in reality.",

    "Pantheism":
        "You believe the universe and the divine are deeply interconnected.",

    "Agnosticism":
        "You believe some questions may never have definite answers and remain open-minded.",

    "Pragmatism":
        "You judge ideas by how well they work in real life rather than abstract theory.",

    "Empiricism":
        "You trust observation, evidence, and experience as the foundation of knowledge.",

    "Rationalism":
        "You believe logic and reason are the best guides to truth.",

    "Idealism":
        "You believe ideas, consciousness, or the mind are central to understanding reality.",

    "Utilitarianism":
        "You believe actions should produce the greatest good for the greatest number.",

    "Secular Humanism":
        "You believe people can live ethical and meaningful lives without religion.",

    "Deism":
        "You believe a creator exists but generally does not intervene in the universe.",

    "Absurdism":
        "You embrace life despite uncertainty and the absence of absolute meaning.",

    "Nihilism":
        "You question whether objective meaning or purpose truly exists."

};

// Load results

window.onload = function () {

    const results =
    JSON.parse(localStorage.getItem("worldviewScores"));

    if (!results || results.length === 0) {

        document.body.innerHTML =
            "<h2 style='text-align:center;margin-top:100px;'>No results found.</h2>";

        return;
    }

    // Primary philosophy

    document.getElementById("primaryName").textContent =
        results[0].name;

    document.getElementById("primaryDescription").textContent =
        philosophyDescriptions[results[0].name] ||
        "Description coming soon.";

    // Top Three

    const topThree =
        document.getElementById("topThree");

    results.slice(0,3).forEach(item=>{

        topThree.innerHTML += `
            <div class="result-card">
                <h3>${item.name}</h3>
                <p>${item.percentage}% Match</p>
            </div>
        `;

    });

    // Score List

    const scoreList =
        document.getElementById("scoreList");

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

};
