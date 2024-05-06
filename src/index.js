import * as aboutModal from './scripts/modal.js';
import questions from './assests/questions.js';

document.addEventListener('DOMContentLoaded', ()=> {
    const openModalButton = document.getElementById('aboutButton');
    const closeModalButton = document.getElementById('closeButton');
    const overlay = document.getElementById('overlay');
    
    openModalButton.addEventListener('click', () => {
        const modal = document.getElementById('aboutModal');
        aboutModal.openModal(modal);
    });
    
    closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('aboutModal');
        aboutModal.closeModal(modal);
    });

    const startQuizButton = document.getElementById('startButton');
    startQuizButton.addEventListener('click', () => {
        const modal = document.getElementById('quizModal');
        aboutModal.openModal(modal);
    });

    //gives total no.of questions from questions.js
    let totalQuestions = Object.keys(questions).length; 
    let totalQuestionsInQuiz = 5;
    let previousQuestionNumbers = [];
    let randomQuestionNumber = Math.floor(Math.random() * totalQuestions);
    previousQuestionNumbers.push(randomQuestionNumber);
    
    const questionText = document.getElementById('questionText');
    questionText.innerText = questions[randomQuestionNumber].text;
    const answer1 = document.getElementById('option1');
    const answer2 = document.getElementById('option2');
    const answer3 = document.getElementById('option3');
    const answer4 = document.getElementById('option4');
    answer1.innerText = questions[randomQuestionNumber].option1;
    answer2.innerText = questions[randomQuestionNumber].option2;
    answer3.innerText = questions[randomQuestionNumber].option3;
    answer4.innerText = questions[randomQuestionNumber].option4;
    const submitButton = document.getElementById('submitQuiz');

    const nextButton = document.getElementById('nextQuestion');
    nextButton.addEventListener('click', () => {
        while(previousQuestionNumbers.includes(randomQuestionNumber)){
            randomQuestionNumber = Math.floor(Math.random() * totalQuestions); 
        }
        previousQuestionNumbers.push(randomQuestionNumber);
        if (previousQuestionNumbers.length === totalQuestionsInQuiz) {
            previousQuestionNumbers = [];
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        }

        questionText.innerText = questions[randomQuestionNumber].text;
        answer1.innerText = questions[randomQuestionNumber].option1;
        answer2.innerText = questions[randomQuestionNumber].option2;
        answer3.innerText = questions[randomQuestionNumber].option3;
        answer4.innerText = questions[randomQuestionNumber].option4;
    });
    const volumeUpButton = document.getElementById('volumeUp');
    const volumeDownButton = document.getElementById('volumeDown');
    volumeUpButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'block';
        volumeUpButton.style.display = 'none';
    });
    volumeDownButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'none';
        volumeUpButton.style.display = 'block';
    });
});
