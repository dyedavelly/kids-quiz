import * as aboutModal from './scripts/modal.js';
import questions from './assests/questions.js';

document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('aboutButton');
    const closeModalButton = document.getElementById('closeButton');
    const overlay = document.getElementById('overlay');
    const startQuizButton = document.getElementById('startButton');
    const nextButton = document.getElementById('nextQuestion');
    const submitButton = document.getElementById('submitQuiz');
    const volumeUpButton = document.getElementById('volumeUp');
    const volumeDownButton = document.getElementById('volumeDown');
    const questionText = document.getElementById('questionText');
    const answerButtons = document.querySelectorAll('.optionButtons button');
    let totalQuestions = Object.keys(questions).length;
    let totalQuestionsInQuiz = 5;
    let score = 0;
    let previousQuestionNumbers = [];
    let randomQuestionNumber;

    function initializeQuiz() {
        previousQuestionNumbers = [];
        score = 0;
        resetQuiz();
        randomQuestionNumber = getRandomQuestionNumber();
        displayQuestion(randomQuestionNumber);
        answerButtons.forEach(button => {
            button.addEventListener('click', selectAnswer);
        });
    }

    function getRandomQuestionNumber() {
        let randomNumber;   
        while (previousQuestionNumbers.includes(randomNumber)){
            randomNumber = Math.floor(Math.random() * totalQuestions);
        }
        previousQuestionNumbers.push(randomNumber);
        return randomNumber;
    }

    function displayQuestion(questionNumber) {
        const question = questions[questionNumber];
        questionText.innerText = question.text;
        answerButtons.forEach((button, index) => {
            button.innerText = question['option' + (index + 1)];
            button.style.display = 'block';
        });
    }

    function resetQuiz() {
        questionText.innerText = '';
        answerButtons.forEach(button => {
            button.innerText = '';
            button.style.display = 'none';
        });
    }

    function selectAnswer(e) {
        const selectedAnswer = e.target;
        disableButtons(true);
        if (selectedAnswer.id === questions[randomQuestionNumber].correctAnswer) {
            score += 1;
            selectedAnswer.classList.add('correct');
        } else {
            selectedAnswer.classList.add('incorrect');
        }
        if (previousQuestionNumbers.length !== totalQuestionsInQuiz) {
            nextButton.style.display = 'block';
        }
    }

    function disableButtons(boolean) {
        answerButtons.forEach(button => {
            button.disabled = boolean;
        });
    }

    openModalButton.addEventListener('click', () => {
        const modal = document.getElementById('aboutModal');
        aboutModal.openModal(modal);
    });

    closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('aboutModal');
        aboutModal.closeModal(modal);
    });

    startQuizButton.addEventListener('click', () => {
        const modal = document.getElementById('quizModal');
        aboutModal.openModal(modal);
        initializeQuiz();
    });

    nextButton.addEventListener('click', () => {
        nextButton.style.display = 'none';
        disableButtons(false);
        answerButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
        });
        if (previousQuestionNumbers.length === totalQuestionsInQuiz - 1) {
            submitButton.style.display = 'block'; // Display submit button for the last question
        }
        if (previousQuestionNumbers.length === totalQuestionsInQuiz) {
            submitButton.style.display = 'none'; // Hide submit button after last question is answered
        }
        randomQuestionNumber = getRandomQuestionNumber();
        displayQuestion(randomQuestionNumber);
    });
    
    volumeUpButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'block';
        volumeUpButton.style.display = 'none';
    });

    volumeDownButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'none';
        volumeUpButton.style.display = 'block';
    });

    submitButton.addEventListener('click', () => {
        resetQuiz();
        questionText.innerText = `Your score is ${score} out of ${totalQuestionsInQuiz}!`;
        submitButton.style.display = 'none';
    });
});
