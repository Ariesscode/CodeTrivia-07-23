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


  }

];



var questionContainer = document.getElementById("ruless")
var showQuestion = document.getElementById("questions");
var timer = document.getElementById("time");
var showChoices = document.getElementById("choices");
let timeLeft = 60
var questionLength = 5;
var questionIndex = 0;
var choiceIndex = 0;
var choiceLength = 5;
var correctAnswer = "";
var userAnswer = "";
var messageEl = document.getElementById("message");




function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--; //subtract one second = countdown
    timer.textContent = "Time: " + timeLeft; //concat the Time string with time left interval
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timer.style.display = "block"; //hide on start screen 
      alert("TIMES UP!");
    }

  }, 1000);

}

function renderQuestions() {
  showQuestion.textContent = quiz[questionIndex].Question
  correctAnswer = quiz[questionIndex].Answer

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
      messageEl.innerText = "good job!";
  }

    else {
      messageEl.innerText = "Wrong!";
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























