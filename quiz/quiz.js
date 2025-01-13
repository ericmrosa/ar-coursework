// Define the questions and answers JSON
const questions = [
    {
        title: "QUESTION 1",
        question: "1+1",
        answers: ["4", "2", "62", "9"],
        correctAnswer: 1 // Index of the correct answer
    },
    {
        title: "QUESTION 2",
        question: "5*5",
        answers: ["20", "10", "25", "30"],
        correctAnswer: 2
    },
    {
        title: "QUESTION 3",
        question: "10-7",
        answers: ["4", "3", "7", "2"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

const titleText = document.getElementById("title_text");
const questionText = document.getElementById("question_text");
const answerButtons = [
    document.getElementById("one_button"),
    document.getElementById("two_button"),
    document.getElementById("three_button"),
    document.getElementById("four_button")
];
const answerTexts = [
    document.getElementById("one_text"),
    document.getElementById("two_text"),
    document.getElementById("three_text"),
    document.getElementById("four_text")
];

function loadQuestion(index) {
    const question = questions[index];

    titleText.textContent = question.title;
    questionText.textContent = question.question;

    question.answers.forEach((answer, i) => {
        answerTexts[i].textContent = answer;
        answerButtons[i].style.display = "block";
        answerButtons[i].style.border = "none";
    });
}

function handleAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const correctIndex = question.correctAnswer;

    answerButtons[selectedIndex].style.border = "12px solid white";

    answerButtons[correctIndex].style.border = "12px solid #04e03f";

    if (selectedIndex === correctIndex) {
        correctAnswersCount++;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showQuizPopup();
        }
    }, 2000);
}

answerButtons.forEach((button, index) => {
    button.addEventListener("click", () => handleAnswer(index));
});

loadQuestion(currentQuestionIndex);

document.addEventListener('DOMContentLoaded', function () {
    const refreshButton = document.getElementById('refresh_button');
    if (refreshButton) {
        refreshButton.addEventListener('click', function () {
            currentQuestionIndex = 0;
            loadQuestion(currentQuestionIndex); 
        });        
    }

    const homeButton = document.getElementById('home_button');
    if (homeButton) {
        homeButton.addEventListener('click', function () {
            window.location.href = '/';
        });
    }
});

function showQuizPopup() {
    const popup = document.getElementById("quiz-popup");
    const popupMessage = document.getElementById("popup-message");
    const countdownElement = document.getElementById("countdown");

    // Display the message
    popupMessage.textContent = `You got ${correctAnswersCount} out of ${questions.length} correct!`;
    popup.style.display = "flex";

    // Start countdown
    let countdown = 5;
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(interval);
            window.location.href = '/';
        }
    }, 1000);
}

