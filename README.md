# Kids Quiz App
Welcome to the Kids Quiz App! This interactive quiz app is designed to make learning fun for children of all ages. With colorful screens, engaging questions, and lively music, it provides an enjoyable educational experience.

# Project Link
Here is the link to the live project: https://dyedavelly.github.io/kids-quiz/

# Features
- Start Button: Click on the "Start" button to begin the quiz.
- Volume Control: Use the volume button to turn ON/OFF the music volume.
- Questions with Options: Once you click on "Start," the app will display questions along with four options to choose from.
- Play again: Click on "Play Again!" button to play the quiz again.

# Instructions
1. Installation: This app runs in any modern web browser. Simply open the app's URL in your browser to start playing.
2. Starting the Quiz: Click on the "Start" button to initiate the quiz.
3. Answering Questions: Once the quiz starts, questions will be displayed along with four options. Choose the correct answer by clicking on the corresponding option.
4. Volume Control: Use the volume button to turn the music OFF/ON according to your preference.
5. End of Quiz: After answering all the questions, the app will provide feedback on your performance and display your final score.

# Wireframes
![homepage](https://github.com/dyedavelly/kids-quiz/assets/10120105/81f61a69-291f-468d-a848-df07d45fc6b1)
![quizpage](https://github.com/dyedavelly/kids-quiz/assets/10120105/a03ffeff-5c34-4952-81d6-f3dec2ab0e65)

# Code for displaying correct/incorrect answer
I've implemented a click event for each of the option buttons. Once a user selects an option, I disable all the buttons to prevent them from changing their selection. If the chosen answer is incorrect, the selected option turns red while the correct answer turns green. If the chosen answer is correct, it remains green. 'Next' button will be displayed after the user selects an option.
<pre><code>
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
</code></pre>

# Future Features
I plan to introduce a feature allowing kids to specify their age, which will then customize the questions displayed to match the child's developmental stage.

