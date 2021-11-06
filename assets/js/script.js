//declare our variables for Dom
var timeEl = document.getElementById('time');
var startContainer = document.getElementById('start');
var startButton = document.getElementById('startBtn');
var questionsEl = document.getElementById('questions');
var questionTitleEl = document.getElementById('questionTitle');
var questionOptionsEl = document.getElementById('questionOptions');
var endGame = document.getElementById('endgame');
var finalScoreEl = document.getElementById('finalscore');
var initialsInput = document.getElementById('initials');
var initialsSubmitButton = document.getElementById("submitinitials");
var timesUp = document.getElementById("timesUp");
var highScoreSection = document.getElementById("highScoreSection");

var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");

var time = 75;
var index = 0;
var timer;
var rightAnswer = 0;


//create array of questions

var quizQuestions = 
      [
        {
          question: "What is the first item in an HTML document?",
          choices: ["<head>", "<!DOCTYPE>", "<body>", "<html>"],
          correctAnswer: "<!DOCTYPE>"
        },
        
        {
          question: "What does HTML stand for?",
          choices: ["Hyper Text Marketing Language", "Hyper Text Movement Language", "Hyper Text Model Language", "Hyper Text Markup Language"],
          correctAnswer: "Hyper Text Markup Language"
        },

        {
            question: "What does DOM stand for?",
            choices: ["Data Object Model", "Data Operative Manual", "Document Object Model", "Document Opening Manual"],
            correctAnswer: "Document Object Model"
        },

        {
            question: "What does API stand for?",
            choices: ["Application programming interface", "Application popup interface", "Application programming index", "Application popup index"],
            correctAnswer: "Application programming interface"
        },

        {
            question: "How do you call a function named 'myFunction'?",
            choices: ["{myFunction}", "(myFunction)", "myFunction()", "myFunction{}"],
            correctAnswer: "myFunction()"
        }
        
      ];
      

      function scoreTimer() {
        timer = setInterval(function(){
            if (index >= quizQuestions.length || time <= 0) {
                    //check if the time has ran out then call a function called gameOver.
                    gameOver();
                    clearInterval(timer);
            }
            else {
                //deduct 1 sec from time
                time--;
                //display the time on the page
                timeEl.textContent = time;
                return time;
            }
            return time;
        }, 1000);
    };


    function getGoing(){
        //when the start button is clicked the start container is hidden and the question container is shown. Also our timer starts.
     startContainer.setAttribute('class', 'hide');
     questionsEl.removeAttribute('class');
     scoreTimer();
     //get the questions from the array
     showQuestions()
    };


    //get the current question from your questions array 
    function showQuestions() {
        answerButtons();
    }
    
    
    // answer choices text added to the buttons 
   
    function answerButtons() {
        questionTitle.textContent = quizQuestions[index].question;
        choiceA.textContent = quizQuestions[index].choices[0];
        choiceB.textContent = quizQuestions[index].choices[1];
        choiceC.textContent = quizQuestions[index].choices[2];
        choiceD.textContent = quizQuestions[index].choices[3];
    };

    // when an answer choice is selected, determine if right or wrong

    function checkAnswer (answer) {
        
        var horizontalRule = document.getElementById("horizontalRule");
        horizontalRule.style.display = "block";
        answered.style.display = "block";
    // checks in correctAnswer in the array string is equal to the string from what the user selected on the click event
    if (quizQuestions[index].correctAnswer === quizQuestions[index].choices[answer]) {
        // because these strings are equal, add encouraging text to the <p id=answered>
        rightAnswer++;
       answered.textContent = "That's right!";
    } else {
      // because theses strings are NOT equal, deduct 7 from the total time left, and add text warning to the <p id=answered>
        time -= 7;
        timeEl.textContent = time;
        answered.textContent = "Sorry... that's incorrect."
    }
    // go through the entire index of the quizQuestions array
   index++;
   if (index < quizQuestions.length) {
       answerButtons();
   } else {
       gameOver();
   }

}


    // added event listeners for when specific choices are clicked 

    function chooseA() { checkAnswer(0); }

    function chooseB() { checkAnswer(1); }
    
    function chooseC() { checkAnswer(2); }
    
    function chooseD() { checkAnswer(3); }


function gameOver(){
    console.log("gameOver");
    //stop timer
    endGame.style.display = "block";
    timesUp.style.display = "block";
    //hide question container
    questionsEl.setAttribute('class', 'hide');
    //show endgame container with users final score
    finalScoreEl.textContent = time;
}

//create a function that captures the final score and intitals and saves them to local storage
 function highScores(event) {
     event.preventDefault();
     // force initials to be entered, no blank answers
     if (initialsInput.value === "") {
        alert("You need to enter your initials!");
         return;
     }
     highScoreSection.style.display = "block";
     endGame.style.display = "none";

     var savedScores = localStorage.getItem("high scores");
     var highScoresArray;
     
     if(savedScores === null) {
         scoresArray = [];
     } else {
         scoresArray = JSON.parase(savedScores);
     }

     var playerScore = {
         initials: initialsInput.value,
         score: finalScoreEl.textContent
     };

     var savedScoresString = JSON.stringify(highScoresArray);
     window.localStorage.setItem("high scores", savedScoresString);


 }
//onclick events / event listeners
startButton.addEventListener("click", getGoing);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);
initialsSubmitButton.addEventListener("click", function(event){ 
    highScores(event);
});