//hide-show data-question
//event on click
//if statement
//timer
//list of high scores
//go back-restart the quiz
// clear high score - reset the score
//calculate the score
//display message correct or wrong
//wrong answer will penalize your score/time by 10 seconds

var quizQuestion = document.querySelectorAll(".quiz-question");
var startButton = document.querySelector('#start');// var for start button using id
var secondsLeft;

$(document).ready(function(){
    $(quizQuestion).hide()//Hiding all quiz questions classes//
})

function startQuiz() {//function to start the quiz
  secondsLeft = 45;
  setTime()
}
  

var timeEl =document.querySelector('.timer-count')

//

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      alert("Oops, you ran out of time");
    }

  }, 1000);
}

//setTime();

  
  startButton.addEventListener("click", startQuiz); 

  //resetButton.addEventListener("click", resetGame);