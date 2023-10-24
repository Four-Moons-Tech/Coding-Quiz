var quizQuestion = document.querySelectorAll(".quiz-question"); //var for all div classes quizQuestion//
var startButton = document.querySelector('#start');// var for start button using id//
var secondsLeft;
//var for each question and answer group
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


//JQuery function to hide all questions and a message on document load//
$(document).ready(function () {
  $(quizQuestion).hide()//Hiding all quiz questions classes//
  $(message).hide();//Hiding Correct/Wrong message
})
//event listener to start the quiz on click//
startButton.addEventListener("click", startQuiz);

function startQuiz() { //function to start the quiz
  secondsLeft = 45;
  $(instruction).hide(); //hides instructions
  setTime()
  $(question1).show();//shows first question

}
//for each anwer button there is an event listener
answer.forEach(function (button) {
  button.addEventListener('click', function (event) {
    //console.log(this);
    //console.log(event.target)
    //if answer button data type is correct
    if (this.getAttribute('data-type') == 'correct') {
      scoreCounter += 20;//add 20 points to the score
      console.log("correct", scoreCounter);
      displayCorrect() //display correct message function
    } else if (this.getAttribute('data-type') == 'wrong') {
      scoreCounter -= 10 //else decresed score by 20 points 
      secondsLeft -= 10 // and deduct 20 seconds from the timer
      displayWrong()
      //stops timer of no time is left
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert('No time left')
      }
      console.log("wrong", scoreCounter, secondsLeft)
      timeEl.setAttribute('timer-count', secondsLeft);
    }
    //hides and shows data based on where the player is during the quiz
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
//function to submit the initials
function submitInitials() {
  //player record object
  var playerRecords = {
    initial: initial.value,
    score: scoreCounter,
  }
  //using JSON.stringify to add the object to local storage
  localStorage.setItem("playerRecords", JSON.stringify(playerRecords));

  addScoreItem(playerRecords);
  $(finalScore).hide();
  $(highScores).show();
}


function addScoreItem(playerRecords) {
  //using JSON.parse to get scores from the loc al storage
  var manyScores = JSON.parse(localStorage.getItem('manyScores')) || []
  //adding player scores to the array of saved scores in the local storage
  manyScores.push(playerRecords)
  localStorage.setItem('manyScores', JSON.stringify(manyScores))
  manyScores.sort((a, b) => b.score - a.score); //sorting scores from highest to lowest
  console.log(manyScores)
  for (var i = 0; i < 5; i++) {
    console.log(manyScores[i])
    if (manyScores[i] === undefined) {//stopping the loop if there are no previously saved scores in the local storage
      return
    }
    //creating element li to hold the score and the initial
    var li = document.createElement("li");
    li.textContent = manyScores[i].score + '   ' + manyScores[i].initial
    li.setAttribute("data-index", i);
    //appending li to the scorelist
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

var startOver = function () {
  $(highScores).hide();
  $(instruction).show();
}
var clearHighScore = function () {
  $(scoreList).hide();
  localStorage.clear();
}
//event listener on click to go back to the start of the quiz
goBackBtn.addEventListener("click", startOver);
//event listener on click to clear highscores
clearBtn.addEventListener('click', clearHighScore);

var displayCorrect = function () {
  message.textContent = "Correct!"
  $(message).show()
 
  setTimeout(function () {
    $(message).hide()
  },
    1000);
}

var displayWrong = function () {
  $(message).show()
  message.textContent = "Wrong!";
  //hides message after 1 second
  setTimeout(function () {
    $(message).hide()
  },
    1000);
}



var showHighScoreLink = document.getElementById('score-list');
//shows the list of high scores
var showHighScore = function () {
  $(highScores).show();
  $(instruction).hide();
  var manyScores = JSON.parse(localStorage.getItem('manyScores')) || []
  manyScores.sort((a, b) => b.score - a.score);
  console.log(manyScores)
  for (var i = 0; i < 5; i++) {
    console.log(manyScores[i])
    if (manyScores[i] === undefined) {
      return
    }

    var li = document.createElement("li");
    li.textContent = manyScores[i].score + ' ' + manyScores[i].initial
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }
}
showHighScoreLink.addEventListener('click', showHighScore);

