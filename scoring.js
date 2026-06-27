// ======================================
// THE WORLDVIEW COMPASS
// Scoring System
// ======================================

function calculateScores(questions, answers) {

    const scores = {};

    // Initialize every philosophy
    questions.forEach(question => {
        question.measures.forEach(philosophy => {
            if (!scores[philosophy]) {
                scores[philosophy] = 0;
            }
        });
    });

    // Calculate scores
    questions.forEach((question, index) => {

        let answer = answers[index];

        if (answer == null) return;

        // Reverse scoring
        if (question.reverse) {
            answer = 8 - answer;
        }

        // Add points to each philosophy measured
        question.measures.forEach(philosophy => {
            scores[philosophy] += answer;
        });

    });

    // Convert object to sorted array
    const results = Object.entries(scores)
        .map(([name, score]) => ({
            name,
            score
        }))
        .sort((a, b) => b.score - a.score);

    return results;

}
