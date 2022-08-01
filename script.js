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
    option4: '5',
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
    option3: 'Asheville',
    option4: 'Raleigh',
    correctAnswer: 4,
  },

  {
    question: 'What is the most common species of bird in the world?',
    option1: 'pigeon',
    option2: 'duck',
    option3: 'chicken',
    option4: 'blue jay',
    correctAnswer: 3,
  },

  {
    question: 'Area 51 is located in which US state?',
    option1: 'Wyoming',
    option2: 'Arizona',
    option3: 'New Mexico',
    option4: 'Nevada',
    correctAnswer: 4,
  },

  {
    question: 'How many colors are there in a rainbow?',
    option1: '6',
    option2: '7',
    option3: '8',
    option4: '9',
    correctAnswer: 2,
  },

  {
    question: 'What is cynophobia the fear of?',
    option1: 'dogs',
    option2: 'ducks',
    option3: 'cats',
    option4: 'rats',
    correctAnswer: 1,
  },

  {
    question: 'When one is envious, they are said to be what color?',
    option1: 'red',
    option2: 'orange',
    option3: 'green',
    option4: 'yellow',
    correctAnswer: 3,
  },

  {
    question: 'What is the last letter of the Greek Alphabet?',
    option1: 'Omega',
    option2: 'Pi',
    option3: 'Omicron',
    option4: 'Zeta',
    correctAnswer: 1,
  },

  {
    question: 'In which year did Facebook launch',
    option1: '2002',
    option2: '2003',
    option3: '2004',
    option4: '2005',
    correctAnswer: 3,
  },

  {
    question: 'How many notes are there on a standard grand piano?',
    option1: '68',
    option2: '72',
    option3: '78',
    option4: '88',
    correctAnswer: 4,
  }
]

const timer = document.getElementById('time');
const question = document.getElementById('question');
const answerChoice = Array.from(document.getElementsByClassName('answer'));
// const nextButton = document.getElementById('next-btn');
const scoreboard = document.getElementById('total_correct');
const totalQuestions = 12;
const questionCounterText = document.querySelector('.hud-main-text');

let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let score = 0;


//start the trivia
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questionBank];
  displayQuestion();
};

//Show Question from question bank
function displayQuestion() {
  if (availableQuestions.length === 0 || questionCounter > totalQuestions) {
    end();
  }
 else if (timer === 0) {
    timeUp();
  }
 
  questionCounter++;
  questionCounterText.innerText = `${questionCounter} of ${totalQuestions}`;

  let questionIndex = Math.floor(Math.random() * availableQuestions.length); //Code accessed from Stack Overflow(https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array)
  currentQuestion = availableQuestions[questionIndex];  //keeps track of which question we are on
  question.innerText = currentQuestion.question; //innerText renders only the text content of an element - (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)


  //select the number from the dataset property for the corresponding question to show answer options
  answerChoice.forEach(option => {
    const number = option.dataset['number'];
    option.innerText = currentQuestion['option' + number];
    // console.log(option);
  });
  availableQuestions.splice(questionIndex, 1);  //removes questions from the array...
};

//to click on a response and mark it correct or incorrect 
answerChoice.forEach(option => {
  option.addEventListener('click', e => {
    const answerSelected = e.target;
    const selectedAnswer = answerSelected.dataset['number'];

    let classToApply = 'incorrect';
    if (selectedAnswer == currentQuestion.correctAnswer) {
      classToApply = 'correct';
    };
    answerSelected.parentElement.classList.add(classToApply);

    setTimeout(() => {                                                   //adds CSS style to buttons 
      answerSelected.parentElement.classList.remove(classToApply);
      displayQuestion();
    }, 1000);
  });

  // //SET COUNTDOWN TIMER 
  let count = 60;
  let timer = setInterval(function () {
    document.getElementById('time').innerHTML = count;
    count--;
    if (count === 0) {
      clearInterval(timer);
      timeUp();
      // document.getElementById('time').innerHTML = 'Time is up!';
    }
  }, 1000);
});
startGame();

//when trivia has ended 
function end() {
  let triviaEndHTML =
    `
    <h1>CONGRATULATIONS, You have completed this trivia!</h1>
    <h2 id = "score"> You scored: ${currentQuestion.correct} of ${totalQuestions}</h2>
    <div class = "restart">
    <a href ="index.html">Restart</a>
    </div>
    `;
  let triviaElement = document.getElementById('trivia');
  triviaElement.innerHTML = triviaEndHTML;
}
//if time expires before the player finishes the trivia
function timeUp() {
  let timesUpHTML =
    `
      <h1>TIME IS UP!</h1>
      <h2 id = "score"> You scored: ${currentQuestion.correct} of ${totalQuestions}</h2>
      <div class = "restart">
       <a href ="index.html">Restart</a>
    </div>
      `;
  let timesUpElement = document.getElementById('trivia');
  timesUpElement.innerHTML = timesUpHTML;
}

