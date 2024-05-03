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
        debugger
        const modal = document.getElementById('quizModal');
        aboutModal.openModal(modal);
    });

    const nextButton = document.getElementById('nextQuestion');
    let questionNumber = -1;
    nextButton.addEventListener('click', () => {
        questionNumber += 1;
        const questionText = document.getElementById('questionText');
        questionText.innerText = questions[questionNumber].text;
    });
});
