const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
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



