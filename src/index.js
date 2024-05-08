import * as Modal from './scripts/modal.js';
import questions from './assests/questions.js';

document.addEventListener('DOMContentLoaded', ()=> {
    const openAboutModalButton = document.getElementById('aboutButton');
    const closeAboutModalButton = document.getElementById('closeButton');
    const startQuizButton = document.getElementById('startButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playAgainButton = document.getElementById('playAgain');
    const quizModal = document.getElementById('quizModal');
    const aboutModal = document.getElementById('aboutModal');
    const scoreImage = document.getElementById('scoreImg');

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
    let score;
    let previousQuestionNumbers;
    let randomQuestionNumber;

    openAboutModalButton.addEventListener('click', () => {
        Modal.openModal(aboutModal);
    });
    
    closeAboutModalButton.addEventListener('click', () => {
        Modal.closeModal(aboutModal);
    });

    startQuizButton.addEventListener('click', () => {
        startQuiz();
        backgroundMusic.play();
    });
 
    answerButtons.forEach(button => {
          button.addEventListener('click', selectAnswer);
    });

    function displayQuestions(){
        randomQuestionNumber = Math.floor(Math.random() * totalQuestions);
        while(previousQuestionNumbers.includes(randomQuestionNumber)){
            randomQuestionNumber = Math.floor(Math.random() * totalQuestions); 
        }
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
        let correctAnswerId = questions[randomQuestionNumber].correctAnswer;
        let correctAnswerButton = document.getElementById(correctAnswerId);
        correctAnswerButton.classList.add('correct');
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
        displayQuestions();
    });
    
    volumeUpButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'block';
        volumeUpButton.style.display = 'none';
        backgroundMusic.pause();
    });

    volumeDownButton.addEventListener('click', () => {
        volumeDownButton.style.display = 'none';
        volumeUpButton.style.display = 'block';
        backgroundMusic.play();
    });

    function resetScreen(){
        questionText.innerText = '';
        answerButtons.forEach(button => {
            button.innerText = '';
            button.style.display = 'none';
        });
    }

    function startQuiz() {
        previousQuestionNumbers = [];
        score = 0;
        Modal.openModal(quizModal);
        answerButtons.forEach(button => {
            button.style.display = 'block';
            button.classList.remove('correct', 'incorrect');
        });
        displayQuestions();
        disableButtons(false);
        playAgainButton.style.display = 'none';
        scoreImage.style.display = 'none';
    }

    function displayScoreImage(){
        if(score === 0 || score === 1){
            scoreImage.src = "./src/assests/low_score.png";
        } else if(score === 2 || score === 3) {
            scoreImage.src = "./src/assests/mid_score.png";
        } else if(score === 4 || score === 5){
            scoreImage.src = "./src/assests/full_score.png";
        }
        scoreImage.style.display = 'block';
        scoreImage.classList.add('movingImage');
    }

    submitButton.addEventListener('click', () => {
        resetScreen();
        questionText.innerText = `Your score is ${score} out of 5!`;
        submitButton.style.display = 'none';
        playAgainButton.style.display = 'block';
        displayScoreImage();
    });

    playAgainButton.addEventListener('click', () => {
       startQuiz();
    });

});