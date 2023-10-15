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
var quizScore = 10;
var numberOfQuestions = 5;
var question1 = document.getElementById('question1');

$(document).ready(function(){
  $(quizQuestion).hide()//Hiding all quiz questions classes//
  })

var instruction = document.querySelector('.start-quiz');

var firstChoice1 = document.getElementById('answer1.1'); // strings
var secondChoice1 = document.getElementById('answer1.2');// bouleans
var thirdChoice1 = document.getElementById('answer1.3'); // alerts
var fourthChoice1 =document.getElementById('answer1.4'); // numbers





    //question1 = (firstChoice1=false,secondChoice1 = false,thirdChoice1 = true,fourthChoice1 = false); 
 var buttonGroup = document.querySelectorAll('.button-group');
 var answerButtons =buttonGroup.children;

//buttonGroup.addEventListener('click', function(event) {
  //if (event.target.classList.contains('child')) {
  //  console.log('Clicked on child element');
 
    



 startButton.addEventListener("click", startQuiz);

function startQuiz() { //function to start the quiz
  secondsLeft = 45;
  $(instruction).hide();
  setTime()
  $(question1).show();
  
}
firstChoice1.addEventListener('click', displayMessageCorrect);

//if(userInput1 = firstChoice1 || secondChoice1 || fourthChoice1){
  //alert ("Wrong");
//} else alert ('Correct')
//userInput1()

  // var userInput1 = function() {
  //   for (var i=0; i<=answerButtons.length, i++);
  //   answerButtons [i].addEventListener('click', userInput1);
      
    
//console.log(userInput1)

//Timer
var timeEl =document.querySelector('.timer-count')
function setTime() {
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

//var state = element.getAttribute("data-state")


  //Event listener to start the quiz
   

  //resetButton.addEventListener("click", resetGame);
  //firstChoice.addEventListener('click', )

function displayMessageCorrect() {
  alert('correct')
}
var finalScore = function (){
  finalScore =''
  if (userInput1= thirdChoice1){

  }
}