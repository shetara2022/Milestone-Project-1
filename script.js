//select questions
const questionContainer = document.getElementById('question-container');
const getQuestions = document.querySelector('question');
const options = document.querySelectorAll('btn');
const currectQuestion = [];
const questionCounter = 0;
const maxQuestions = 5; 

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
//function to show questions
function showQuestion(){
  display.innerText = getQuestions.question;
}


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
