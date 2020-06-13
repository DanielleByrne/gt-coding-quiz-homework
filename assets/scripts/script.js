
// Variables
var headingEl = document.getElementById("heading");
var pEl = document.getElementById("mainParagraph");
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
var startButtonEl = document.getElementById("startButton");
var mainEl = document.getElementById("mainElement");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var invisiblebBtnEl = document.querySelectorAll(".invisibleBtn");
var scoreEl = document.getElementById("highScoreLink");

// Timer
function countdownTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || currentQuestionIndex >= 5) {
      clearInterval(timerInterval);
      window.location.href = "assets/highScore.html";
    }
  }, 1000);
}
// Event Listeners to start the quiz
startButtonEl.addEventListener("click", function () {
  countdownTimer();
});
startButtonEl.addEventListener("click", function () {
  nextQuestion();
});

// Questions and Answers
var currentQuestionIndex = 0;
var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include",
    answer1: "1. Strings",
    answer2: "2. Booleans",
    answer3: "3. Alerts",
    answer4: "4. Numbers",
    correct: "3. Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within",
    answer1: "1. Quotes",
    answer2: "2. Curly Braces",
    answer3: "3. Parenthesis",
    answer4: "4. Square Brackets",
    correct: "3. Parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answer1: "1. Numbers and Strings",
    answer2: "2. Other Arrays",
    answer3: "3. Booleans",
    answer4: "4. All of the Above",
    correct: "4. All of the Above",
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables",
    answer1: "1. Commas",
    answer2: "2. Curly Braces",
    answer3: "3. Quotes",
    answer4: "4. Paranthesis",
    correct: "3. Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "1. Javascript",
    answer2: "2. Terminal/Bash",
    answer3: "3. For Loops",
    answer4: "4. Console.log",
    correct: "4. Console.log",
  },
];
// Function to move through array and get next question
function nextQuestion() {
  var currentQuestion = arrayOfQuestions[currentQuestionIndex];
  invisiblebBtnEl.forEach(function (button) {
    button.style.visibility = "visible";
  });
  mainEl.innerHTML = "";
  var questionEl = document.createElement("h2");
  questionEl.textContent = currentQuestion.question;
  answer1El.textContent = currentQuestion.answer1;
  answer2El.textContent = currentQuestion.answer2;
  answer3El.textContent = currentQuestion.answer3;
  answer4El.textContent = currentQuestion.answer4;

  mainEl.append(questionEl);
  mainEl.append(answer1El);
  mainEl.append(answer2El);
  mainEl.append(answer3El);
  mainEl.append(answer4El);
}
// Event listeners for each button
answer1El.addEventListener("click", function () {
  userAnswer = event.target.textContent;
  if (userAnswer === arrayOfQuestions[currentQuestionIndex].correct) {
    console.log("correct");
    currentQuestionIndex++;
    nextQuestion();
  } else {
    alert("incorrect!");
    secondsLeft = secondsLeft - 10;
    currentQuestionIndex++;
    nextQuestion();
  }
});
answer2El.addEventListener("click", function () {
  userAnswer = event.target.textContent;
  if (userAnswer === arrayOfQuestions[currentQuestionIndex].correct) {
    console.log("correct");
    currentQuestionIndex++;
    nextQuestion();
  } else {
    alert("incorrect!");
    secondsLeft = secondsLeft - 10;
    currentQuestionIndex++;
    nextQuestion();
  }
});
answer3El.addEventListener("click", function () {
  userAnswer = event.target.textContent;
  if (userAnswer === arrayOfQuestions[currentQuestionIndex].correct) {
    console.log("correct");
    currentQuestionIndex++;
    nextQuestion();
  } else {
    alert("incorrect!");
    secondsLeft = secondsLeft - 10;
    currentQuestionIndex++;
    nextQuestion();
  }
});
answer4El.addEventListener("click", function () {
  userAnswer = event.target.textContent;
  if (userAnswer === arrayOfQuestions[currentQuestionIndex].correct) {
    console.log("correct");
    currentQuestionIndex++;
    nextQuestion();
  } else {
    alert("incorrect!");
    secondsLeft = secondsLeft - 10;
    currentQuestionIndex++;
    nextQuestion();
  }
});

