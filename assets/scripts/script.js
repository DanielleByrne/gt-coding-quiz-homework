// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// variables I need 
var headingEl = document.getElementById("heading");
var timerEl = document.getElementById ("timer");
var secondsLeft = 60;

// calling variables and setting them 
headingEl.textContent = "Coding Quiz Challenge"

// timer
function countdownTimer (){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0){
            clearInterval(timerInterval);
            console.log ("times up");
            // this will end the timer and bring us to the all done page 
        }
    }, 1000);
}

countdownTimer();
