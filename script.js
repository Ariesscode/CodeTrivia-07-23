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
              Choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
              Answer: "console.log"


            },


            { Question: "Commonly used data types Do NOT include:",
              Choices: ["strings", "booleans", "alerts", "numbers"],
              Answer:"alerts"


            }

        ];



var questionContainer = document.getElementById("ruless")
var showQuestion = document.getElementById("questions");
var timer = document.getElementById("time");
let timeLeft = 60
var questionLength = 5;
var questionIndex = 0;

var quizQuestions = () =>{
    questText.style.display = "none";
    strtbutton.style.display = "none";
    console.log(showQuestions);
    startTimer();
}


var startTimer = () => {
    var countDown = ()=>{
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;
    }
    setInterval(countDown, 1000);
    
}

       
strtbutton.addEventListener('click', ()=>{
quizQuestions();

showQuestion.innerHTML = quiz[currentQuestionIndex];
})







        



   

    

   



  
  

    