// Array of quiz questions, options, and correct answers
const questions = [
    {
        question: "מתי פרצה מלחמת יום הכיפורים?",
        options: ["1973", "1967", "1956"],
        correct: 0
    },
    {
        question: "איזה חזית הייתה בדרום?",
        options: ["סיני", "רמת הגולן", "תל אביב"],
        correct: 0
    },
    {
        question: "מה היה שם המנהיגה הישראלית בתקופת המלחמה?",
        options: ["גולדה מאיר", "דוד בן גוריון", "יצחק רבין"],
        correct: 0
    },
    {
        question: "איזו אזור שוחרר במבצע הר חרמון?",
        options: ["הר חרמון", "תל פאחר", "רמת הגולן"],
        correct: 0
    },
    {
        question: "איזו מדינה תקפה את רמת הגולן?",
        options: ["סוריה", "מצרים", "לבנון"],
        correct: 0
    },
    {
        question: "מתי הסתיימה המלחמה?",
        options: ["25 באוקטובר 1973", "30 ביוני 1973", "1 באפריל 1973"],
        correct: 0
    },
    {
        question: "כמה ימים נמשכה המלחמה?",
        options: ["19", "13", "30"],
        correct: 0
    },
    {
        question: "מה הייתה תעלת המים במרכז הקרבות בדרום?",
        options: ["תעלת סואץ", "נהר הירדן", "ים סוף"],
        correct: 0
    },
    {
        question: "מהו המבצע הצה"לי המרכזי במלחמה?",
        options: ["מבצע אבירי לב", "מבצע מוקד", "מבצע שלום הגליל"],
        correct: 0
    },
    {
        question: "איזו מלחמה קדמה למלחמת יום הכיפורים?",
        options: ["מלחמת ששת הימים", "מלחמת לבנון", "מלחמת העצמאות"],
        correct: 0
    }
];

let currentQuestionIndex = 0; // Tracks the current question
let score = 0; // Tracks the user's score

// Access DOM elements
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");
const nextButton = document.getElementById("next-question");
const quizResult = document.getElementById("quiz-result");

// Function to display the question and options
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ""; // Clear old options

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none"; // Hide "Next" button initially
}

// Function to check if the answer is correct
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    nextButton.style.display = "inline-block"; // Show "Next" button after an answer is selected
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Function to display the final score
function endQuiz() {
    questionElement.textContent = `השגת ${score} מתוך ${questions.length} תשובות נכונות!`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
}

// Load the first question when the page is ready
document.addEventListener("DOMContentLoaded", showQuestion);
