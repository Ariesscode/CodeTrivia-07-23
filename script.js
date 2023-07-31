var strtbutton = document.querySelector('.start');
var questText = document.querySelector('#ruless');
var showQuestions = document.querySelector('.rules');



var quiz = [
  {
    Question: "The condition in an if/else statement is enclosed with ____",
    Choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
    Answer: "paranthesis"



  },

  {
    Question: "String values must be enclosed within ____ when being assigned to variables.",
    Choices: ["commas", "curly brackets", "quotes", "paranthesis"],
    Answer: "quotes"

  },

  {
    Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    Choices: ["javaScript", "terminal/bash", "for loops", "console.log"],
    Answer: "console.log"


  },


  {
    Question: "Commonly used data types Do NOT include:",
    Choices: ["strings", "booleans", "alerts", "numbers"],
    Answer: "alerts"


  },

  {
    Question: "What is three ways to declare a variable?",
    Choices: ["let,var,const", "this,return,var", "var,let,if", "const,equal,let"],
    Answer: "let,var,const"

  },

  {
    Question: "which 3 values are falsy?",
    Choices: ["undefined,true,-1", "0,!==,false", "undefined,0,null", "null,0,no"],
    Answer: "undefined,0,null"

  },

  {
    Question: "what are the steps to push your local work to the remote branch?",
    Choices: ["git clone, git push, git fetch--hard, git push", " git add -A, git commit -m, git status,git push", "git push, git checkout main, cd bootcamp, git pull", "git add, git checkout, git push, git pull"],
    Answer: "git add -A, git commit -m, git status, git push"

  },


  {
    Question: "What is three ways to declare a variable?",
    Choices: ["let,var,const", "this,return,var", "var,let,if", "const,equal,let"],
    Answer: "let,var,const"

  }



];



var questionContainer = document.getElementById("ruless")
var showQuestion = document.getElementById("questions");
var timer = document.getElementById("time");
var showChoices = document.getElementById("choices");
var exitGame = document.getElementById("exit");
var quitGme = document.getElementById("gameScreen");
var playAgain = document.getElementById("restart");
var hScore = document.getElementById("highscore");
var playerScore = document.getElementById("score");
let timeLeft = 60
var questionLength = 8;
var questionIndex = 0;
var choiceIndex = 0;
var choiceLength = 5;
var correctAnswer = "";
var userAnswer = "";
var score = 0;
var highScore = 0;
var messageEl = document.getElementById("message");

function playerHighScores() {
  var submitHighScore = document.createElement("button");
  submitHighScore.innerText = "Add";
  hScore.appendChild(submitHighScore);
  hScore.classList.add('submitHighScore');
  
}

function topScores() {
  
  var hghScore = document.createElement("input");
  hghScore.setAttribute("type", "text");
  hghScore.placeholder = "Enter name ";
  
  hScore.appendChild(hghScore);
  hghScore.classList.add('custom-form');
  hScore.style.display = "block";
  playerHighScores();
  
  
}

function displayScore() {
  hScore.textContent = "Thank you for playing CodeTrivia! " + " You Scored: " + score + " out of 8 questions!" + " Join the High Scores list: ";
  hScore.style.fontSize = "20px";
  hScore.style.color = "greenyellow";
  hScore.style.paddingTop = "10px";
  
 topScores();
  
}


function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--; //subtract one second = countdown
    timer.textContent = "Time: " + timeLeft; //concat the Time string with time left interval
    if (timeLeft <= 0)  {
      clearInterval(timerInterval);
      timer.style.display = "none"; //hide on start screen 
      alert("TIMES UP!");
      quitGme.style.display = "none";
      
      displayScore();
      
      
      
      

      
  }
  }, 1000);



  }





function renderQuestions() {
  showQuestion.textContent = quiz[questionIndex].Question
  correctAnswer = quiz[questionIndex].Answer
  playerScore.innerHTML = "Score: " + score + " out of 8";
  
  showChoices.innerHTML = "";
  for (var i = 0; i < quiz[questionIndex].Choices.length; i++) {
     //for loop for choices to appear as long as quiz questions length
    console.log(choiceIndex[i]);

    let bttn = document.createElement("button");
    bttn.textContent = quiz[questionIndex].Choices[i];
    showChoices.appendChild(bttn);
    bttn.classList.add('custom-button');
    // I want the new buttons created to show in game screen

  }
}



document.addEventListener("click", (e) => {
  e.preventDefault()
  
  if (e.target && e.target.matches(".custom-button")) { // this will match any event target to corresponding element 
    userAnswer = e.target.textContent; //the inner text of the buttons created should match the inner text of answer in array created
     
    

    if (userAnswer === correctAnswer) { //message will appear to user if selected wrong or correct answer
      score++;
      messageEl.innerText = "Correct! Good job";
      messageEl.style.color = "white";
      messageEl.style.paddingLeft = "20px";
      messageEl.style.backgroundColor = "green"; //added style to each message prompt to show different color
      messageEl.style.height = "30px";
      messageEl.style.width = "500px";
      messageEl.style.paddingTop = "2px";
      messageEl.style.fontWeight = "bolder";
      
      
  }

    else {
      messageEl.innerText = "Wrong, Try Again!";

      messageEl.style.color = "white";
      messageEl.style.paddingLeft = "20px";
      messageEl.style.backgroundColor = "red";
      messageEl.style.height = "30px";
      messageEl.style.width = "500px";
      messageEl.style.paddingTop = "2px";
      messageEl.style.fontWeight = "bold";
      timeLeft -= 10;//time is subtracted by 10 seconds if selected wrong answer
    }

    questionIndex++;
    renderQuestions(); //if all conditions are true, questions will render and go up one question or to the next question
    
  }

})








strtbutton.addEventListener('click', () => {
  questText.style.display = "none"; //hide rules and start button once start button is clicked
  strtbutton.style.display = "none";
  timer.style.display = "block"
  console.log(showQuestions);
  setTime(); //timer will start counting down from 60
  renderQuestions(); //questions and choices appear on screen 
  
})



exitGame.addEventListener('click', () => {
  
quitGme.style.display = "none";
timer.style.display = "none";
playAgain.style.display = "none";
questText.style.display = "block"; 
strtbutton.style.display = "block";
score = 0;
return renderQuestions(); //not sure how to reset to play again


})



















