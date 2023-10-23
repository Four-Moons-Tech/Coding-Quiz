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
var instruction = document.querySelector('.start-quiz');
var message = document.querySelector('#message');



$(document).ready(function () {
  $(quizQuestion).hide()//Hiding all quiz questions classes//
  $(message).hide();
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
      console.log("correct", scoreCounter);
      displayCorrect()
    } else if (this.getAttribute('data-type') == 'wrong') {
      scoreCounter -= 10
      secondsLeft -= 10
      displayWrong()
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
   
  //  console.log(playerRecords); 
  addScoreItem(playerRecords);
  $(finalScore).hide();
  $(highScores).show();
}


function addScoreItem(playerRecords) {
  //for every key in my object 
    //create a list item
    //add playerRecords score
    //append to my score list
   
   var manyScores = JSON.parse(localStorage.getItem('manyScores')) || []
    console.log(playerRecords)
    manyScores.push(playerRecords)
    localStorage.setItem('manyScores', JSON.stringify(manyScores))
    manyScores.sort((a,b) =>b.score-a.score);
    console.log(manyScores)
    for (var i = 0; i < 5; i++) {
      console.log(manyScores[i])
      if (manyScores[i] === undefined){
        return
      }
      
        
      
      var li = document.createElement("li");
      li.textContent = manyScores[i].score+' '+manyScores[i].initial 
      li.setAttribute("data-index", i);

      scoreList.appendChild(li);
    }
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  submitInitials();
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

var displayCorrect = function(){
  console.log("it works")
  message.textContent = "Correct!"
  //message = document.querySelector('#message').style.visibility = "visible";
  $(message).show()
  message.textContent = "Correct!"
  //console.log(message.textContent);
  setTimeout(function(){
    $(message).hide()
  },
   1000);
}

var displayWrong = function(){
  $(message).show()
  message.textContent = "Wrong!"; 
  console.log("Working");
  setTimeout(function(){
    $(message).hide()
  },
   1000);
}



var showHighScoreLink =document.getElementById('score-list');

var showHighScore = function(){
 $(highScores).show();
 $(instruction).hide(); 
 var manyScores = JSON.parse(localStorage.getItem('manyScores')) || []
    manyScores.sort((a,b) =>b.score-a.score);
    console.log(manyScores)
    for (var i = 0; i < 5; i++) {
      console.log(manyScores[i])
      if (manyScores[i] === undefined){
        return
      }

      var li = document.createElement("li");
      li.textContent = manyScores[i].score+' '+manyScores[i].initial 
      li.setAttribute("data-index", i);

      scoreList.appendChild(li);
    }}
 showHighScoreLink.addEventListener('click', showHighScore); 

