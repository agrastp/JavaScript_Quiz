
//connects JS with the HTML doc
var question = document.getElementById("question");
var choice = Array.from(document.getElementsByClassName("choice-text"));
var startBtn = document.querySelector(".btn");
var timerEl = document.querySelector("div.timer-counter");





//Multiple Choice Question Array
var questions = [
{
    question: "What extra tags must be added to an HTML page to include JavaScript statements?",
    choice1: "<script>",
    choice2: "<js>",
    choice3: "<javascript>",
    choice4: "java",
    answer: 1
},
{   question: "The window.alert() methond is used to....",
    choice1: "call the police.",
    choice2: "write on the html page.",
    choice3: "send a message to the user in a modal dialog box.",
    choice4: "console.log a message.",
    answer: 3
    
},
{
    question: "How many <script> elements are permitted on a page?",
    choice1: "Only 1",
    choice2: "Any number",
    choice3: "None",
    choice4: "Upto 3 on a page",
    answer: 2
},
{
    question: "Which of these is a valid comment in JavaScript?",
    choice1: "//this is a comment in JS",
    choice2: "/*this is a comment in JS*/",
    choice3: "You can use either of these in JS to comment",
    choice4: "Neither of these is a way to comment in JS.",
    answer: 3
},
{
    question: "A variable defined inside a function is called...",
    choice1: "a local variable.",
    choice2: "a global variable.",
    choice3: "an inverted variable.",
    choice4: "a inner variable.",
    answer: 1
}
];
var questionInQuiz = 5;
var timer;
var timerCount;
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

//Functions
    //startTimer()
    //score()
    //startQuiz()
    //gameOver()



function startTimer(seconds){
    timerCount = seconds;

    timer = setInterval(() => {
        console.log(timerCount);
        timerCount--;
        // timerEl.textContent = timerCount;
        //Note: logging to console.log, but will not connect to text in html

        //if (answerWrong)
        //counter-=10
        //then next statement will be else?
        if (timerCount < 0){
            clearInterval(timer);
            console.log('Time is up!')
            
        }
    }, 1000);
    
}
startTimer(120);
// startBtn.addEventListener("click", startTimer);
