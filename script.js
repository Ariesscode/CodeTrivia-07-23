var playerBttn = document.getElementById("userbttn");
var playerName = document.getElementById("player-name");

//Creating function to gather player name
//Eventlistener added to trigger function

playerBttn.addEventListener("click",showName)
function showName() {
    console.log(playerName.value); //I want to see the name value of player when submitted
    playerName.value = "";         //After player submits name, it will reset the placeholder
    
    }
