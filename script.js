var playerBttn = document.getElementById("userbttn");
var playerName = document.getElementById("player-name");

var timeLeft = document.createElement("h1");
timeLeft.innerText = 60;

//Creating function to gather player name
//Eventlistener added to trigger function

playerBttn.addEventListener("click",showName);
function showName(event) {
    event.preventDefault();
    console.log(playerName.value); //I want to see the name value of player when submitted
    playerName.value = "";         //After player submits name, it will reset the placeholder
    
    }


    //add event listener to the start button and a function
    //a function to make everything on screen clear for quiz
    
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




  
  

    