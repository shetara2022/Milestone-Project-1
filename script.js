//const getQuestion = document.getElementById("question");        //reference my questions and answer choices
//console.log(getQuestion);
const answerButtons = document.querySelectorAll(".answer");
//console.log(answerButtons);
const nextButton = document.getElementById('next-btn');
const totalQuestions = 5; //how many questions to answer


let  currentQuestion = [];      //select current question
let availableQuestion = [];    //points to how many questions left 
let questionCounter = 0;       //count the question you are on
let score = 0;                //how many question answered correctly


const questions = [                 //QUESTION BANK
  {
    question: 'What is Methodology the study of?',
    answer: [ 'space', 'methods', 'tigers', 'dreams'],
    correctAnswer: 'methods'
},

{
question: 'How many years is one score?',
answer: ['20', '50', '15', '5'],
correctAnswer: '20'
},

{
question: 'What did Peter Piper pick?',
answer: [ 'a bunch of bananas', 'a bushel of flowers', 'a peck of pickled peppers','his nose'], 
correctAnswer: 'a peck of pickled peppers'
},

{
question: 'What is the capital of North Carolina?',
answer: ['Charlotte', 'Greensboro', 'Asheville', 'Raleigh'],
correctAnswer: 'Raleigh'
},

{
  question: 'What is the most common species of bird in the world?',
answer: ['pigeon', 'duck', 'chicken', 'blue jay'],
correctAnswer: 'chicken'
},
]


function displayQuestion() {         //display question ----select random questions???
questionCounter++;
const questionIndex = Math.floor(Math.random() * availableQuestion.length); //Code accessed from Stack Overflow(https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array)
currentQuestion = availableQuestion[questionIndex];
question.innerText = currentQuestion.question; //innerText renders only the text content of an element - (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
// console.log(displayQuestion);

//display answer choices 
answerButtons.forEach(function(element,index){
element.textContent = currentQuestion.answer[index];
});
  }




//THIS FUNCTION STARTS THE QUESTION COUNTER AND SCOREBOARD FOR THE TRIVIA 
function playGame() {
questionCounter= 0;
score = 0;
availableQuestion = questions;
//console.log(availableQuestion);
displayQuestion();
};
playGame();






// //activate the next button 
nextButton.addEventListener('click', displayQuestion);


//final page shows the results: "You scored -- out of --!" 





//set timer (https://www.codegrepper.com/code-examples/javascript/add+countdown+timer+to+javascript+quiz)
// var count = 15;
// var interval = setInterval(function(){
//   document.getElementById('countdown-timer').innerHTML=count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     // document.getElementById('countdown-timer').innerHTML='Time is up!'
//   }
// }, 1000);
