// Define the questions and answers JSON
const questions = [
    {
        title: "QUESTION 1",
        question: "What is the square root of 25?",
        answers: ["2.5", "6", "5", "7.5"],
        correctAnswer: 2
    },
    {
        title: "QUESTION 2",
        question: "In modulo 2 what is the sum of 101101 + 11001?",
        answers: ["1001110", "1100110", "1000111", "1000110"],
        correctAnswer: 3
    },
    {
        title: "QUESTION 3",
        question: "What is the sum of all three angles in an equilateral triangle?",
        answers: ["120°", "180°", "360°", "240°"],
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

    // Apply styles for specific questions
    if (index === 0) { // QUESTION 1
        for (let i = 0; i < answerTexts.length; i++) {
            answerTexts[i].style.fontSize = "150px";
        }

        document.getElementById("answer_one").style.marginTop = "27%";
        document.getElementById("answer_two").style.marginTop = "-33%";
        document.getElementById("answer_three").style.marginTop = "17%";
        document.getElementById("answer_four").style.marginTop = "-33%";
       
        document.getElementById("one_button").style.marginTop = "-62px";
        document.getElementById("two_button").style.marginTop = "-62px";
        document.getElementById("three_button").style.marginTop = "-70px";
        document.getElementById("four_button").style.marginTop = "-70px";


    } else if (index === 1) { // QUESTION 2
        for (let i = 0; i < answerTexts.length; i++) {
            answerTexts[i].style.fontSize = "100px";
        }

        document.getElementById("answer_one").style.marginTop = "26%";
        document.getElementById("answer_two").style.marginTop = "-23%";
        document.getElementById("answer_three").style.marginTop = "23%";
        document.getElementById("answer_four").style.marginTop = "-22%";
       
        document.getElementById("one_button").style.marginTop = "-99px";
        document.getElementById("two_button").style.marginTop = "-90px";
        document.getElementById("three_button").style.marginTop = "-105px";
        document.getElementById("four_button").style.marginTop = "-105px";

    } else if (index === 2) { // QUESTION 3
        for (let i = 0; i < answerTexts.length; i++) {
            answerTexts[i].style.fontSize = "150px";
        }

        document.getElementById("answer_one").style.marginTop = "23%";
        document.getElementById("answer_two").style.marginTop = "-33%";
        document.getElementById("answer_three").style.marginTop = "16%";
        document.getElementById("answer_four").style.marginTop = "-33%";

        document.getElementById("answer_one").style.marginRight = "42%";
        document.getElementById("answer_two").style.marginLeft = "49%";
        document.getElementById("answer_three").style.marginLeft = "-42%";
        document.getElementById("answer_four").style.marginRight = "-49%";
       
        document.getElementById("one_button").style.marginTop = "-73px";
        document.getElementById("two_button").style.marginTop = "-73px";
        document.getElementById("three_button").style.marginTop = "-70px";
        document.getElementById("four_button").style.marginTop = "-70px";

    } else {
        for (let i = 0; i < answerTexts.length; i++) {
            answerTexts[i].style.fontSize = "16px";
        }

        // Reset margin-top for all answer buttons
        document.getElementById("one_button").style.marginTop = "0px";
        document.getElementById("two_button").style.marginTop = "0px";
        document.getElementById("three_button").style.marginTop = "0px";
        document.getElementById("four_button").style.marginTop = "0px";
    }
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
            correctAnswersCount = 0; // Reset score
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
