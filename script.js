document.addEventListener("DOMContentLoaded", function () {
    // Welcome alert
    setTimeout(() => {
        alert("ברוכים הבאים לאתר לזכר מלחמת יום הכיפורים");
    }, 1000);

    // Quiz functionality
    const answers = {
        q1: '1973',
        q2: 'מבצע באדר',
        q3: 'רמת הגולן',
        q4: '25 באוקטובר 1973',
        q5: 'מבצע אבירי לב',
        q6: 'סוריה',
        q7: 'גולדה מאיר',
        q8: 'העיניים של המדינה',
        q9: 'מצרים',
        q10: '19'
    };

    document.getElementById("submit-quiz").addEventListener("click", function () {
        let score = 0;
        for (let question in answers) {
            const userAnswer = document.querySelector(`#${question}`).value.trim();
            if (userAnswer === answers[question]) {
                score++;
            }
        }

        const totalQuestions = Object.keys(answers).length;
        const message = `השגת ${score} מתוך ${totalQuestions} תשובות נכונות!`;
        document.getElementById('quiz-result').innerText = message;

        if (score === totalQuestions) {
            alert("כל הכבוד! הצלחת לענות על כל השאלות נכון!");
        } else if (score > totalQuestions / 2) {
            alert("יפה מאוד! יש לך ידע טוב על המלחמה.");
        } else {
            alert("כדאי ללמוד קצת יותר על מלחמת יום הכיפורים!");
        }
    });
});
