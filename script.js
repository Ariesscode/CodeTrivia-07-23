var strtbutton = document.querySelector('.start');
var questText = document.querySelector('#ruless');
var showQuestions = document.querySelector('.rules');



    var quiz = [
            { Question: "The condition in an if/else statement is enclosed with ____",
              Choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
              Answer: "paranthesis"
             
              

            },

            { Question: "String values must be enclosed within ____ when being assigned to variables.",
              Choices: ["commas", "curly brackets", "quotes", "paranthesis"],
              Answer: "quotes"

            },

            { Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
              Choices: ["javaScript", "terminal/bash", "for loops", "console.log"],
              Answer: "console.log"


            },


            { Question: "Commonly used data types Do NOT include:",
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
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        timer.style.display ="none";
        alert("TIMES UP!");
}
    
 }, 1000);
    
}

function renderQuestions() {
    showQuestion.textContent = quiz[questionIndex].Question
    correctAnswer = quiz[questionIndex].Answer
   
  showChoices.innerHTML = "";
    for (var i = 0; i < quiz[questionIndex].Choices.length; i++) {
      console.log(choiceIndex[i]);
      
       let bttn = document.createElement("button");
      bttn.textContent = quiz[questionIndex].Choices[i];
      showChoices.appendChild(bttn);
      bttn.classList.add('custom-button');
       // I want the new buttons created to show in html
     }

     
  }
  
  document.addEventListener("click", (e)=>{
e.preventDefault() 
if(e.target && e.target.matches(".custom-button")) {
  userAnswer = e.target.textContent;

  if(userAnswer === correctAnswer) {
    messageEl.innerText = "good job!";


  
  }

  else {
    messageEl.innerText = "Wrong!";
    timeLeft-=10;
  }
  questionIndex++;
  renderQuestions();
}

  })


 

 


strtbutton.addEventListener('click', ()=>{
  questText.style.display = "none";
    strtbutton.style.display = "none";
    console.log(showQuestions);
    setTime(); 

  renderQuestions();
})








        



   

    

   



  
  

    