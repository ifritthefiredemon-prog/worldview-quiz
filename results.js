// ======================================
// THE WORLDVIEW COMPASS
// Results Page v2
// ======================================

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
const philosophyMeanings = {

    "Humanism":
        "You generally believe that people are capable of improving themselves and society through reason, compassion, and cooperation. You tend to value human dignity and ethical responsibility over rigid authority.",

    "Existentialism":
        "You believe life gains meaning through the choices you make. Rather than expecting purpose to be given, you accept responsibility for creating your own direction.",

    "Stoicism":
        "You focus on maintaining self-control, emotional resilience, and inner peace. You try to devote your energy to what you can control while accepting what you cannot.",

    "Confucianism":
        "You place great importance on moral character, respect, family, and social harmony. You believe a stable society begins with responsible individuals.",

    "Naturalism":
        "You understand reality primarily through nature and scientific inquiry. Evidence and observable facts guide how you interpret the world.",

    "Theism":
        "You believe a divine being or higher power plays an important role in existence and may provide purpose, morality, and guidance.",

    "Pantheism":
        "You see the universe, nature, and the divine as deeply interconnected. Spirituality is often found within the natural world itself.",

    "Agnosticism":
        "You remain open-minded about ultimate questions. Rather than claiming certainty, you recognize the limits of human knowledge.",

    "Pragmatism":
        "You evaluate ideas by their practical results. If something consistently works in real life, you see value in it regardless of abstract theories.",

    "Empiricism":
        "You trust observation, experimentation, and evidence as the strongest foundations for knowledge and understanding.",

    "Rationalism":
        "You naturally rely on logic, critical thinking, and careful reasoning when making decisions. You prefer evidence-supported conclusions over assumptions and enjoy examining ideas from multiple perspectives.",

    "Idealism":
        "You believe ideas, values, and consciousness play a central role in understanding reality, often placing importance on principles over material concerns.",

    "Utilitarianism":
        "You often evaluate decisions based on their consequences and believe the best actions are those that produce the greatest overall benefit.",

    "Secular Humanism":
        "You believe ethical living, meaning, and purpose can be achieved through human reason and compassion without depending on religious belief.",

    "Deism":
        "You believe a creator exists but generally allows the universe to operate according to natural laws without ongoing intervention.",

    "Absurdism":
        "You recognize that life may not provide absolute meaning, yet you believe people can still live fully, find joy, and embrace the human experience.",

    "Nihilism":
        "You question whether objective meaning or universal purpose truly exists, encouraging deep examination of beliefs and assumptions."

};
window.onload = () => {

    const results = JSON.parse(localStorage.getItem("worldviewScores"));

    if(!results){

        document.body.innerHTML="<h2>No Results Found</h2>";

        return;

    }

    // Main philosophy

    document.getElementById("primaryName").textContent=
        results[0].name;

    document.getElementById("meaningText").textContent =
    philosophyMeanings[results[0].name] ||
    "More information about this philosophy will be available soon.";

    // Top Three

    const topThree=document.getElementById("topThree");

    results.slice(0,3).forEach((item,index)=>{

        topThree.innerHTML+=`

        <div class="result-card">

            <h3>#${index+1}</h3>

            <h2>${item.name}</h2>

            <p>${item.percentage}% Match</p>

        </div>

        `;

    });

    // Score bars

    const scoreList=document.getElementById("scoreList");

    results.forEach(item=>{

        scoreList.innerHTML+=`

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

    // Radar Chart

    const ctx=document
        .getElementById("radarChart")
        .getContext("2d");

    new Chart(ctx,{

        type:"radar",

        data:{

            labels:results.slice(0,8).map(r=>r.name),

            datasets:[{

                label:"Worldview Profile",

                data:results.slice(0,8).map(r=>r.percentage),

                fill:true,

                backgroundColor:"rgba(22,196,255,.25)",

                borderColor:"#16c4ff",

                borderWidth:3,

                pointBackgroundColor:"#16c4ff"

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                r:{

                    suggestedMin:0,

                    suggestedMax:100,

                    ticks:{
                        display:false
                    },

                    grid:{
                        color:"rgba(255,255,255,.15)"
                    },

                    angleLines:{
                        color:"rgba(255,255,255,.15)"
                    },

                    pointLabels:{
                        color:"#fff",
                        font:{
                            size:12
                        }
                    }

                }

            }

        }

    });

};
