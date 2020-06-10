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
var pEl = document.getElementById("mainParagraph");
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
var startButtonEl = document.getElementById("startButton");
var mainEl= document.getElementById ("mainElement")
// calling variables and setting them
headingEl.textContent = "Coding Quiz Challenge";


// timer
function countdownTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("times up");
      // this will end the timer and bring us to the all done page
    }
  }, 1000);
}

startButtonEl.addEventListener("click", countdownTimer);

var currentQuestionIndex = 0;

var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include",
    answer1: "1. Strings",
    answer2: "2. Booleans",
    answer3: "3. Alerts",
    answer4: "4. Numbers",
  },
  {
    question: "The condition in an if/else statement is enclosed within",
    answer1: "1. Quotes",
    answer2: "2. Curly Braces",
    answer3: "3. Parenthesis",
    answer4: "4. Square Brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answer1: "1. Numbers ans Strings",
    answer2: "2. Other Arrays",
    answer3: "3. Booleans",
    answer4: "4. All of the Above",
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables",
    answer1: "1. Commas",
    answer2: "2. Curly Braces",
    answer3: "3. Quotes",
    answer4: "4. Paranthesis",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "1. Javascript",
    answer2: "2. Terminal/Bash",
    answer3: "3. For Loops",
    answer4: "4. Console.log",
  },
];

function nextQuestion(){
    var currentQuestion = arrayOfQuestions[currentQuestionIndex]
    mainEl.innerHTML= "";
    var questionEl = document.createElement("h2");
    questionEl.textContent = currentQuestionIndex.question;
    var answer1El = document.createElement ("button");
    answer1El.textContent= currentQuestionIndex.answer1;
    var answer2El = document.createElement ("button");
    answer2El.textContent= currentQuestionIndex.answer2;
    var answer3El = document.createElement ("button");
    answer3El.textContent= currentQuestionIndex.answer3;
    var answer4El = document.createElement ("button");
    answer4El.textContent= currentQuestionIndex.answer4;

    mainEl.append(questionEl);
    mainEl.append(answer1El);
    mainEl.append(answer2El);
    mainEl.append(answer3El);
    mainEl.append(answer4El);
}
nextQuestion();