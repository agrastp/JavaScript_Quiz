//Connects HTML with JS
var enterButton = document.querySelector("#enter");
var initials = document.querySelector("#box");
var correct =document.querySelector("#correct");
var score=document.querySelector("#score");

//Adding Inital Functions
function insertInitials() {

    var inputedInitials = {
        initials: initials.value.trim(),
    };
    localStorage.setItem("initials", JSON.stringify(inputedInitials));

}

function insertInitialsList() {
    var lastInputedHighScore = JSON.parse(localStorage.getItem("initials"));
    document.getElementById('saved-initials').innerHTML = lastInputedHighScore.initials;
}

//Enter Button
enterButton.addEventListener('click',function(event) {
    event.preventDefault();
    insertInitials();
    insertInitialsList();
    
});

//Score Function
function insertFinalScore() {
  
    var lastInputedFinalScore = JSON.parse(localStorage.getItem("final score"));
    console.log(lastInputedFinalScore);
    correct.innerHTML = lastInputedFinalScore;
    score.innerHTML = lastInputedFinalScore;

}

insertFinalScore();