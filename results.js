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

window.onload = () => {

    const results = JSON.parse(localStorage.getItem("worldviewScores"));

    if(!results){

        document.body.innerHTML="<h2>No Results Found</h2>";

        return;

    }

    // Main philosophy

    document.getElementById("primaryName").textContent=
        results[0].name;

    document.getElementById("primaryDescription").textContent=
        philosophyDescriptions[results[0].name] ||
        "Description coming soon.";

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
