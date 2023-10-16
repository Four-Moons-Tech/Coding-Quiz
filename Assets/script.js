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
var scoreCounter = 20;
var numberOfQuestions = 5;
var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var answer = document.querySelectorAll('.btn');
//var finalScore = document.querySelector('.score'); 
var finalScore=document.querySelector('.final-score');
var timerInterval;



$(document).ready(function(){
  $(quizQuestion).hide()//Hiding all quiz questions classes//
  })

var instruction = document.querySelector('.start-quiz');

//var firstChoice1 = document.getElementById('answer1.1'); // strings
//var secondChoice1 = document.getElementById('answer1.2');// bouleans
//var thirdChoice1 = document.getElementById('answer1.3'); // alerts
//var fourthChoice1 =document.getElementById('answer1.4'); // numbers

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
//answer.addEventListener('click', )
  
//finalScore = ''
// function calcScore(){
//   if (answertype==='correct'){
//     finalScore=+20; 
//   } else finalScore=-20; 


//var buttons = document.querySelectorAll('.btn');
//firstChoice1.addEventListener('click', function(buttons));
answer.forEach(function(button){
  button.addEventListener('click', function(event){
    console.log(this);
    console.log(event.target)

    if(this.getAttribute('data-button')==1){
      $(instruction).hide();
      $(question1).hide();
      $(question2).show();
    } else if (this.getAttribute('data-button')==2){
      $(question2).hide();
      $(question3).show();
    } else if (this.getAttribute('data-button')==3){
      $(question3).hide();
      $(question4).show();
    } else if (this.getAttribute('data-button')==4){
      $(question4).hide();
      $(question5).show();
    } else if (this.getAttribute('data-button')==5){
      $(question5).hide(); 
      $(finalScore).show();
      clearInterval(timerInterval);
    }

    

   });
  });
   //buttons = (firstChoice1,secondChoice1,thirdChoice1,fourthChoice1);
   //$(question1).hide();
   //$(question2).show();
   //if(buttons = firstChoice1 || secondChoice1 || fourthChoice1){
   //alert ("Wrong answer")

//} //else alert ('Correct')


//secondChoice1.addEventListener('click', displayMessageWrong);
//thirdChoice1.addEventListener('click', displayMessageCorrect);
//fourthChoice1.addEventListener('click', displayMessageWrong);


//userInput1()

  //var userInput1 = function() {
  //   for (var i=0; i<=answerButtons.length, i++);
  //  answerButtons [i].addEventListener('click', userInput1);
  // }   


//Timer
var timeEl =document.querySelector('.timer-count')

function setTime() {
  timerInterval = setInterval(function() {
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


//answerButtons.addEventListener('click', userInput1)



 
   

  //resetButton.addEventListener("click", resetGame);
  //firstChoice.addEventListener('click', )
var message = document.querySelectorAll('.message')
//var state = message.getAttribute("data-state")

//function displayMessageCorrect() {
   //message = "Correct";
   //state.setAttribute('data-state', 'visible'); 
  //alert('Correct')
//}

//function displayMessageWrong() {
 //alert('Wrong')
//}
//calculate final score

//function calculateFinalScore(){
//   var finalScore = ''
//   var answertype = element.getAttribute("data-type");
//   if (answertype==='correct'){
//   finalScore= ++20;
// } else {
//   finalScore = --20;
// }
// })
