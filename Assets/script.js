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
var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var answer = document.querySelectorAll('.btn');
var finalScore = document.querySelector('.final-score');
var highScores = document.querySelector('.score-list');
var timerInterval;
var submitButton = document.getElementById('submit');
var initial = document.querySelector('#initials'); 
var scoreDisplay = document.querySelector('.score');
var scoreCounter = 0;
var scoreList = document.getElementById('high-score-list');
var goBackBtn = document.getElementById('goBack');
var clearBtn = document.getElementById('clear');
var message = document.querySelectorAll('.message')
var instruction = document.querySelector('.start-quiz');




$(document).ready(function () {
  $(quizQuestion).hide()//Hiding all quiz questions classes//
})





startButton.addEventListener("click", startQuiz);

function startQuiz() { //function to start the quiz
  secondsLeft = 45;
  $(instruction).hide();
  setTime()
  $(question1).show();

}

answer.forEach(function (button) {
  button.addEventListener('click', function (event) {
    //console.log(this);
    //console.log(event.target)
    if (this.getAttribute('data-type') == 'correct') {
      scoreCounter += 20;
      console.log("correct", scoreCounter)
      message == "Correct!"; 
    } else if (this.getAttribute('data-type') == 'wrong') {
      scoreCounter -= 10
      secondsLeft -= 10
      message == "Wrong!"
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert('No time left')
      }
      console.log("wrong", scoreCounter, secondsLeft)
      timeEl.setAttribute('timer-count', secondsLeft);
    }

    if (this.getAttribute('data-button') == 1) {
      $(instruction).hide();
      $(question1).hide();
      $(question2).show();
    } else if (this.getAttribute('data-button') == 2) {
      $(question2).hide();
      $(question3).show();
    } else if (this.getAttribute('data-button') == 3) {
      $(question3).hide();
      $(question4).show();
    } else if (this.getAttribute('data-button') == 4) {
      $(question4).hide();
      $(question5).show();
    } else if (this.getAttribute('data-button') == 5) {
      $(question5).hide();
      $(finalScore).show();
      clearInterval(timerInterval);
      scoreDisplay.textContent = scoreCounter;
      console.log(scoreDisplay.textContent);
    }
  });
});

function submitInitials() {
  var playerRecords = {
    initial: initial.value,
    score: scoreCounter,
  }
  
  localStorage.setItem("playerRecords", JSON.stringify(playerRecords));
  
  function storeScores() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

  //renderMessage();
  // var playerRecords = JSON.parse(localStorage.getItem('playerRecords'))
  // playerRecords [initial.value]=scoreCounter

  //scoreCounter = scoreDisplay.textContent; 
  //localStorage.setItem('score', scoreCounter);
  //localStorage.setItem('initials', initial.value);
  //var playerRecords = initial.value  +  scoreCounter;
  console.log(playerRecords); 
  //localStorage.setItem('playerRecords', playerRecords); 
  addScoreItem(playerRecords);
  $(finalScore).hide();
  $(highScores).show();
}


function addScoreItem(playerRecords) {
  //for every key in my object 
    //create a list item
    //add playerRecords score
    //append to my score list
   

    for (var i = 0; i < playerRecords.length; i++) {
     
  
      var li = document.createElement("li");
      li.textContent = playerRecords;
      li.setAttribute("data-index", playerRecords);

      scoreList.appendChild(li);
    }


}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  submitInitials();
  //addScoreItem();
});

//Timer
var timeEl = document.querySelector('.timer-count')

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      alert("Oops, you ran out of time");
    }

  }, 1000);
}




var startOver = function() {
  $(highScores).hide();
  $(instruction).show();
}
var clearHighScore = function(){
  $(scoreList).hide();
  localStorage.clear();
}

goBackBtn.addEventListener("click", startOver);
clearBtn.addEventListener('click', clearHighScore);

// var showHighScoreLink =document.getElementsByTagName('a');

// var showHighScore = function(){
//   $(highScores).show();
// }
// showHighScoreLink.addEventListener('click', showHighScore); 

