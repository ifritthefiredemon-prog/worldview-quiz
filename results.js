// ======================================
// THE WORLDVIEW COMPASS
// Results Page v3
// ======================================

// =======================================================
// PHILOSOPHY DATABASE
// =======================================================

const philosophyData = {

    "Humanism":{

        description:
            "You value human dignity, compassion, reason, and helping people flourish together.",

        meaning:
            "You generally believe people can improve themselves and society through reason, empathy, and cooperation. You value human dignity, ethical responsibility, and the belief that people can solve problems together.",

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

        description:
            "You believe meaning is created through personal choice and responsibility.",

        meaning:
            "You believe life gains meaning through the choices you make. Rather than expecting purpose to be given, you accept responsibility for creating your own direction.",

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

        description:
            "You believe wisdom comes from mastering yourself rather than controlling the world.",

        meaning:
            "You focus on maintaining self-control, emotional resilience, and inner peace. You devote your energy to what you can control while accepting what you cannot.",

        strengths:[
            "Remains calm under pressure.",
            "Emotionally resilient during adversity.",
            "Makes rational rather than impulsive decisions.",
            "Focuses on what can actually be controlled."
        ],

        blindSpots:[
            "May suppress emotions instead of expressing them.",
            "Can appear emotionally distant.",
            "May tolerate unhealthy situations for too long.",
            "Sometimes values acceptance more than necessary change."
        ]

    },

    "Confucianism":{

        description:
            "You value harmony, respect, family, and moral responsibility.",

        meaning:
            "You place great importance on moral character, respect, family, and social harmony. You believe stable communities begin with responsible individuals.",

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

        description:
            "You trust scientific explanations and the natural world.",

        meaning:
            "You understand reality primarily through nature and scientific inquiry. Evidence and observation guide how you interpret the world.",

        strengths:[
            "Highly evidence-based thinker.",
            "Values scientific reasoning.",
            "Avoids unsupported assumptions.",
            "Makes objective decisions."
        ],

        blindSpots:[
            "May dismiss experiences that cannot be scientifically measured.",
            "Can underestimate emotional or spiritual needs.",
            "May become overly skeptical.",
            "Sometimes overlooks symbolic meaning."
        ]

    },

    "Theism":{

        description:
            "You believe a divine reality plays an important role in existence.",

        meaning:
            "You believe a higher power provides purpose, morality, and guidance beyond human understanding.",

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

        description:
            "You see the universe and the divine as deeply interconnected.",

        meaning:
            "You believe spirituality is found within nature itself and that everything shares a profound connection.",

        strengths:[
            "Feels deeply connected with nature.",
            "Values environmental responsibility.",
            "Sees unity among people and the universe.",
            "Encourages peaceful reflection."
        ],

        blindSpots:[
            "May avoid clear moral boundaries.",
            "Can become overly abstract in thinking.",
            "Sometimes struggles with practical decisions.",
            "May place intuition above evidence."
        ]

    },

    "Agnosticism":{

        description:
            "You remain open-minded about questions that cannot be answered with certainty.",

        meaning:
            "Rather than claiming certainty, you recognize the limits of human knowledge and remain open to new evidence and perspectives.",

        strengths:[
            "Open-minded toward different beliefs.",
            "Comfortable admitting uncertainty.",
            "Encourages intellectual humility.",
            "Evaluates claims carefully."
        ],

        blindSpots:[
            "May hesitate when decisive action is needed.",
            "Can become permanently undecided.",
            "May avoid committing to important beliefs.",
            "Sometimes overemphasizes uncertainty."
        ]

    },
        "Pragmatism":{

        description:
            "You judge ideas by how well they work in practice.",

        meaning:
            "You evaluate ideas based on their practical results. If something consistently works in real life, you see value in it regardless of abstract theory.",

        strengths:[
            "Focuses on practical solutions.",
            "Flexible when circumstances change.",
            "Values real-world results.",
            "Learns from experience."
        ],

        blindSpots:[
            "May sacrifice principles for efficiency.",
            "Can overlook long-term consequences.",
            "Sometimes dismisses theoretical ideas too quickly.",
            "May become overly outcome-focused."
        ]

    },

    "Empiricism":{

        description:
            "You trust observation, evidence, and experience.",

        meaning:
            "You believe reliable knowledge comes from observation, experimentation, and evidence rather than assumptions.",

        strengths:[
            "Strong respect for evidence.",
            "Learns from observation and experience.",
            "Questions unsupported claims.",
            "Makes informed decisions."
        ],

        blindSpots:[
            "May undervalue intuition or creativity.",
            "Can dismiss ideas before evidence exists.",
            "Sometimes ignores subjective experiences.",
            "May rely too heavily on measurable facts."
        ]

    },

    "Rationalism":{

        description:
            "You value logic and reason above all else.",

        meaning:
            "You naturally rely on logic, critical thinking, and careful reasoning when making decisions. You enjoy examining ideas from multiple perspectives before reaching conclusions.",

        strengths:[
            "Excellent logical reasoning.",
            "Enjoys solving complex problems.",
            "Evaluates ideas critically.",
            "Makes consistent and rational decisions."
        ],

        blindSpots:[
            "May overlook emotional factors.",
            "Can appear overly analytical.",
            "Sometimes underestimates intuition.",
            "May expect others to think as logically."
        ]

    },

    "Realism":{

    description:
        "You believe reality exists independently of our thoughts, perceptions, or beliefs.",

    meaning:
        "You generally believe that the world exists objectively whether people observe it or not. Truth is discovered rather than created, and reality remains the same regardless of individual opinions.",

    strengths:[
        "Values objective truth and factual accuracy.",
        "Makes decisions based on evidence rather than personal preference.",
        "Remains grounded in practical reality.",
        "Recognizes the difference between beliefs and facts."
    ],

    blindSpots:[
        "May underestimate how perspective influences understanding.",
        "Can overlook emotional or subjective experiences.",
        "May appear overly rigid in debates.",
        "Sometimes prioritizes facts over empathy."
    ]

},

    "Idealism":{

        description:
            "You believe ideas and consciousness are central to reality.",

        meaning:
            "You place great importance on values, principles, and ideals, often believing that ideas shape reality more than material conditions.",

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

        description:
            "You believe the best actions produce the greatest good for the greatest number.",

        meaning:
            "You evaluate decisions by their consequences and strive to maximize overall well-being for as many people as possible.",

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

        description:
            "You believe people can live meaningful and ethical lives without religion.",

        meaning:
            "You believe ethics, purpose, and fulfillment can be achieved through human reason, compassion, and responsibility without requiring religious belief.",

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

        description:
            "You believe a creator exists but rarely intervenes.",

        meaning:
            "You believe a creator established the universe and its natural laws but generally allows it to operate without ongoing intervention.",

        strengths:[
            "Balances faith with reason.",
            "Encourages independent thinking.",
            "Accepts science alongside belief.",
            "Maintains a broad philosophical perspective."
        ],

        blindSpots:[
            "May feel distant from organized religion.",
            "Can leave moral questions largely unanswered.",
            "Sometimes lacks practical spiritual guidance.",
            "May appear detached from religious traditions."
        ]

    },

    "Absurdism":{

        description:
            "You embrace life even without absolute meaning.",

        meaning:
            "You recognize that life may not provide objective meaning, yet you believe people can still live joyfully and fully despite uncertainty.",

        strengths:[
            "Finds joy despite uncertainty.",
            "Accepts life's unpredictability.",
            "Encourages resilience.",
            "Values freedom from unrealistic expectations."
        ],

        blindSpots:[
            "May become detached from long-term goals.",
            "Can appear indifferent to deeper meaning.",
            "Sometimes embraces uncertainty too readily.",
            "May struggle with structured belief systems."
        ]

    },

    "Nihilism":{

        description:
            "You question whether objective meaning truly exists.",

        meaning:
            "You challenge assumptions about purpose, morality, and meaning, encouraging deep examination of beliefs that others often accept without question.",

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
// =======================================================
// LOAD RESULTS
// =======================================================

window.onload = function () {

    // ----------------------------------
    // Load saved results
    // ----------------------------------

    const results = JSON.parse(
        localStorage.getItem("worldviewScores")
    );

    if (!results || results.length === 0) {

        document.body.innerHTML = `
            <div style="
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                font-family:Arial;
                color:white;
                background:#0b1220;
                text-align:center;
            ">
                <div>
                    <h1>No Results Found</h1>
                    <p>Please complete the assessment first.</p>
                    <br>
                    <button onclick="location.href='index.html'">
                        Return Home
                    </button>
                </div>
            </div>
        `;

        return;

    }

    // ----------------------------------
    // Primary Philosophy
    // ----------------------------------

    const primary = philosophyData[results[0].name];

    document.getElementById("primaryName").textContent =
        results[0].name;

    document.getElementById("primaryDescription").textContent =
        primary.description;

    document.getElementById("meaningText").textContent =
        primary.meaning;

    // ----------------------------------
    // Strengths
    // ----------------------------------

    const strengthList =
        document.getElementById("strengthList");

    strengthList.innerHTML = "";

    primary.strengths.forEach(item => {

        strengthList.innerHTML += `
            <li>${item}</li>
        `;

    });

    // ----------------------------------
    // Blind Spots
    // ----------------------------------

    const blindSpotList =
        document.getElementById("blindSpotList");

    blindSpotList.innerHTML = "";

    primary.blindSpots.forEach(item => {

        blindSpotList.innerHTML += `
            <li>${item}</li>
        `;

    });

    // ----------------------------------
    // Continue below...
    // ----------------------------------
        // ===================================================
    // TOP THREE PHILOSOPHIES
    // ===================================================

    const topThree = document.getElementById("topThree");

    topThree.innerHTML = "";

    results.slice(0,3).forEach((item,index)=>{

        topThree.innerHTML += `

            <div class="result-card">

                <div class="rank-badge">
                    #${index+1}
                </div>

                <h3>${item.name}</h3>

                <h4>${item.percentage}% Match</h4>

                <p>
                    ${
                        philosophyData[item.name].description
                    }
                </p>

            </div>

        `;

    });



    // ===================================================
    // SCORE BARS
    // ===================================================

    const scoreList =
        document.getElementById("scoreList");

    scoreList.innerHTML = "";

    results.forEach(item=>{

        scoreList.innerHTML += `

            <div class="score-item">

                <div class="score-header">

                    <span>${item.name}</span>

                    <span>${item.percentage}%</span>

                </div>

                <div class="score-bar">

                    <div
                        class="score-fill"
                        style="width:${item.percentage}%">
                    </div>

                </div>

            </div>

        `;

    });



    // ===================================================
    // RADAR CHART
    // ===================================================

    const ctx =
        document
            .getElementById("radarChart")
            .getContext("2d");

    new Chart(ctx,{

        type:"radar",

        data:{

            labels:
                results
                    .slice(0,8)
                    .map(item=>item.name),

            datasets:[{

                label:"Worldview",

                data:
                    results
                        .slice(0,8)
                        .map(item=>item.percentage),

                fill:true,

                backgroundColor:
                    "rgba(22,196,255,.25)",

                borderColor:
                    "#16c4ff",

                borderWidth:3,

                pointBackgroundColor:
                    "#16c4ff",

                pointRadius:4

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                r:{

                    min:0,

                    max:100,

                    ticks:{
                        display:false
                    },

                    angleLines:{
                        color:"rgba(255,255,255,.15)"
                    },

                    grid:{
                        color:"rgba(255,255,255,.15)"
                    },

                    pointLabels:{
                        color:"#ffffff",
                        font:{
                            size:12,
                            weight:"bold"
                        }
                    }

                }

            }

        }

    });

};
