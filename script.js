document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "באיזו שנה פרצה מלחמת יום הכיפורים?", options: ["1973", "1967", "1982"], correct: "1973" },
        { question: "אילו מדינות תקפו את ישראל במלחמה?", options: ["מצרים וסוריה", "ירדן ולבנון", "עיראק ואיראן"], correct: "מצרים וסוריה" },
        { question: "מה היה היעד המרכזי בחזית הדרום?", options: ["תעלת סואץ", "שארם א-שייח'", "הנגב"], correct: "תעלת סואץ" },
        { question: "מהי הפעולה המפורסמת בחזית הצפון?", options: ["הדיפת הסורים", "כיבוש הר חרמון", "פריצת הקווים"], correct: "כיבוש הר חרמון" }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById("quiz-question");
    const optionsElement = document.getElementById("quiz-options");
    const nextButton = document.getElementById("next-question");
    const resultElement = document.getElementById("quiz-result");

    function loadQuestion() {
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = "";
        question.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selected) {
        if (selected === questions[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionElement.style.display = "none";
        optionsElement.style.display = "none";
        nextButton.style.display = "none";
        resultElement.textContent = `השגת ${score} מתוך ${questions.length} תשובות נכונות!`;
    }

    loadQuestion();
});
