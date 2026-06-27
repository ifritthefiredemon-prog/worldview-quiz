// ======================================
// THE WORLDVIEW COMPASS
// Scoring System v1.0
// ======================================

function calculateScores(questions, answers) {

    const scores = {};

    // Initialize philosophies
    questions.forEach(question => {
        question.measures.forEach(philosophy => {
            if (!scores[philosophy]) {
                scores[philosophy] = 0;
            }
        });
    });

    // Calculate raw scores
    questions.forEach((question, index) => {

        let answer = answers[index];

        if (answer == null) return;

        // Reverse score if needed
        if (question.reverse) {
            answer = 8 - answer;
        }

        question.measures.forEach(philosophy => {
            scores[philosophy] += answer;
        });

    });

    // Count how many questions each philosophy appears in
const counts = {};

questions.forEach(question => {
    question.measures.forEach(philosophy => {
        counts[philosophy] = (counts[philosophy] || 0) + 1;
    });
});

// Convert to percentages based on the maximum possible score
const results = Object.entries(scores)
    .map(([name, score]) => ({
        name,
        score,
        percentage: Math.round(
            (score / (counts[name] * 7)) * 100
        )
    }))
    .sort((a, b) => b.percentage - a.percentage);

return results;

}
