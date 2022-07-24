//first question 
//next function
//
//set timer 
var count = 15;
var interval = setInterval(function(){
  document.getElementById('countdown-timer').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('countdown-timer').innerHTML='Time is up!'
  }
}, 1000);


// function
//questions 
const questions = [
    {question: 'What is Methodology the study of?',
option1: 'space',
option2: 'methods',
option3: 'tigers',
option4: 'dreams',
answer: 2,
},

{question: 'How many years is one score?',
option1: '20',
option2: 'methods',
option3: 'tigers',
option4: 'dreams', 
answer: 1,
},

{question: 'What did Peter Piper pick?',
option1: 'a bunch of bananas',
option2: 'a bushel of flowers',
option3: 'a peck of pickled peppers',
option4: 'his nose',
answer: 3,
},

{question: 'What is the capital of North Carolina?',
option1: 'Charlotte',
option2: 'Greensboro',
option3: 'Asheville',
option4: 'Raleigh',
answer: 4,
},
]



