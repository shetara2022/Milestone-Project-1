//reference my questions and answer choices
const getQuestion = document.getElementById("question");
//console.log(getQuestion);

const answers = document.getElementsByClassName("answer");
//console.log(answers);

const totalQuestions = 5; //how many questions to answer

let  currentQuestion = []; //select current question
let questionCounter = 0; //count the question you are on
let score = 0; //how many question answered correctly
let availableQuestion = [];


function playGame () => {
questionCounter= 0;
score = 0;
availableQuestion = questions; 
}









//question bank
const questions = [
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
]


//set timer (https://www.codegrepper.com/code-examples/javascript/add+countdown+timer+to+javascript+quiz)
var count = 15;
var interval = setInterval(function(){
  document.getElementById('countdown-timer').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('countdown-timer').innerHTML='Time is up!'
  }
}, 1000);
