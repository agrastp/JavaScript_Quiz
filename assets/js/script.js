//Global Variables
var timerCount;
var currentIndex = 0;
var finalScore = 0;
var secondsElapsed = 0;

//Multiple Choice Question Array
var questionSet = [
    {
        prompt: "1. What extra tags must be added to an HTML page to include JavaScript statements?",
        choices: ["<script>", "<js>", "<javascript>", "java"],
        answer: "<script>",
        wrongAnswer: ["<js>", "<javascript>", "java"]
    },
    {
        prompt: "2. The window.alert() method is used to....",
        choices: ["call the police.", "write on the html page.", "send a message to the user in a modal dialog box.",
            "console.log a message."],
        answer: "send a message to the user in a modal dialog box."

    },
    {
        prompt: "3. How many <script> elements are permitted on a page?",
        choices: ["Only 1", "Any number", "None", "Upto 3 on a page"],
        answer: "Any number"
    },
    {
        prompt: "4. Which of these is a valid comment in JavaScript?",
        choices: ["//this is a comment in JS", "/*this is a comment in JS*/", "You can use either of these in JS to comment",
            "Neither of these is a way to comment in JS."],
        answer: "You can use either of these in JS to comment"
    },
    {
        prompt: "5. A variable defined inside a function is called...",
        choices: ["a local variable.", "a global variable.", "an inverted variable.", "a inner variable."],
        answer: "a local variable."
    }
];

//Generates the Question
function showQuestion() {
    var currentQuestion = questionSet[currentIndex]
    var questionEl = document.getElementById("question");
    // console.log(questionEl);
    // console.dir(questionEl)
    // console.log(currentQuestion)
    questionEl.textContent = currentQuestion.prompt;
    showChoices()
}

//Generates the Choices for each question
function showChoices() {
    var currentChoices = questionSet[currentIndex].choices;
    console.log(currentChoices)
    var choiceElements = Array.from(document.getElementsByClassName("choice-text"));

    for (let i = 0; i < currentChoices.length; i++) {
        choiceElements[i].textContent = currentChoices[i]
        // console.log(choiceElements[i]);
        choiceElements[i].addEventListener("click", checkAnswer)
    }
}


//Checks the answer and logs correct scores to local storage
function checkAnswer(event) {
    console.log(event);
    var selectedElement = event.target;
    var selectedAnswer = selectedElement.textContent;
    console.log(selectedElement);

    var correctAnswer = questionSet[currentIndex].answer;
    console.log(correctAnswer);

    if (selectedAnswer == correctAnswer) {
        finalScore++;
        console.log(finalScore);
        localStorage.setItem("final score", JSON.stringify(finalScore));

//A message is presented if the answer is correct or wrong
        displayMessage("Correct!");
    } else {
        secondsElapsed += 10;
        displayMessage("Wrong...");
    }

    nextQuestion();
}
//Message Function
function displayMessage(m) {
    let messageHr = document.createElement("hr");
    let messageEl = document.createElement("div");
    messageEl.textContent = m;
    document.querySelector(".message").appendChild(messageHr);
    document.querySelector(".message").appendChild(messageEl);
    setTimeout(function () {
        messageHr.remove();
        messageEl.remove();
    }, 1000);

}

//Continues generating questions

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questionSet.length) {
        showQuestion();
    } else {
        stopTimer();
        timerEl = 0;
        window.location.href = "score_page.html";

    }
}
//Starts Timer
function startTimer() {
    timerCount = 60;
    var timerEl = document.querySelector(".timer-counter");
    timer = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = timerCount - secondsElapsed;

    }, 1000);
    showQuestion();

}

startTimer();

function stopTimer() {
    clearInterval(timer);
}









