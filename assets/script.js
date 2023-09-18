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


function showQuestion() {
    var currentQuestion = questionSet[currentIndex]
    var questionEl = document.getElementById("question");
    // console.log(questionEl);
    // console.dir(questionEl)
    // console.log(currentQuestion)
    questionEl.textContent = currentQuestion.prompt;
    showChoices()
}

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

function checkAnswer(event) {
    console.log(event);
    var selectedElement = event.target;
    var selectedAnswer = selectedElement.textContent;
    console.log(selectedElement);

    var correctAnswer = questionSet[currentIndex].answer;
    console.log(correctAnswer);

    if (selectedAnswer == correctAnswer) {
        finalScore++;
        displayMessage("Correct!");
    } else {
        secondsElapsed += 10;
        displayMessage("Wrong...");
    }

    nextQuestion();
}

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

// function nextQuestion() {
//     if (currentIndex > questionSet.length) {
//         window.location.href = "score_page.html";
//     } else {
//         showQuestion();
//         currentIndex++;
//     }
// }

var scoreEl = document.querySelector(".correct");
function nextQuestion() {
    currentIndex++;
    if (currentIndex <= questionSet.length) {
        showQuestion();
    } else {
        stopTimer();
        timerEl = 0;
        window.location.href = "score_page.html";
        scoreEl.textContent = finalScore; 
    }
}

function startTimer() {
    timerCount = 60;
    var timerEl = document.querySelector(".timer-counter");
    timer = setInterval(function(){
        secondsElapsed++;
        timerEl.textContent = timerCount - secondsElapsed;
       
    },  1000);
    showQuestion();
 
}

startTimer()

function stopTimer() {
    clearInterval(interval);
}

//check if its right or wrong
//do what you must to the score
//check if you have extra questions to show or not (questionSet.length vs currentIndex)
//Multiple Choice Question Array


//1. After clicking Play on index.html, page will load to quiz html
//2. Timer will start counting down and first question will load
//3. User will click answer
//a. if wrong, time will decrease by x seconds and score will NOT increase
//b. if correct, time will continue and score will increase by 1
//4.  When the user selects an answer, the screen will display either correct or wrong
//5. Next question will load
//6.  After all 5 questions, user will see final score
//7. User can then log initials with highscore.  
//8. Highscores can be viewed 
// var enterButton = document.getElementById("enter");
// var initials = document.getElementById("box");

// function insertInitials() {

//     var inputedInitials = {
//         initials: initials.value,
//     };
//     localStorage.setItem("initials", JSON.stringify(inputedInitials));

// }

// function insertInitialsList() {
//     var lastInputedHighScore = JSON.parse(localStorage.getItem("initials"));
//     document.getElementById('saved-initials').innerHTML = lastInputedHighScore.initials;
// }


// enterButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     insertInitials();
//     insertInitialsList();
// });


// 

// 

//     