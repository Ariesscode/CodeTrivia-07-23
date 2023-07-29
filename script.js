var strtbutton = document.querySelector('.start');
var questText = document.querySelector('#ruless');
var showQuestions = document.querySelector('.rules');



    var quiz = [
            { Question: "The condition in an if/else statement is enclosed with ____",
              Choices: [
                 {text: "quotes", correct: false},
                 {text: "curly brackets", correct: false},
                 {text: "paranthesis", correct: true},
                 {text: "square brackets", correct: false},
              ]
            

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

var quizQuestions = () =>{
    questText.style.display = "none";
    strtbutton.style.display = "none";
    console.log(showQuestions);
    setTime();
}


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
    showQuestion.innerHTML = quiz[questionIndex].Question
    questionIndex++;
    showChoices.innerHTML = quiz[questionIndex].Choices 
    for (var i = 0; i < Choices.length; i++) {
       {

      }
        console.log(quiz[i]); 
        var choiceBtton = document.createElement("button");
       choiceBtton.innerHTML = quiz[choiceIndex].Choices;
      
       
       
        
    }
   
 
}



       
strtbutton.addEventListener('click', ()=>{
quizQuestions();
renderQuestions();




})







        



   

    

   



  
  

    