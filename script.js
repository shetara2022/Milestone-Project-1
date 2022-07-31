const questionBank = [           //QUESTION BANK
  {
    question: 'What is Methodology the study of?',
    option1: 'space',
    option2: 'methods',
    option3: 'tigers',
    option4: 'dreams',
    correctAnswer: '2'
  },

  {
    question: 'How many years is one score?',
    option1: '20',
    option2: '50',
    option3: '15',
    option4:  '5',
    correctAnswer: 1,
  },

  {
    question: 'What did Peter Piper pick?',
    option1: 'a bunch of bananas',
    option2: 'a bushel of flowers',
    option3: 'a peck of pickled peppers',
    option4: 'his nose',
    correctAnswer: 3,
  },

  {
    question: 'What is the capital of North Carolina?',
    option1: 'Charlotte',
    option2: 'Greensboro',
    option3:  'Asheville',
    option4:  'Raleigh',
    correctAnswer: 4,
  },

  {
    question: 'What is the most common species of bird in the world?',
    option1: 'pigeon', 
    option2: 'duck', 
    option3:  'chicken', 
    option4:  'blue jay',
    correctAnswer: 3,
  }
]

const timer = document.getElementById('time');
const question = document.getElementById('question');
const answerChoice = Array.from(document.getElementsByClassName('answer'));
// console.log(answerChoice);
const nextButton = document.getElementById('next-btn');
const scoreboard = document.getElementById('results');
const totalQuestions = 5;
const questionCounterText = document.querySelector('.hud-main-text');

let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let score = 0;


//after clicking start 
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questionBank];
  displayQuestion();
};

//Show Question from question bank
function displayQuestion() {
  // if (availableQuestions.length === 0) {
  //   //show scoreboard
  // }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${totalQuestions}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length); //Code accessed from Stack Overflow(https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array)
  currentQuestion = availableQuestions[questionIndex];  //keeps track of which question we are on
  question.innerText = currentQuestion.question; //innerText renders only the text content of an element - (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)

  //select the number from the dataset property for the corresponding question
  answerChoice.forEach(option => {
    const number = option.dataset['number'];
    option.innerText = currentQuestion['option' + number];
    // console.log(option);
  });
  
  availableQuestions.splice(questionIndex, 1);
};

answerChoice.forEach(option => {
  option.addEventListener('click', e => {
    const answerSelected = e.target;
    const selectedAnswer = answerSelected.dataset['number'];

    let classToApply = 'incorrect';
    if (selectedAnswer == currentQuestion.correctAnswer) {
      classToApply = 'correct';
    };
    
    answerSelected.parentElement.classList.add(classToApply);

    setTimeout( () => {
      answerSelected.parentElement.classList.remove(classToApply);
      displayQuestion();
    }, 2000);

  });
});


startGame();


// // BUTTONS 
// const answerButton = document.querySelectorAll(".answer");
// //When I click next button...
//// let currentQuestion = {};      //select current question     const nextButton = document.getElementById('next-btn');
// nextButton.addEventListener('click', displayQuestion);  

// const scoreboard = document.getElementById('total_correct');
// //const time = document.getElementById('time');


// //SET TIMER 
// let count = 15;
// let timer = setInterval(function(){
//   document.getElementById('time').innerHTML=count;
//   count--;
//   if (count === 0){
//     clearInterval(timer);
//     document.getElementById('time').innerHTML = 'Time is up!';
//     nextButton.click();
//     displayQuestion()
//   }
// }, 1000);



// function displayQuestion() {         //display random questions
//   questionCounter++;
//   const questionIndex = Math.floor(Math.random() * availableQuestion.length); //Code accessed from Stack Overflow(https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array)
//   currentQuestion = availableQuestion[questionIndex];  //keeps track of which question we are on
//   question.innerText = currentQuestion.question; //innerText renders only the text content of an element - (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)

//   answerButton.forEach(options => {
//     const number = options.dataset['number'];
//     options.innerText = currentQuestion["options" + number];
//   });
// answerButton.forEach(function (element, index) {
//     element.innerText = currentQuestion.options[index];
// });
  
//   availableQuestion.splice(questionIndex, 1);
  
//   correctAnswer = true;
// };
//     //add event listener to answer buttons
//     answerButton.forEach(options => {
//       options.addEventListener('click', e => {
        
//       })
//     })
//     // nextButton.click();
//     //   timer = setInterval(timer, 1000);
// displayQuestion();

// // //correct answer vs incorrect 






// //THIS FUNCTION STARTS THE QUESTION COUNTER AND SCOREBOARD FOR THE TRIVIA 
// function playGame() {
//   questionCounter = 0;
//   score = 0;
//   availableQuestion = questionBank;
//   //console.log(availableQuestion);
//   displayQuestion();
// };
// playGame();



// //final page shows the results: "You scored -- out of --!" 





// //set timer (https://www.codegrepper.com/code-examples/javascript/add+countdown+timer+to+javascript+quiz)
// // var count = 15;
// // var interval = setInterval(function(){
// //   document.getElementById('countdown-timer').innerHTML=count;
// //   count--;
// //   if (count === 0){
// //     clearInterval(interval);
// //     // document.getElementById('countdown-timer').innerHTML='Time is up!'
// //   }
// // }, 1000);
