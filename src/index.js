import * as aboutModal from './scripts/modal.js';
import questions from './assests/questions.js';

document.addEventListener('DOMContentLoaded', ()=> {
    const openModalButton = document.getElementById('aboutButton');
    const closeModalButton = document.getElementById('closeButton');
    const startQuizButton = document.getElementById('startButton');
    const overlay = document.getElementById('overlay');

    const questionText = document.getElementById('questionText');
    const answer1 = document.getElementById('option1');
    const answer2 = document.getElementById('option2');
    const answer3 = document.getElementById('option3');
    const answer4 = document.getElementById('option4');
    const nextButton = document.getElementById('nextQuestion');
    const submitButton = document.getElementById('submitQuiz');
    const volumeUpButton = document.getElementById('volumeUp');
    const volumeDownButton = document.getElementById('volumeDown');
    const answerButtons = document.querySelectorAll('.optionButtons button');

    let totalQuestions = Object.keys(questions).length; 
    let totalQuestionsInQuiz = 5;
    let score = 0;
    let previousQuestionNumbers = [];
    let randomQuestionNumber = Math.floor(Math.random() * totalQuestions);

    
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
        displayQuestions();
    });
 
    answerButtons.forEach(button => {
          button.addEventListener('click', selectAnswer);
    });

    function displayQuestions(){
        previousQuestionNumbers.push(randomQuestionNumber);
        questionText.innerText = questions[randomQuestionNumber].text;
        answer1.innerText = questions[randomQuestionNumber].option1;
        answer2.innerText = questions[randomQuestionNumber].option2;
        answer3.innerText = questions[randomQuestionNumber].option3;
        answer4.innerText = questions[randomQuestionNumber].option4;
    }

    function selectAnswer(e){
      const selectedAnswer = e.target;
      disableButtons(true);
      if (selectedAnswer.id === questions[randomQuestionNumber].correctAnswer){
          score += 1;
          selectedAnswer.classList.add('correct');
      } else 
      {
        selectedAnswer.classList.add('incorrect');
      }
      if(previousQuestionNumbers.length !== totalQuestionsInQuiz){
        nextButton.style.display = 'block';
      } 
      if (previousQuestionNumbers.length === totalQuestionsInQuiz) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
      }
    }

    function disableButtons(boolean){
        answerButtons.forEach(button => {
            button.disabled = boolean;
        });
    }

    nextButton.addEventListener('click', () => {
        nextButton.style.display = 'none';
        disableButtons(false);
        answerButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
        });
        while(previousQuestionNumbers.includes(randomQuestionNumber)){
            randomQuestionNumber = Math.floor(Math.random() * totalQuestions); 
        }
        displayQuestions();
    });
    
    volumeUpButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'block';
        volumeUpButton.style.display = 'none';
    });

    volumeDownButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'none';
        volumeUpButton.style.display = 'block';
    });

    function resetQuiz(){
        questionText.innerText = '';
        answerButtons.forEach(button => {
            button.innerText = '';
            button.style.display = 'none';
        });
    }

    submitButton.addEventListener('click', () => {
        previousQuestionNumbers = [];
        resetQuiz();
        questionText.innerText = `Your score is ${score} out of 5!`;
        submitButton.style.display = 'none';
    });
});