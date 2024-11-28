// Quiz data: Questions, options, and correct answers
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
        question: "מהו המבצע הצה\"לי המרכזי במלחמה?",
        options: ["מבצע אבירי לב", "מבצע מוקד", "מבצע שלום הגליל"],
        correct: 0
    },
    {
        question: "איזו מלחמה קדמה למלחמת יום הכיפורים?",
        options: ["מלחמת ששת הימים", "מלחמת לבנון", "מלחמת העצמאות"],
        correct: 0
    }
];

let currentQuestionIndex = 0; // Tracks current question
let score = 0; // Tracks score

// DOM Elements
const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");
const nextButton = document.getElementById("next-question");
const resultElement = document.getElementById("quiz-result");

// Function to display the current question
function showQuestion() {
    // Clear previous options
    optionsContainer.innerHTML = "";

    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Add options as buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "quiz-option";
        button.onclick = () => checkAnswer(index); // Add click handler
        optionsContainer.appendChild(button);
    });

    // Hide the next button until an answer is selected
    nextButton.style.display = "none";
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++; // Increment score if correct
    }

    // Show the next button
    nextButton.style.display = "inline-block";
}

// Function to handle the next question
function nextQuestion() {
    currentQuestionIndex++; // Move to next question

    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Display next question
    } else {
        endQuiz(); // End the quiz if no more questions
    }
}

// Function to display the quiz result
function endQuiz() {
    questionElement.textContent = `השגת ${score} מתוך ${questions.length} תשובות נכונות!`;
    optionsContainer.innerHTML = ""; // Clear options
    nextButton.style.display = "none"; // Hide next button
}

// Initialize the quiz on page load
document.addEventListener("DOMContentLoaded", showQuestion);
