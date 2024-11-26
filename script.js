const questions = [
    {
        question: "מתי פרצה מלחמת יום הכיפורים?",
        options: ["1973", "1967", "1956"],
        correct: 0
    },
    // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) score++;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = `השגת ${score} מתוך ${questions.length} תשובות נכונות!`;
    optionsContainer.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", showQuestion);
