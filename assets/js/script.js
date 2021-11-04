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

var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");

var time = 75;
var index = 0;
var timer;

//create array of questions

var quizQuestions = 
      [
        {
          question: "What is the first item in an HTML document?",
          choices: ["<head>", "<!DOCTYPE>", "<body>", "<html>"],
          answer: "2"
        },
        
        {
          question: "What does HTML stand for?",
          choices: ["Hyper Text Marketing Language", "Hyper Text Movement Language", "Hyper Text Model Language", "Hyper Text Markup Language"],
          answer: "4"
        },

        {
            question: "What does DOM stand for?",
            choices: ["Data Object Model", "Data Operative Manual", "Document Object Model", "Document Opening Manual"],
            answer: "3"
        },

        {
            question: "What does API stand for?",
            choices: ["Application programming interface", "Application popup interface", "Application programming index", "Application popup index"],
            answer: "1"
        },

        {
            question: "How do you call a function named 'myFunction'?",
            choices: ["{myFunction}", "(myFunction)", "myFunction()", "myFunction{}"],
            answer: "3"
        }
        
      ];
      

function getGoing(){
    //when the start button is clicked the start container is hidden and the question container is shown. Also our timer starts.
 startContainer.setAttribute('class', 'hide');
 questionsEl.removeAttribute('class');

 timer = setInterval(function(){
     //deduct 1 sec from time
     time--;
     //display the time on the page
     timeEl.textContent = time;

     //check if the time has ran out then call a function called gameOver.

     if (time <= 0 ) {
         gameOver()
     };
 }, 1000);

 //display the time on the page
 timeEl.textContent = time;

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

    

    // added event listeners for when specific choices are clicked 

    function chooseA() { checkAnswer(0); }

    function chooseB() { checkAnswer(1); }
    
    function chooseC() { checkAnswer(2); }
    
    function chooseD() { checkAnswer(3); }
    
    choiceA.addEventListener("click", chooseA);
    choiceB.addEventListener("click", chooseB);
    choiceC.addEventListener("click", chooseC);
    choiceD.addEventListener("click", chooseD);

//create your button click function.This  function should deduct time if the answer is wrong, it also needs to increase the question index to move to the next question. create a conditional that checks if there are more questions in the array if there are ask the next question or game over. 


function gameOver(){
    //stop timer
    clearInterval(timer);

    //hide question container

    //show endgame container with users final score

}

//create a fucntion that captures the final score and intitals and saves them to local storage

//onclick events / event listeners
startButton.onclick = getGoing;
