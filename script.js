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
    
  availableQuestions = [""]

    