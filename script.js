var strtbutton = document.querySelector('.start');
var questText = document.querySelector('#ruless');
var showQuestions = document.querySelector('.rules');



    var quiz = [
            { Question: "The condition in an if/else statement is enclosed with ____",
              Choices: [
                { text: "quotes", correct: false},
                { text: "curly brackets", correct: false},
                { text: "paranthesis", correct: true},
                { text: "square brackets", correct: false},
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

    for (var i = 0; i < quiz[questionIndex].Choices.length; i++) {
      console.log(choiceIndex[i]);
      
       var bttn = document.createElement("button");
      bttn.innerHTML = quiz[questionIndex].Choices[i];
      showChoices.appendChild(bttn);
      bttn.style.width = "250px";
      bttn.style.backgroundColor = "white";
      bttn.style.fontWeight = "bold";
      bttn.style.borderRadius = "4px";
      bttn.style.cursor = "pointer";
      bttn.style.display = "block";
      bttn.style.margin = "5px";
      bttn.style.marginTop = "10px";
      bttn.style.paddingTop = "5px";
      bttn.style.paddingBottom = "5px";
      bttn.style.position = "relative";
      bttn.style.top = "50px";
      bttn.style.right = "20px";
      
      var btn = bttn.classList;
      btn.add("myStyle")
      
    }

  }
 
strtbutton.addEventListener('click', ()=>{
quizQuestions();
renderQuestions();
})







        



   

    

   



  
  

    