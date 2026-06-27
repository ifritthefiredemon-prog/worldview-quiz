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

const philosophyAnalysis = {

    "Humanism":{

        strengths:[
            "Shows genuine compassion and empathy toward others.",
            "Believes people can improve through education and cooperation.",
            "Values fairness, equality, and human dignity.",
            "Encourages open-minded discussion and critical thinking."
        ],

        blindSpots:[
            "May place too much faith in human goodness.",
            "Can become emotionally exhausted helping everyone.",
            "May underestimate the importance of traditions or authority.",
            "Sometimes struggles to make difficult decisions that may hurt individuals."
        ]

    },

    "Existentialism":{

        strengths:[
            "Highly independent thinker.",
            "Accepts responsibility for personal choices.",
            "Finds meaning through authentic living.",
            "Adapts well to uncertainty and change."
        ],

        blindSpots:[
            "Can overanalyze life's purpose.",
            "May feel isolated from others.",
            "Can become overwhelmed by personal responsibility.",
            "May reject helpful traditions too quickly."
        ]

    },

    "Stoicism":{

        strengths:[
            "Remains calm under pressure.",
            "Emotionally resilient during adversity.",
            "Makes rational rather than impulsive decisions.",
            "Focuses energy on what can actually be controlled."
        ],

        blindSpots:[
            "May suppress emotions instead of expressing them.",
            "Can appear emotionally distant.",
            "May tolerate unhealthy situations for too long.",
            "Sometimes values acceptance more than necessary change."
        ]

    },

    "Confucianism":{

        strengths:[
            "Values loyalty, respect, and responsibility.",
            "Builds strong family and community relationships.",
            "Encourages moral self-improvement.",
            "Creates stability through cooperation."
        ],

        blindSpots:[
            "May resist necessary social change.",
            "Can prioritize harmony over honest disagreement.",
            "May place excessive importance on social expectations.",
            "Sometimes limits individual expression."
        ]

    },

    "Naturalism":{

        strengths:[
            "Highly evidence-based thinker.",
            "Values scientific reasoning.",
            "Avoids unsupported assumptions.",
            "Makes objective decisions using observable facts."
        ],

        blindSpots:[
            "May dismiss experiences that cannot be scientifically measured.",
            "Can underestimate emotional or spiritual needs.",
            "May become overly skeptical.",
            "Sometimes overlooks symbolic or cultural meaning."
        ]

    },

    "Theism":{

        strengths:[
            "Finds purpose beyond personal circumstances.",
            "Strong moral commitment.",
            "Provides hope during hardship.",
            "Often values service and compassion."
        ],

        blindSpots:[
            "May rely too heavily on faith when evidence is important.",
            "Can become resistant to opposing beliefs.",
            "May interpret uncertainty through predetermined beliefs.",
            "Sometimes struggles with conflicting religious perspectives."
        ]

    },

    "Pantheism":{

        strengths:[
            "Feels deeply connected with nature.",
            "Values environmental responsibility.",
            "Sees unity among people and the universe.",
            "Encourages peaceful reflection."
        ],

        blindSpots:[
            "May avoid clear moral boundaries.",
            "Can become overly abstract in thinking.",
            "Sometimes struggles with practical decision-making.",
            "May place intuition above evidence."
        ]

    },

    "Agnosticism":{

        strengths:[
            "Open-minded toward different beliefs.",
            "Comfortable admitting uncertainty.",
            "Encourages intellectual humility.",
            "Evaluates claims carefully before accepting them."
        ],

        blindSpots:[
            "May hesitate when decisive action is needed.",
            "Can become permanently undecided.",
            "May avoid committing to important beliefs.",
            "Sometimes overemphasizes uncertainty."
        ]

    },

    "Pragmatism":{

        strengths:[
            "Focuses on practical solutions.",
            "Flexible when circumstances change.",
            "Values real-world results.",
            "Adapts ideas based on experience."
        ],

        blindSpots:[
            "May sacrifice principles for efficiency.",
            "Can overlook long-term consequences.",
            "Sometimes dismisses theoretical ideas too quickly.",
            "May become overly outcome-focused."
        ]

    },

    "Empiricism":{

        strengths:[
            "Strong respect for evidence.",
            "Learns from observation and experience.",
            "Questions unsupported claims.",
            "Makes careful, informed decisions."
        ],

        blindSpots:[
            "May undervalue intuition or creativity.",
            "Can dismiss ideas before evidence exists.",
            "Sometimes ignores subjective experiences.",
            "May rely too heavily on measurable facts."
        ]

    },

    "Rationalism":{

        strengths:[
            "Excellent logical reasoning.",
            "Enjoys solving complex problems.",
            "Evaluates ideas critically.",
            "Makes consistent, well-reasoned decisions."
        ],

        blindSpots:[
            "May overlook emotional factors.",
            "Can appear overly analytical.",
            "Sometimes underestimates intuition.",
            "May expect others to think as logically."
        ]

    },

    "Idealism":{

        strengths:[
            "Strong personal principles.",
            "Inspired by meaningful goals.",
            "Values ethics over convenience.",
            "Encourages positive social change."
        ],

        blindSpots:[
            "May become unrealistic.",
            "Can struggle with compromise.",
            "Sometimes expects perfection.",
            "May become disappointed by reality."
        ]

    },

    "Utilitarianism":{

        strengths:[
            "Focuses on maximizing overall well-being.",
            "Evaluates consequences carefully.",
            "Encourages efficient problem-solving.",
            "Balances competing interests objectively."
        ],

        blindSpots:[
            "May sacrifice individual rights.",
            "Can overlook fairness toward minorities.",
            "Sometimes ignores emotional consequences.",
            "May justify harmful actions for larger benefits."
        ]

    },

    "Secular Humanism":{

        strengths:[
            "Promotes ethical living through reason.",
            "Values equality and human rights.",
            "Encourages lifelong learning.",
            "Supports evidence-based decision making."
        ],

        blindSpots:[
            "May underestimate the role religion plays for others.",
            "Can become overly dependent on rational thinking.",
            "Sometimes struggles with questions beyond empirical evidence.",
            "May overlook spiritual needs."
        ]

    },

    "Deism":{

        strengths:[
            "Balances faith with reason.",
            "Encourages independent thinking.",
            "Accepts natural laws and science.",
            "Maintains a broad philosophical perspective."
        ],

        blindSpots:[
            "May feel distant from organized religion.",
            "Can leave moral questions largely unanswered.",
            "Sometimes lacks clear practical guidance.",
            "May appear detached from spiritual traditions."
        ]

    },

    "Absurdism":{

        strengths:[
            "Finds joy despite uncertainty.",
            "Accepts life's unpredictability.",
            "Encourages resilience.",
            "Values freedom from unrealistic expectations."
        ],

        blindSpots:[
            "May become overly detached from long-term goals.",
            "Can appear indifferent to deeper meaning.",
            "Sometimes embraces uncertainty too readily.",
            "May struggle with structured belief systems."
        ]

    },

    "Nihilism":{

        strengths:[
            "Questions assumptions fearlessly.",
            "Encourages independent thinking.",
            "Challenges unjustified authority.",
            "Avoids accepting beliefs without examination."
        ],

        blindSpots:[
            "May struggle to find lasting motivation.",
            "Can become overly cynical.",
            "Sometimes dismisses values too quickly.",
            "May experience difficulty building long-term purpose."
        ]

    }

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
