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

var time = 75;
var index = 0;
var timer;

//create array of questions

var quizQuestions = 
      [
        {
          question: "What is the first item in an HTML document?",
          choices: ["<head>", "<!DOCTYPE>", "<body>", "<html>"],
          answer: 2
        },
        
        {
          question: "What does HTML stand for?",
          choices: ["Hyper Text Marketing Language", "Hyper Text Movement Language", "Hyper Text Model Language", "Hyper Text Markup Language"],
          answer: 4
        },

        {
            question: "What does DOM stand for?",
            choices: ["Data Object Model", "Data Operative Manual", "Document Object Model", "Document Opening Manual"],
            answer: 3
        },

        {
            question: "What does API stand for?",
            choices: ["Application programming interface", "Application popup interface", "Application programming index", "Application popup index"],
            answer: 1
        },

        {
            question: "How do you call a function named 'myFunction'?",
            choices: ["{myFunction}", "(myFunction)", "myFunction()", "myFunction{}"],
            answer: 3
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

function showQuestions(){
    //get the current question from tour questions array hint make use of the index variable

    //add the questions title to the title vairable

    //loop over your question choices, dynamically create buttons for each choice, add attrbutes to buttons that allow you to capture the value if it is clicked and add the choice text to them, add an onclick event to each button. Append the buttons to questionOptionsEl. 
}

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
