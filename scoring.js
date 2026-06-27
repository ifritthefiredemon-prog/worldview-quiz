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

    // Highest score earned
    const maxScore = Math.max(...Object.values(scores));

    // Convert to sorted array
    const results = Object.entries(scores)
        .map(([name, score]) => ({
            name,
            score,
            percentage: Math.round((score / maxScore) * 100)
        }))
        .sort((a, b) => b.score - a.score);

    return results;

}
