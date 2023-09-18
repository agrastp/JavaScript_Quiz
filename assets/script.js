var timerCount;
var currentIndex = 0;
var finalScore = 0;

//connects JS with the HTML doc

function showQuestion(){
    //we need to pick from the array (not just first)
    var currentQuestion = questionSet[currentIndex]
    var questionEl = document.getElementById("question");
    console.log(questionEl);
    console.dir(questionEl)
    console.log(currentQuestion)
    questionEl.textContent = currentQuestion.prompt;
    showChoices()
}

function showChoices(){
    var currentChoices = questionSet[currentIndex].choices;
    console.log(currentChoices)
    var choiceElements = Array.from(document.getElementsByClassName("choice-text"));
   
    for(let i=0; i< currentChoices.length; i++){
        choiceElements[i].textContent = currentChoices[i]
        // console.log(choiceElements[i]);
        choiceElements[i].addEventListener("click", checkAnswer)
    }
}

function checkAnswer(event){
    console.log(event);
    var selectedElement = event.target;
    
    console.log(selectedElement);
   

    var correctAnswer = questionSet[currentIndex].answer;
    console.log(correctAnswer);
    if (selectedElement === correctAnswer);
    finalScore++;
    console.log(finalScore);

    //check if its right or wrong
//do what you must to the score
//check if you have extra questions to show or not (questionSet.length vs currentIndex)
    // currentIndex++
    if (currentIndex>=5){
    window.location.href = "score_page.html";
    } else {
    showQuestion();
    currentIndex++
    }
}








//Multiple Choice Question Array
var questionSet = [
{
    prompt: "1. What extra tags must be added to an HTML page to include JavaScript statements?",
    choices: ["<script>", "<js>", "<javascript>", "java"],
    answer: "<script>",
    wrongAnswer: ["<js>", "<javascript>", "java"]
},
{   prompt: "2. The window.alert() method is used to....",
    choices: ["call the police.", "write on the html page.","send a message to the user in a modal dialog box.",
              "console.log a message."],
    answer: "send a message to the user in a modal dialog box."
    
},
{
    prompt: "3. How many <script> elements are permitted on a page?",
    choices: ["Only 1","Any number","None","Upto 3 on a page"],
    answer: "Any number"
},
{
    prompt: "4. Which of these is a valid comment in JavaScript?",
    choices: ["//this is a comment in JS","/*this is a comment in JS*/","You can use either of these in JS to comment",
    "Neither of these is a way to comment in JS."],
    answer: "You can use either of these in JS to comment"
},
{
    prompt: "5. A variable defined inside a function is called...",
    choices: ["a local variable.","a global variable.", "an inverted variable.","a inner variable."],
    answer: "a local variable."
}
];

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

//Functions?
    //startTimer()
    //score()
    //startQuiz()
    //gameOver()



function logScore(){
    localStorage.getItem("initials");
    var initials = document.querySelector("#box");


}

function startTimer(){
    timerCount = 60;
    var timerEl = document.querySelector(".timer-counter");
    timer = setInterval(() => {
        timerCount--;
        timerEl.textContent = timerCount;
        //Note: logging to console.log, but will not connect to text in html

        //if (answerWrong){
        //counter-=10;
        //}
        //then next statement will be else?
        if (timerCount <= 0){
            clearInterval(timer);
            console.log('Time is up!');
            //call function to go to score page when time runs out
   
           
        }
    }, 1000);

   
    showQuestion();
}

startTimer()
