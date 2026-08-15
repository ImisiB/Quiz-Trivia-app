let startButton = document.querySelector('.startButton')



function startQuiz() {
  startButton.style.display = 'none'
  let currentQuestionIndex = 0
  let questionDiv = document.querySelector('.question-div')
  questionDiv.innerHTML += `
    <p class="maths">Maths</p>
    <p class="english">English</p>
    <p class="science">Science</p>
  `;
  let maths = document.querySelector('.maths')
  let english = document.querySelector('.english')
  let science = document.querySelector('.science')

maths.addEventListener('click', () => {
  let score = 0
  let nextButton = document.querySelector('.nextButton')
  nextButton.style.display = 'block';
  let answerButton = document.querySelector('.answerButton')
  answerButton.style.display = 'block'
  maths.style.display = 'none'
  english.style.display = 'none'
  science.style.display = 'none'


  const mathQuestions= [
  { id: 1, question: "What is 5 + 7?", options: ["10", "11", "12", "13"], answer: "12" },

  { id: 2, question: "What is 15 - 6?", options: ["8", "9", "10", "11"], answer: "9" },
  { id: 3, question: "What is 4 * 6?", options: ["20", "24", "28", "30"], answer: "24" },
  { id: 4, question: "What is 20 / 4?", options: ["4", "5", "6", "8"], answer: "5" },
  { id: 5, question: "What is 3 squared (3^2)?", options: ["6", "9", "12", "15"], answer: "9" },
  { id: 6, question: "Square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
  { id: 7, question: "What is 9 + 9?", options: ["16", "18", "20", "22"], answer: "18" },
  { id: 8, question: "What is 50 - 23?", options: ["25", "27", "29", "31"], answer: "27" },
  { id: 9, question: "What is 7 * 8?", options: ["54", "56", "58", "62"], answer: "56" },
  { id: 10, question: "What is 81 / 9?", options: ["7", "8", "9", "10"], answer: "9" },
  { id: 11, question: "Value of Pi (approx)?", options: ["2.14", "3.14", "4.14", "3.41"], answer: "3.14" },
  { id: 12, question: "Next prime after 7?", options: ["9", "10", "11", "13"], answer: "11" },
  { id: 13, question: "What is 12 * 12?", options: ["124", "132", "144", "154"], answer: "144" },
  { id: 14, question: "What is 100 / 5?", options: ["10", "15", "20", "25"], answer: "20" },
  { id: 15, question: "What is 2 to the power 3 (2^3)?", options: ["6", "8", "9"], answer: "8" },
  { id: 16, question: "What is 45 + 55?", options: ["90", "95", "100", "105"], answer: "100" },
  { id: 17, question: "What is 99 - 33?", options: ["56", "66", "76", "86"], answer: "66" },
  { id: 18, question: "What is 11 * 11?", options: ["111", "121", "131", "141"], answer: "121" },
  { id: 19, question: "What is 144 / 12?", options: ["10", "11", "12", "14"], answer: "12" },
  { id: 20, question: "What is 15 + 27?", options: ["32", "42", "52", "62"], answer: "42" },
  { id: 21, question: "What is 63 / 7?", options: ["7", "8", "9", "6"], answer: "9" },
  { id: 22, question: "What is 13 * 3?", options: ["36", "39", "42", "45"], answer: "39" },
  { id: 23, question: "What is 1000 - 450?", options: ["450", "500", "550", "600"], answer: "550" },
  { id: 24, question: "What is 18 + 19?", options: ["35", "37", "39", "41"], answer: "37" },
  { id: 25, question: "What is 72 / 8?", options: ["7", "8", "9", "6"], answer: "9" },
  { id: 26, question: "Cube of 3 (3^3)?", options: ["9", "18", "27", "81"], answer: "27" },
  { id: 27, question: "Square root of 144?", options: ["10", "11", "12", "14"], answer: "12" },
  { id: 28, question: "What is 16 + 28?", options: ["34", "44", "54", "42"], answer: "44" },
  { id: 29, question: "What is 55 - 19?", options: ["34", "36", "38", "46"], answer: "36" },
  { id: 30, question: "What is 9 * 9?", options: ["72", "81", "90", "99"], answer: "81" },
  { id: 31, question: "What is 120 / 6?", options: ["15", "20", "25", "30"], answer: "20" },
  { id: 32, question: "What is 35 + 47?", options: ["72", "82", "92", "78"], answer: "82" },
  { id: 33, question: "What is 88 - 44?", options: ["34", "40", "44", "48"], answer: "44" },
  { id: 34, question: "What is 14 * 5?", options: ["60", "65", "70", "75"], answer: "70" },
  { id: 35, question: "What is 56 / 8?", options: ["6", "7", "8", "9"], answer: "7" },
  { id: 36, question: "What is 19 + 21?", options: ["38", "40", "42", "44"], answer: "40" },
  { id: 37, question: "What is 83 - 27?", options: ["54", "56", "58", "66"], answer: "56" },
  { id: 38, question: "What is 15 * 5?", options: ["65", "70", "75", "80"], answer: "75" },
  { id: 39, question: "What is 108 / 9?", options: ["10", "11", "12", "13"], answer: "12" },
  { id: 40, question: "What is 64 + 36?", options: ["90", "98", "100", "110"], answer: "100" },
  { id: 41, question: "What is 75 - 38?", options: ["35", "37", "39", "47"], answer: "37" },
  { id: 42, question: "What is 16 * 4?", options: ["54", "60", "64", "68"], answer: "64" },
  { id: 43, question: "What is 95 / 5?", options: ["17", "18", "19", "21"], answer: "19" },
  { id: 44, question: "What is 28 + 34?", options: ["52", "60", "62", "64"], answer: "62" },
  { id: 45, question: "What is 90 - 45?", options: ["35", "40", "45", "50"], answer: "45" },
  { id: 46, question: "What is 12 * 8?", options: ["86", "92", "96", "108"], answer: "96" },
  { id: 47, question: "What is 117 / 13?", options: ["8", "9", "10", "11"], answer: "9" },
  { id: 48, question: "What is 54 + 29?", options: ["73", "81", "83", "85"], answer: "83" },
  { id: 49, question: "What is 71 - 24?", options: ["45", "47", "49", "51"], answer: "47" },
  { id: 50, question: "What is 13 * 4?", options: ["42", "48", "52", "56"], answer: "52" },
  { id: 51, question: "What is 132 / 11?", options: ["10", "11", "12", "13"], answer: "12" },
  { id: 52, question: "What is 33 + 44?", options: ["67", "77", "87", "74"], answer: "77" },
  { id: 53, question: "What is 82 - 39?", options: ["41", "43", "45", "53"], answer: "43" },
  { id: 54, question: "What is 14 * 6?", options: ["74", "80", "84", "90"], answer: "84" },
  { id: 55, question: "What is 96 / 6?", options: ["14", "15", "16", "18"], answer: "16" },
  { id: 56, question: "What is 48 + 37?", options: ["75", "83", "85", "87"], answer: "85" },
  { id: 57, question: "What is 93 - 48?", options: ["43", "45", "47", "55"], answer: "45" },
  { id: 58, question: "What is 15 * 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { id: 59, question: "What is 105 / 7?", options: ["13", "14", "15", "16"], answer: "15" },
  { id: 60, question: "What is 27 + 58?", options: ["75", "83", "85", "87"], answer: "85" },
  { id: 61, question: "What is 84 - 29?", options: ["45", "53", "55", "57"], answer: "55" },
  { id: 62, question: "What is 16 * 5?", options: ["75", "80", "85", "90"], answer: "80" },
  { id: 63, question: "What is 126 / 9?", options: ["12", "13", "14", "15"], answer: "14" },
  { id: 64, question: "What is 39 + 42?", options: ["71", "81", "91", "79"], answer: "81" },
  { id: 65, question: "What is 74 - 28?", options: ["44", "46", "48", "56"], answer: "46" },
  { id: 66, question: "What is 17 * 3?", options: ["41", "48", "51", "54"], answer: "51" },
  { id: 67, question: "What is 112 / 8?", options: ["12", "13", "14", "16"], answer: "14" },
  { id: 68, question: "What is 61 + 29?", options: ["80", "88", "90", "92"], answer: "90" },
  { id: 69, question: "What is 91 - 36?", options: ["45", "53", "55", "57"], answer: "55" },
  { id: 70, question: "What is 18 * 4?", options: ["64", "68", "72", "76"], answer: "72" },
  { id: 71, question: "What is 135 / 9?", options: ["13", "14", "15", "16"], answer: "15" },
  { id: 72, question: "What is 44 + 39?", options: ["73", "81", "83", "85"], answer: "83" },
  { id: 73, question: "What is 65 - 27?", options: ["36", "38", "40", "48"], answer: "38" },
  { id: 74, question: "What is 15 * 7?", options: ["95", "100", "105", "110"], answer: "105" },
  { id: 75, question: "What is 140 / 10?", options: ["12", "13", "14", "15"], answer: "14" },
  { id: 76, question: "What is 52 + 39?", options: ["81", "90", "91", "93"], answer: "91" },
  { id: 77, question: "What is 82 - 47?", options: ["33", "35", "37", "45"], answer: "35" },
  { id: 78, question: "What is 16 * 6?", options: ["86", "92", "96", "102"], answer: "96" },
  { id: 79, question: "What is 150 / 10?", options: ["13", "14", "15", "16"], answer: "15" },
  { id: 80, question: "What is 37 + 56?", options: ["83", "91", "93", "95"], answer: "93" },
  { id: 81, question: "What is 73 - 35?", options: ["36", "38", "40", "48"], answer: "38" },
  { id: 82, question: "What is 14 * 7?", options: ["92", "96", "98", "104"], answer: "98" },
  { id: 83, question: "What is 168 / 12?", options: ["12", "13", "14", "15"], answer: "14" },
  { id: 84, question: "What is 45 + 46?", options: ["81", "90", "91", "93"], answer: "91" },
  { id: 85, question: "What is 85 - 39?", options: ["44", "46", "48", "56"], answer: "46" },
  { id: 86, question: "What is 13 * 7?", options: ["81", "91", "101", "111"], answer: "91" },
  { id: 87, question: "What is 156 / 12?", options: ["11", "12", "13", "14"], answer: "13" },
  { id: 88, question: "What is 68 + 24?", options: ["82", "90", "92", "94"], answer: "92" },
  { id: 89, question: "What is 94 - 57?", options: ["35", "37", "39", "47"], answer: "37" },
  { id: 90, question: "What is 17 * 4?", options: ["58", "64", "68", "72"], answer: "68" },
  { id: 91, question: "What is 195 / 15?", options: ["11", "12", "13", "14"], answer: "13" },
  { id: 92, question: "What is 59 + 34?", options: ["83", "91", "93", "95"], answer: "93" },
  { id: 93, question: "What is 63 - 28?", options: ["33", "35", "37", "45"], answer: "35" },
  { id: 94, question: "What is 18 * 5?", options: ["80", "85", "90", "95"], answer: "90" },
  { id: 95, question: "What is 169 / 13?", options: ["11", "12", "13", "14"], answer: "13" },
  { id: 96, question: "What is 47 + 48?", options: ["85", "93", "95", "97"], answer: "95" },
  { id: 97, question: "What is 81 - 46?", options: ["33", "35", "37", "45"], answer: "35" },
  { id: 98, question: "What is 19 * 3?", options: ["47", "54", "57", "60"], answer: "57" },
  { id: 99, question: "What is 196 / 14?", options: ["12", "13", "14", "15"], answer: "14" },
  { id: 100, question: "What is 50 + 50?", options: ["90", "95", "100", "105"], answer: "100" }
];

  let randomMathQuestion = []

  for (let i = 0; i < 10; i++) {
    const element = [i];
    let mathQuestion = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
    randomMathQuestion.push(mathQuestion)
  } 
    

  // let randomMathQuestion = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
  
  
  let question = document.querySelector('.question')
  let options = document.querySelector('.options')
  question.innerHTML = '1. ' + randomMathQuestion[0].question
  options.innerHTML = ''
  options.innerHTML += `
      <input type="radio" id="${randomMathQuestion[0].options[0]}" name="option" value="${randomMathQuestion[0].options[0]}" class='option optionA' checked>
      <label for="${randomMathQuestion[0].options[0]}">${randomMathQuestion[0].options[0]}</label><br>
      `;
  options.innerHTML += `
      <input type="radio" id="${randomMathQuestion[0].options[1]}" name="option" value="${randomMathQuestion[0].options[1]}" class='option optionB' checked>
      <label for="${randomMathQuestion[0].options[1]}">${randomMathQuestion[0].options[1]}</label><br>
    `;
  options.innerHTML += `
        <input type="radio" id="${randomMathQuestion[0].options[2]}" name="option" value="${randomMathQuestion[0].options[2]}" class='option optionC' checked>
      <label for="${randomMathQuestion[0].options[2]}">${randomMathQuestion[0].options[2]}</label><br> 
  `;
  options.innerHTML += `
  <input type="radio" id="${randomMathQuestion[0].options[3]}" name="option" value="${randomMathQuestion[0].options[3]}" class='option optionD' checked>
      <label for="${randomMathQuestion[0].options[3]}">${randomMathQuestion[0].options[3]}</label><br>
      `;
  options.innerHTML += `
        <input type="radio" id="IDK" name="option" value="IDK" class='option' checked>
      <label for="IDK"></label><br> 
  `;

 let optionA = document.querySelector('.optionA')
 let optionB = document.querySelector('.optionB')
 let optionC = document.querySelector('.optionC')
 let optionD = document.querySelector('.optionD')
 
 optionA.addEventListener('click', () => {
  if (optionA.value == randomMathQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
    
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
optionB.addEventListener('click', () => {
  if (optionB.value == randomMathQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
  optionC.addEventListener('click', () => {
   if (optionC.value == randomMathQuestion[currentQuestionIndex].answer) {
      console.log(optionC.value);
      console.log('correct');
      score+=1;
      console.log(score);
      
     console.log(randomMathQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionC.value);
  }
 });
 optionD.addEventListener('click', () => {
  if (optionD.value == randomMathQuestion[currentQuestionIndex].answer) {
    console.log(optionD.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomMathQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionD.value);
    
  }
 });


  function displayQuestion() {
    options.innerHTML = ''
    options.innerHTML += `
      <input type="radio" id="${randomMathQuestion[currentQuestionIndex].options[0]}" name="option" value="${randomMathQuestion[currentQuestionIndex].options[0]}" class='option optionA' checked>
      <label for="${randomMathQuestion[currentQuestionIndex].options[0]}">${randomMathQuestion[currentQuestionIndex].options[0]}</label><br>
      `;
  options.innerHTML += `
      <input type="radio" id="${randomMathQuestion[currentQuestionIndex].options[1]}" name="option" value="${randomMathQuestion[currentQuestionIndex].options[1]}" class='option optionB' checked>
      <label for="${randomMathQuestion[currentQuestionIndex].options[1]}">${randomMathQuestion[currentQuestionIndex].options[1]}</label><br>
    `;
  options.innerHTML += `
        <input type="radio" id="${randomMathQuestion[currentQuestionIndex].options[2]}" name="option" value="${randomMathQuestion[currentQuestionIndex].options[2]}" class='option optionC' checked>
      <label for="${randomMathQuestion[currentQuestionIndex].options[2]}">${randomMathQuestion[currentQuestionIndex].options[2]}</label><br> 
  `;
  options.innerHTML += `
  <input type="radio" id="${randomMathQuestion[currentQuestionIndex].options[3]}" name="option" value="${randomMathQuestion[currentQuestionIndex].options[3]}" class='option optionD' checked>
      <label for="${randomMathQuestion[currentQuestionIndex].options[3]}">${randomMathQuestion[currentQuestionIndex].options[3]}</label><br>
      </li>`;
  options.innerHTML += `
        <input type="radio" id="IDK" name="option" value="IDK" class='option' checked>
      <label for="IDK"></label><br> 
  `;

 let optionA = document.querySelector('.optionA')
 let optionB = document.querySelector('.optionB')
 let optionC = document.querySelector('.optionC')
 let optionD = document.querySelector('.optionD')
 optionA.addEventListener('click', () => {
  if (optionA.value == randomMathQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
    
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
optionB.addEventListener('click', () => {
  if (optionB.value == randomMathQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
  optionC.addEventListener('click', () => {
  if (optionC.value == randomMathQuestion[currentQuestionIndex].answer) {
    console.log(optionC.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomMathQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionC.value);
    
  }
 });
 optionD.addEventListener('click', () => {
  if (optionD.value == randomMathQuestion[currentQuestionIndex].answer) {
    console.log(optionD.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomMathQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomMathQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionD.value);
    
  }
 });
  question.innerText = currentQuestionIndex +1 + '. ' + randomMathQuestion[currentQuestionIndex].question;
  }

  nextButton.addEventListener('click', () => {
      answerButton.disabled = 'false';

    if(currentQuestionIndex < randomMathQuestion.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
        alert(`You have completed the quiz! You got ${score}/10`);
        questionDiv.innerHTML = '  <button class="retryButton">Try again</button> ';
        let realAnswer = document.querySelector('.realAnswer')
        realAnswer.innerHTML = 'Corrections:'
        
        for (let i = 0; i < 10; i++) {
          realAnswer.innerHTML += `<p>${i + 1}. ${randomMathQuestion[i].question}`
          realAnswer.innerHTML += `Answer :${randomMathQuestion[i].answer}</p>`

        }
        realAnswer.innerHTML+=`You got ${score}/10`
        currentQuestionIndex = 0;
        nextButton.disabled = true;
        let tryAgain = document.querySelector('.retryButton')
        tryAgain.style.display = 'block'
        tryAgain.addEventListener('click', () => {
          window.location.reload()
          startQuiz();
        })
      }
  })
})
english.addEventListener('click', () => {
  let score = 0

  let nextButton = document.querySelector('.nextButton')
  nextButton.style.display = 'block';
  let answerButton = document.querySelector('.answerButton')
  answerButton.style.display = 'block'
  maths.style.display = 'none'
  english.style.display = 'none'
  science.style.display = 'none'



const englishQuestions = [
  { id: 1, question: "Choose the correct form: She ___ to the store yesterday.", options: ["go", "goes", "went", "gone"], answer: "went" },
  { id: 2, question: "Identify the noun in the sentence: 'The cat slept peacefully.'", options: ["The", "cat", "slept", "peacefully"], answer: "cat" },
  { id: 3, question: "Choose the correct antonym of 'Brave'.", options: ["Courageous", "Cowardly", "Bold", "Fearless"], answer: "Cowardly" },
  { id: 4, question: "Which word is a synonym of 'Happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
  { id: 5, question: "Fill in the blank: I have ___ apple in my bag.", options: ["a", "an", "the", "some"], answer: "an" },
  { id: 6, question: "Choose the correct plural form of 'Child'.", options: ["Childs", "Children", "Childes", "Childrens"], answer: "Children" },
  { id: 7, question: "Which sentence is in the future tense?", options: ["I ate lunch.", "I eat lunch.", "I will eat lunch.", "I am eating lunch."], answer: "I will eat lunch." },
  { id: 8, question: "Identify the adjective in: 'The red car drove fast.'", options: ["red", "car", "drove", "fast"], answer: "red" },
  { id: 9, question: "Choose the correct spelling.", options: ["Beautifull", "Beautiful", "Beutiful", "Beautiful"], answer: "Beautiful" },
  { id: 10, question: "What is the past participle of 'write'?", options: ["wrote", "written", "writing", "writes"], answer: "written" },
  { id: 11, question: "Fill in the blank: He is taller ___ his brother.", options: ["then", "than", "as", "from"], answer: "than" },
  { id: 12, question: "Which word is a verb?", options: ["Quick", "Run", "Happiness", "Slowly"], answer: "Run" },
  { id: 13, question: "Choose the correct preposition: She is good ___ math.", options: ["at", "in", "on", "with"], answer: "at" },
  { id: 14, question: "Identify the adverb in: 'He ran quickly.'", options: ["He", "ran", "quickly", "None"], answer: "quickly" },
  { id: 15, question: "What is the opposite of 'Ancient'?", options: ["Old", "Modern", "Antique", "Aged"], answer: "Modern" },
  { id: 16, question: "Fill in the blank: They ___ playing football right now.", options: ["is", "are", "am", "be"], answer: "are" },
  { id: 17, question: "Choose the correct pronoun: ___ went to the park.", options: ["Him", "Them", "She", "Their"], answer: "She" },
  { id: 18, question: "Which word means 'to make a choice'?", options: ["Decide", "Divide", "Describe", "Derive"], answer: "Decide" },
  { id: 19, question: "What is the plural of 'Mouse'?", options: ["Mouses", "Mice", "Meese", "Mouse"], answer: "Mice" },
  { id: 20, question: "Choose the correct article: ___ sun rises in the east.", options: ["A", "An", "The", "No article"], answer: "The" },
  { id: 21, question: "Identify the preposition: 'The book is on the table.'", options: ["book", "is", "on", "table"], answer: "on" },
  { id: 22, question: "What is the synonym of 'Fast'?", options: ["Quick", "Slow", "Heavy", "Weak"], answer: "Quick" },
  { id: 23, question: "Choose the correct spelling.", options: ["Neccessary", "Necessary", "Necesseray", "Neccesary"], answer: "Necessary" },
  { id: 24, question: "Fill in the blank: We ___ finished our homework.", options: ["has", "have", "is", "are"], answer: "have" },
  { id: 25, question: "Which word is an abstract noun?", options: ["Chair", "Honesty", "Dog", "London"], answer: "Honesty" },
  { id: 26, question: "Choose the correct form: If I ___ rich, I would travel.", options: ["am", "were", "was", "be"], answer: "were" },
  { id: 27, question: "What is the past tense of 'run'?", options: ["ran", "runned", "running", "runs"], answer: "ran" },
  { id: 28, question: "Identify the conjunction in: 'I like tea and coffee.'", options: ["like", "tea", "and", "coffee"], answer: "and" },
  { id: 29, question: "Choose the opposite of 'Strong'.", options: ["Powerful", "Weak", "Tough", "Sturdy"], answer: "Weak" },
  { id: 30, question: "Fill in the blank: She sings ___.", options: ["beautiful", "beautifully", "beauty", "beautify"], answer: "beautifully" },
  { id: 31, question: "What is a group of fish called?", options: ["Herd", "Flock", "School", "Pack"], answer: "School" },
  { id: 32, question: "Choose the correct contraction for 'do not'.", options: ["don't", "do'nt", "dont'", "dnot"], answer: "don't" },
  { id: 33, question: "Identify the subject in: 'Birds fly in the sky.'", options: ["Birds", "fly", "in", "sky"], answer: "Birds" },
  { id: 34, question: "Which word is a pronoun?", options: ["Table", "Jump", "They", "Green"], answer: "They" },
  { id: 35, question: "Choose the correct spelling.", options: ["Accomodate", "Accommodate", "Acomodate", "Acommodate"], answer: "Accommodate" },
  { id: 36, question: "Fill in the blank: He has been working here ___ 2018.", options: ["for", "since", "from", "during"], answer: "since" },
  { id: 37, question: "What is the synonym of 'Silent'?", options: ["Noisy", "Quiet", "Loud", "Busy"], answer: "Quiet" },
  { id: 38, question: "Choose the correct quantifier: How ___ water is left?", options: ["many", "much", "few", "some"], answer: "much" },
  { id: 39, question: "Identify the interjection: 'Ouch! That hurt.'", options: ["Ouch!", "That", "hurt", "None"], answer: "Ouch!" },
  { id: 40, question: "What is the opposite of 'Generous'?", options: ["Kind", "Selfish", "Stingy", "Helpful"], answer: "Stingy" },
  { id: 41, question: "Fill in the blank: She is ___ honest person.", options: ["a", "an", "the", "no article"], answer: "an" },
  { id: 42, question: "Choose the correct past tense of 'see'.", options: ["seen", "saw", "sees", "seeing"], answer: "saw" },
  { id: 43, question: "Which word is a proper noun?", options: ["city", "paris", "country", "dog"], answer: "paris" },
  { id: 44, question: "Choose the correct spelling.", options: ["Receive", "Recieve", "Reseive", "Recieve"], answer: "Receive" },
  { id: 45, question: "Fill in the blank: Neither John nor his friends ___ coming.", options: ["is", "are", "has", "was"], answer: "are" },
  { id: 46, question: "What is the synonym of 'Begin'?", options: ["End", "Start", "Stop", "Finish"], answer: "Start" },
  { id: 47, question: "Identify the superlative adjective in: 'He is the tallest.'", options: ["He", "is", "the", "tallest"], answer: "tallest" },
  { id: 48, question: "Choose the opposite of 'Allow'.", options: ["Permit", "Forbid", "Let", "Grant"], answer: "Forbid" },
  { id: 49, question: "Fill in the blank: Look ___ the beautiful painting.", options: ["at", "on", "in", "to"], answer: "at" },
  { id: 50, question: "What is the plural of 'Foot'?", options: ["Foots", "Feet", "Feets", "Footes"], answer: "Feet" },
  { id: 51, question: "Choose the correct spelling.", options: ["Tomorrow", "Tomorow", "Tommorrow", "Tomorrowe"], answer: "Tomorrow" },
  { id: 52, question: "Fill in the blank: She spoke ___ quietly that I missed it.", options: ["so", "very", "too", "such"], answer: "so" },
  { id: 53, question: "What is the synonym of 'Angry'?", options: ["Calm", "Furious", "Happy", "Glad"], answer: "Furious" },
  { id: 54, question: "Identify the object in: 'The dog chased the ball.'", options: ["dog", "chased", "the", "ball"], answer: "ball" },
  { id: 55, question: "Choose the opposite of 'True'.", options: ["Correct", "False", "Right", "Real"], answer: "False" },
  { id: 56, question: "Fill in the blank: He jumps ___ than anyone else.", options: ["high", "higher", "highest", "highly"], answer: "higher" },
  { id: 57, question: "Which word is a conjunction?", options: ["Because", "Quickly", "Apple", "Under"], answer: "Because" },
  { id: 58, question: "Choose the correct spelling.", options: ["Environment", "Enviroment", "Envirnment", "Envirenment"], answer: "Environment" },
  { id: 59, question: "Fill in the blank: I prefer tea ___ coffee.", options: ["than", "to", "over", "from"], answer: "to" },
  { id: 60, question: "What is the past participle of 'eat'?", options: ["ate", "eaten", "eating", "eats"], answer: "eaten" },
  { id: 61, question: "Choose the opposite of 'Expand'.", options: ["Enlarge", "Shrink", "Grow", "Extend"], answer: "Shrink" },
  { id: 62, question: "Identify the prefix in 'Unhappy'.", options: ["Un", "Happy", "Py", "None"], answer: "Un" },
  { id: 63, question: "Fill in the blank: They have lived here ___ three years.", options: ["since", "for", "during", "from"], answer: "for" },
  { id: 64, question: "Which word is a synonym of 'Smart'?", options: ["Dumb", "Intelligent", "Slow", "Lazy"], answer: "Intelligent" },
  { id: 65, question: "Choose the correct spelling.", options: ["Government", "Goverment", "Govement", "Goverment"], answer: "Government" },
  { id: 66, question: "Fill in the blank: Everyone ___ arrived.", options: ["have", "has", "are", "were"], answer: "has" },
  { id: 67, question: "What is the plural of 'Leaf'?", options: ["Leafs", "Leaves", "Leafes", "Leefs"], answer: "Leaves" },
  { id: 68, question: "Choose the opposite of 'Create'.", options: ["Build", "Destroy", "Make", "Form"], answer: "Destroy" },
  { id: 69, question: "Identify the suffix in 'Quickly'.", options: ["Quick", "ly", "Q", "None"], answer: "ly" },
  { id: 70, question: "Fill in the blank: She is afraid ___ spiders.", options: ["of", "from", "with", "at"], answer: "of" },
  { id: 71, question: "Choose the correct spelling.", options: ["Separate", "Seperate", "Sepparate", "Seprate"], answer: "Separate" },
  { id: 72, question: "Fill in the blank: He runs ___ the street.", options: ["across", "through", "in", "on"], answer: "across" },
  { id: 73, question: "What is the synonym of 'Rich'?", options: ["Poor", "Wealthy", "Needy", "Broke"], answer: "Wealthy" },
  { id: 74, question: "Identify the verb in: 'Please close the door.'", options: ["Please", "close", "the", "door"], answer: "close" },
  { id: 75, question: "Choose the opposite of 'Success'.", options: ["Victory", "Failure", "Win", "Triumph"], answer: "Failure" },
  { id: 76, question: "Fill in the blank: Who is ___ tallest person here?", options: ["a", "an", "the", "no article"], answer: "the" },
  { id: 77, question: "Which word is a preposition?", options: ["Behind", "Cat", "Run", "Blue"], answer: "Behind" },
  { id: 78, question: "Choose the correct spelling.", options: ["Acknowledge", "Acknoledge", "Acknowlidge", "Ackonowledge"], answer: "Acknowledge" },
  { id: 79, question: "Fill in the blank: We ___ going to the cinema tonight.", options: ["is", "am", "are", "be"], answer: "are" },
  { id: 80, question: "What is the past tense of 'go'?", options: ["goed", "went", "gone", "going"], answer: "went" },
  { id: 81, question: "Choose the opposite of 'Accept'.", options: ["Take", "Refuse", "Receive", "Get"], answer: "Refuse" },
  { id: 82, question: "Identify the adjective in: 'A cold breeze blew.'", options: ["cold", "breeze", "blew", "A"], answer: "cold" },
  { id: 83, question: "Fill in the blank: She writes with ___ pen.", options: ["a", "an", "the", "some"], answer: "a" },
  { id: 84, question: "Which word is a synonym of ' tired '?", options: ["Energetic", "Exhausted", "Active", "Lively"], answer: "Exhausted" },
  { id: 85, question: "Choose the correct spelling.", options: ["Committee", "Comittee", "Comimittee", "Commitee"], answer: "Committee" },
  { id: 86, question: "Fill in the blank: I can't find my keys ___.", options: ["somewhere", "anywhere", "nowhere", "everywhere"], answer: "anywhere" },
  { id: 87, question: "What is the plural of 'Woman'?", options: ["Womans", "Women", "Womens", "Woman"], answer: "Women" },
  { id: 88, question: "Choose the opposite of 'Modern'?", options: ["New", "Recent", "Old-fashioned", "Fresh"], answer: "Old-fashioned" },
  { id: 89, question: "Identify the adverb in: 'She sings quite well.'", options: ["She", "sings", "quite", "None"], answer: "quite" },
  { id: 90, question: "Fill in the blank: Turn left ___ the corner.", options: ["at", "on", "in", "by"], answer: "at" },{ id: 91, question: "Choose the correct spelling.", options: ["Calendar", "Calender", "Calandar", "Calander"], answer: "Calendar" },{ id: 92, question: "Fill in the blank: This book is ___ than that one.", options: ["good", "better", "best", "well"], answer: "better" },
  { id: 93, question: "What is the synonym of 'Cunning'?", options: ["Foolish", "Clever", "Naive", "Simple"], answer: "Clever" },
  { id: 94, question: "Identify the conjunction in: 'I went because I was invited.'", options: ["went", "because", "was", "invited"], answer: "because" },
  { id: 95, question: "Choose the opposite of 'Safety'.", options: ["Danger", "Security", "Protection", "Risk"], answer: "Danger" },
  { id: 96, question: "Fill in the blank: He spoke ___ me.", options: ["to", "at", "on", "with"], answer: "to" },
  { id: 97, question: "Which word is a noun?", options: ["Quickly", "Beauty", "Beautiful", "Beautify"], answer: "Beauty" },
  { id: 98, question: "Choose the correct spelling.", options: ["Dilemma", "Dilema", "Dilemna", "Dilemma"], answer: "Dilemma" },
  { id: 99, question: "Fill in the blank: She has ___ friends.", options: ["much", "a lot of", "little", "any"], answer: "a lot of" },
  { id: 100, question: "What is the past participle of 'be'?", options: ["was", "been", "being", "is"], answer: "been" }
];
  let randomEnglishQuestion = []

  for (let i = 0; i < 10; i++) {
    const element = [i];
    let englishQuestion = englishQuestions[Math.floor(Math.random() * englishQuestions.length)];
    randomEnglishQuestion.push(englishQuestion)
  } 
    
  let question = document.querySelector('.question')
  let options = document.querySelector('.options')
  question.innerHTML = '1. ' + randomEnglishQuestion[0].question
  options.innerHTML = ''
  options.innerHTML += `
      <input type="radio" id="${randomEnglishQuestion[0].options[0]}" name="option" value="${randomEnglishQuestion[0].options[0]}" class='option optionA' checked>
      <label for="${randomEnglishQuestion[0].options[0]}">${randomEnglishQuestion[0].options[0]}</label><br>
      `;
  options.innerHTML += `
      <input type="radio" id="${randomEnglishQuestion[0].options[1]}" name="option" value="${randomEnglishQuestion[0].options[1]}" class='option optionB' checked>
      <label for="${randomEnglishQuestion[0].options[1]}">${randomEnglishQuestion[0].options[1]}</label><br>
    `;
  options.innerHTML += `
        <input type="radio" id="${randomEnglishQuestion[0].options[2]}" name="option" value="${randomEnglishQuestion[0].options[2]}" class='option optionC' checked>
      <label for="${randomEnglishQuestion[0].options[2]}">${randomEnglishQuestion[0].options[2]}</label><br> 
  `;
  options.innerHTML += `
  <input type="radio" id="${randomEnglishQuestion[0].options[3]}" name="option" value="${randomEnglishQuestion[0].options[3]}" class='option optionD' checked>
      <label for="${randomEnglishQuestion[0].options[3]}">${randomEnglishQuestion[0].options[3]}</label><br>
      `;
  options.innerHTML += `
        <input type="radio" id="IDK" name="option" value="IDK" class='option' checked>
      <label for="IDK"></label><br> 
  `;

 let optionA = document.querySelector('.optionA')
 let optionB = document.querySelector('.optionB')
 let optionC = document.querySelector('.optionC')
 let optionD = document.querySelector('.optionD')
 
 optionA.addEventListener('click', () => {
  if (optionA.value == randomEnglishQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
    
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
optionB.addEventListener('click', () => {
  if (optionB.value == randomEnglishQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
  optionC.addEventListener('click', () => {
   if (optionC.value == randomEnglishQuestion[currentQuestionIndex].answer) {
      console.log(optionC.value);
      console.log('correct');
      score+=1;
      console.log(score);
      
     console.log(randomEnglishQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionC.value);
  }
 });
 optionD.addEventListener('click', () => {
  if (optionD.value == randomEnglishQuestion[currentQuestionIndex].answer) {
    console.log(optionD.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionD.value);
    
  }
 });


  function displayQuestion() {
    options.innerHTML = ''
    options.innerHTML += `
      <input type="radio" id="${randomEnglishQuestion[currentQuestionIndex].options[0]}" name="option" value="${randomEnglishQuestion[currentQuestionIndex].options[0]}" class='option optionA' checked>
      <label for="${randomEnglishQuestion[currentQuestionIndex].options[0]}">${randomEnglishQuestion[currentQuestionIndex].options[0]}</label><br>
      `;
  options.innerHTML += `
      <input type="radio" id="${randomEnglishQuestion[currentQuestionIndex].options[1]}" name="option" value="${randomEnglishQuestion[currentQuestionIndex].options[1]}" class='option optionB' checked>
      <label for="${randomEnglishQuestion[currentQuestionIndex].options[1]}">${randomEnglishQuestion[currentQuestionIndex].options[1]}</label><br>
    `;
  options.innerHTML += `
        <input type="radio" id="${randomEnglishQuestion[currentQuestionIndex].options[2]}" name="option" value="${randomEnglishQuestion[currentQuestionIndex].options[2]}" class='option optionC' checked>
      <label for="${randomEnglishQuestion[currentQuestionIndex].options[2]}">${randomEnglishQuestion[currentQuestionIndex].options[2]}</label><br> 
  `;
  options.innerHTML += `
  <input type="radio" id="${randomEnglishQuestion[currentQuestionIndex].options[3]}" name="option" value="${randomEnglishQuestion[currentQuestionIndex].options[3]}" class='option optionD' checked>
      <label for="${randomEnglishQuestion[currentQuestionIndex].options[3]}">${randomEnglishQuestion[currentQuestionIndex].options[3]}</label><br>
      </li>`;
  options.innerHTML += `
        <input type="radio" id="IDK" name="option" value="IDK" class='option' checked>
      <label for="IDK"></label><br> 
  `;

 let optionA = document.querySelector('.optionA')
 let optionB = document.querySelector('.optionB')
 let optionC = document.querySelector('.optionC')
 let optionD = document.querySelector('.optionD')
 optionA.addEventListener('click', () => {
  if (optionA.value == randomEnglishQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
    
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
optionB.addEventListener('click', () => {
  if (optionB.value == randomEnglishQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
  optionC.addEventListener('click', () => {
  if (optionC.value == randomEnglishQuestion[currentQuestionIndex].answer) {
    console.log(optionC.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionC.value);
    
  }
 });
 optionD.addEventListener('click', () => {
  if (optionD.value == randomEnglishQuestion[currentQuestionIndex].answer) {
    console.log(optionD.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomEnglishQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionD.value);
    
  }
 });
  question.innerText = currentQuestionIndex +1 + '. ' + randomEnglishQuestion[currentQuestionIndex].question;
  }

  nextButton.addEventListener('click', () => {
      answerButton.disabled = 'false';

    if(currentQuestionIndex < randomEnglishQuestion.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
        alert(`You have completed the quiz! You got ${score}/10`);
        questionDiv.innerHTML = '  <button class="retryButton">Try again</button> ';
        let realAnswer = document.querySelector('.realAnswer')
        realAnswer.innerHTML = 'Corrections:'
        
        for (let i = 0; i < 10; i++) {
          realAnswer.innerHTML += `<p>${i + 1}. ${randomEnglishQuestion[i].question}`
          realAnswer.innerHTML += `Answer :${randomEnglishQuestion[i].answer}</p>`

        }
        realAnswer.innerHTML+=`You got ${score}/10`
        currentQuestionIndex = 0;
        nextButton.disabled = true;
        let tryAgain = document.querySelector('.retryButton')
        tryAgain.style.display = 'block'
        tryAgain.addEventListener('click', () => {
          window.location.reload()
          startQuiz();
        })
      }
  })
})

science.addEventListener('click', () => {
  let score = 0
  let nextButton = document.querySelector('.nextButton')
  nextButton.style.display = 'block';
  let answerButton = document.querySelector('.answerButton')
  answerButton.style.display = 'block'
  maths.style.display = 'none'
  english.style.display = 'none'
  science.style.display = 'none'



const scienceQuestions = [
  {
    id: 1,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Pt"],
    answer: "Au"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    id: 3,
    question: "What gas do plants absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    id: 4,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
    answer: "Mitochondria"
  },
  {
    id: 5,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: "Diamond"
  },
  {
    id: 6,
    question: "What is the speed of light in a vacuum approximately?",
    options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"],
    answer: "300,000 km/s"
  },
  {
    id: 7,
    question: "How many bones are in the adult human body?",
    options: ["206", "208", "210", "198"],
    answer: "206"
  },
  {
    id: 8,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O"
  },
  {
    id: 9,
    question: "Which subatomic particle has a negative charge?",
    options: ["Proton", "Neutron", "Electron", "Positron"],
    answer: "Electron"
  },
  {
    id: 10,
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Brain"],
    answer: "Skin"
  },
  {
    id: 11,
    question: "At what temperature are Celsius and Fahrenheit equal?",
    options: ["-40", "0", "32", "100"],
    answer: "-40"
  },
  {
    id: 12,
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen"
  },
  {
    id: 13,
    question: "What is the center of an atom called?",
    options: ["Nucleus", "Shell", "Quark", "Electron cloud"],
    answer: "Nucleus"
  },
  {
    id: 14,
    question: "What force keeps planets in orbit around the Sun?",
    options: ["Magnetism", "Gravity", "Friction", "Tension"],
    answer: "Gravity"
  },
  {
    id: 15,
    question: "What is the pH of pure water?",
    options: ["0", "7", "14", "5"],
    answer: "7"
  },
  {
    id: 16,
    question: "Which vitamin is synthesized when human skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D"
  },
  {
    id: 17,
    question: "What is the process of water movement through a plant called?",
    options: ["Transpiration", "Respiration", "Evaporation", "Condensation"],
    answer: "Transpiration"
  },
  {
    id: 18,
    question: "Who proposed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    answer: "Albert Einstein"
  },
  {
    id: 19,
    question: "What is the chemical symbol for common table salt?",
    options: ["KCl", "NaCl", "C6H12O6", "NaOH"],
    answer: "NaCl"
  },
  {
    id: 20,
    question: "Which blood type is known as the universal donor?",
    options: ["A+", "AB+", "O-", "B-"],
    answer: "O-"
  },
  {
    id: 21,
    question: "What type of animal is a whale?",
    options: ["Fish", "Amphibian", "Mammal", "Reptile"],
    answer: "Mammal"
  },
  {
    id: 22,
    question: "What is the primary gas found in the sun?",
    options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    answer: "Hydrogen"
  },
  {
    id: 23,
    question: "What instrument is used to measure earthquakes?",
    options: ["Barometer", "Seismograph", "Thermometer", "Anemometer"],
    answer: "Seismograph"
  },
  {
    id: 24,
    question: "How many chambers does the human heart have?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    id: 25,
    question: "What is the study of heredity called?",
    options: ["Genetics", "Ecology", "Anatomy", "Botany"],
    answer: "Genetics"
  },
  {
    id: 26,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury"
  },
  {
    id: 27,
    question: "What element does 'O' represent on the periodic table?",
    options: ["Osmium", "Oxygen", "Oganesson", "Olivine"],
    answer: "Oxygen"
  },
  {
    id: 28,
    question: "What is dry ice made of?",
    options: ["Water", "Carbon dioxide", "Liquid nitrogen", "Ammonia"],
    answer: "Carbon dioxide"
  },
  {
    id: 29,
    question: "What is the most abundant metal in Earth's crust?",
    options: ["Iron", "Aluminum", "Copper", "Gold"],
    answer: "Aluminum"
  },
  {
    id: 30,
    question: "What part of the eye controls the amount of light entering?",
    options: ["Cornea", "Retina", "Pupil", "Lens"],
    answer: "Pupil"
  },
  {
    id: 31,
    question: "Which scientist discovered penicillin?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
    answer: "Alexander Fleming"
  },
  {
    id: 32,
    question: "What is the boiling point of water at standard atmospheric pressure in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C"
  },
  {
    id: 33,
    question: "Which celestial body is known as the Earth's twin due to size?",
    options: ["Mars", "Venus", "Mercury", "Neptune"],
    answer: "Venus"
  },
  {
    id: 34,
    question: "What is the molecular formula for ozone?",
    options: ["O2", "O3", "O", "H2O2"],
    answer: "O3"
  },
  {
    id: 35,
    question: "Which subatomic particle has a positive charge?",
    options: ["Electron", "Proton", "Neutron", "Photon"],
    answer: "Proton"
  },
  {
    id: 36,
    question: "What is the study of weather called?",
    options: ["Meteorology", "Astronomy", "Geology", "Climatology"],
    answer: "Meteorology"
  },
  {
    id: 37,
    question: "What type of lens is used to correct nearsightedness (myopia)?",
    options: ["Concave", "Convex", "Plano", "Bifocal"],
    answer: "Concave"
  },
  {
    id: 38,
    question: "What do bees collect and use to create honey?",
    options: ["Pollen", "Nectar", "Water", "Sap"],
    answer: "Nectar"
  },
  {
    id: 39,
    question: "What is the chemical symbol for iron?",
    options: ["Ir", "Fe", "In", "F"],
    answer: "Fe"
  },
  {
    id: 40,
    question: "Which organic molecule carries genetic information?",
    options: ["Protein", "DNA", "Lipid", "Carbohydrate"],
    answer: "DNA"
  },
  {
    id: 41,
    question: "What is the absolute zero temperature in Celsius?",
    options: ["-273.15°C", "0°C", "-100°C", "-459.67°C"],
    answer: "-273.15°C"
  },
  {
    id: 42,
    question: "Which planet has the most prominent ring system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn"
  },
  {
    id: 43,
    question: "What is the standard unit of force?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Newton"
  },
  {
    id: 44,
    question: "Which organ produces insulin in the human body?",
    options: ["Liver", "Kidney", "Pancreas", "Gallbladder"],
    answer: "Pancreas"
  },
  {
    id: 45,
    question: "What is the chemical formula for methane?",
    options: ["CH4", "C2H6", "CO2", "NH3"],
    answer: "CH4"
  },
  {
    id: 46,
    question: "What is the process where a solid turns directly into a gas?",
    options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
    answer: "Sublimation"
  },
  {
    id: 47,
    question: "Who developed the three laws of motion?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
    answer: "Isaac Newton"
  },
  {
    id: 48,
    question: "What is the chemical symbol for silver?",
    options: ["Si", "Ag", "Sr", "Sv"],
    answer: "Ag"
  },
  {
    id: 49,
    question: "Which cells in the blood carry oxygen around the body?",
    options: ["White blood cells", "Platelets", "Red blood cells", "Plasma"],
    answer: "Red blood cells"
  },
  {
    id: 50,
    question: "What is the outer layer of the Earth called?",
    options: ["Mantle", "Core", "Crust", "Magma"],
    answer: "Crust"
  },
  {
    id: 51,
    question: "What is the study of fungi called?",
    options: ["Mycology", "Botany", "Zoology", "Phycology"],
    answer: "Mycology"
  },
  {
    id: 52,
    question: "Which gas is released during cellular respiration?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    id: 53,
    question: "What is the unit of electrical resistance?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Ohm"
  },
  {
    id: 54,
    question: "What is the chemical symbol for potassium?",
    options: ["P", "Po", "K", "Pt"],
    answer: "K"
  },
  {
    id: 55,
    question: "Which animal group is cold-blooded?",
    options: ["Mammals", "Birds", "Reptiles", "None"],
    answer: "Reptiles"
  },
  {
    id: 56,
    question: "What is the speed of sound in dry air at 20°C approximately?",
    options: ["343 m/s", "1500 m/s", "300,000 m/s", "100 m/s"],
    answer: "343 m/s"
  },
  {
    id: 57,
    question: "What is the primary pigment used by plants to absorb light?",
    options: ["Carotenoid", "Chlorophyll", "Anthocyanin", "Xanthophyll"],
    answer: "Chlorophyll"
  },
  {
    id: 58,
    question: "Which planet is known as the Morning Star or Evening Star?",
    options: ["Mars", "Venus", "Mercury", "Saturn"],
    answer: "Venus"
  },
  {
    id: 59,
    question: "What is the chemical symbol for sodium?",
    options: ["So", "Na", "Sd", "N"],
    answer: "Na"
  },
  {
    id: 60,
    question: "How many pairs of chromosomes are in a normal human cell?",
    options: ["22", "23", "24", "46"],
    answer: "23"
  },
  {
    id: 61,
    question: "What is the main component of natural gas?",
    options: ["Propane", "Methane", "Butane", "Ethane"],
    answer: "Methane"},
    {
      id: 62,
      question: "What galaxy is Earth located in?",
      options: ["Andromeda", "Milky Way", "Sombrero", "Triangulum"],
      
      answer: "Milky Way"
    },
    {
      id: 63,
      question: "What is the scientific name for humans?",
      options: ["Homo habilis", "Homo sapiens", "Australopithecus", "Homo erectus"],
      answer: "Homo sapiens"
    },
    {
      id: 64,
      question: "What instrument measures atmospheric pressure?",
      options: ["Thermometer", "Barometer", "Hydrometer", "Altimeter"],
      answer: "Barometer"
    },
    {
      id: 65,
      question: "Which subatomic particle has no electrical charge?",
      options: ["Proton", "Electron", "Neutron", "Ion"],
      answer: "Neutron"
    },
    {
      id: 66,
      question: "What is the chemical symbol for lead?",
      options: ["Le", "Ld", "Pb", "Pt"],
      answer: "Pb"
    },
    {
      id: 67,
      question: "What is the freezing point of water in Fahrenheit?",
      options: ["0°F", "32°F", "100°F", "212°F"],
      answer: "32°F"
    },
    {
      id: 68,
      question: "Which vitamin helps blood to clot?",
      options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin E"],
      answer: "Vitamin K"
    },
    {
      id: 69,
      question: "What is the study of fossils called?",
      options: ["Archaeology", "Paleontology", "Geology", "Anthropology"],
      answer: "Paleontology"
    },
    {
      id: 70,
      question: "What is the most common isotope of hydrogen called?",
      options: ["Deuterium", "Tritium", "Protium", "Hydride"],
      answer: "Protium"
    },
    {
      id: 71,
      question: "Which planet rotates on its side?",
      options: ["Jupiter", "Uranus", "Saturn", "Mercury"],
      answer: "Uranus"
    },
    {
      id: 72,
      question: "What is the unit of frequency?",
      options: ["Hertz", "Joule", "Tesla", "Weber"],
      answer: "Hertz"
    },
    {
      id: 73,
      question: "What is the chemical symbol for copper?",
      options: ["Co", "Cu", "Cp", "C"],
      answer: "Cu"
    },
    {
      id: 74,
      question: "Which human organ is responsible for filtering blood and making urine?",
      options: ["Liver", "Heart", "Kidneys", "Lungs"],
      answer: "Kidneys"
    },
    {
      id: 75,
      question: "What is the term for a liquid turning into a gas at the surface?",
      options: ["Boiling", "Evaporation", "Melting", "Freezing"],
      answer: "Evaporation"
    },
    {
      id: 76,
      question: "What is the chemical symbol for tin?",
      options: ["Ti", "Tn", "Sn", "St"],
      answer: "Sn"
    },
    {
      id: 77,
      question: "What energy is stored in an object due to its position?",
      options: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"],
      answer: "Potential energy"
    },
    {
      id: 78,
      question: "Which gas is essential for human respiration?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
      answer: "Oxygen"
    },
    {
      id: 79,
      question: "What is the chemical symbol for helium?",
      options: ["H", "He", "Ha", "hl"],
      answer: "He"
    },
    {
      id: 80,
      question: "Which scientific instrument is used to view distant objects in space?",
      options: ["Microscope", "Telescope", "Periscope", "Kaleidoscope"],
      answer: "Telescope"
    },
    {
      id: 81,
      question: "What is the study of the Earth's solid material and rocks called?",
      options: ["Geography", "Geology", "Meteorology", "Oceanography"],
      answer: "Geology"
    },
    {
      id: 82,
      question: "What is the chemical symbol for carbon?",
      options: ["Ca", "C", "Co", "Cr"],
      answer: "C"
    },
    {
      id: 83,
      question: "Which planet is the largest in our solar system?",
      options: ["Saturn", "Jupiter", "Neptune", "Earth"],
      answer: "Jupiter"
    },
    {
      id: 84,
      question: "What is the unit of electrical power?",
      options: ["Volt", "Ohm", "Watt", "Ampere"],
      answer: "Watt"
    },
    {
      id: 85,
      question: "What is the chemical formula for table sugar (sucrose)?",
      options: ["C6H12O6", "C12H22O11", "NaCl", "CH4"],
      answer: "C12H22O11"
    },
    {
      id: 86,
      question: "What type of charge does a neutron have?",
      options: ["Positive", "Negative", "Neutral", "Variable"],
      answer: "Neutral"
    },
    {
      id: 87,
      question: "Who formulated the laws of planetary motion?",
      options: ["Johannes Kepler", "Isaac Newton", "Nicolaus Copernicus", "Galileo Galilei"],
      answer: "Johannes Kepler"
    },
    {
      id: 88,
      question: "What is the chemical symbol for nitrogen?",
      options: ["Ni", "N", "Na", "Ne"],
      answer: "N"
    },
    {
      id: 89,
      question: "Which blood cells fight infections in the human body?",
      options: ["Red blood cells", "White blood cells", "Platelets", "Hemoglobin"],
      answer: "White blood cells"
    },
    {
      id: 90,
      question: "What is the main source of energy for Earth's climate and weather?",
      options: ["The Moon", "The Sun", "Geothermal core", "Ocean currents"],
      answer: "The Sun"
    },
    {
      id: 91,
      question: "What is the chemical symbol for iron?",
      options: ["Ir", "Fe", "In", "I"],
      answer: "Fe"
    },
    {
      id: 92,
      question: "What is the smallest unit of life?",
      options: ["Atom", "Molecule", "Cell", "Organ"],
      answer: "Cell"
    },
    {
      id: 93,
      question: "What is the chemical symbol for mercury?",
      options: ["Me", "My", "Hg", "Mg"],
      answer: "Hg"
    },
    {
      id: 94,
      question: "Which gas is known as laughing gas?",
      options: ["Nitrous oxide", "Carbon monoxide", "Sulfur dioxide", "Hydrogen cyanide"],
      answer: "Nitrous oxide"
    },
    {
      id: 95,
      question: "What is the measurement of the quantity of matter in an object?",
      options: ["Weight", "Mass", "Volume", "Density"],
      answer: "Mass"
    },
    {
      id: 96,
      question: "What is the chemical symbol for phosphorus?",
      options: ["Ph", "P", "Ps", "Po"],
      answer: "P"
    },
    {
      id: 97,
      question: "Which scientific scale measures earthquake magnitude intensity?",
      options: ["Richter scale", "Kelvin scale", "Beaufort scale", "Mohs scale"],
      answer: "Richter scale"
    },
    {
      id: 98,
      question: "What is the chemical symbol for hydrogen?",
      options: ["Hy", "H", "Ho", "Hd"],
      answer: "H"
    },
    {
      id: 99,
      question: "What layer of Earth's atmosphere contains the ozone layer?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      answer: "Stratosphere"
    },
    {
      id: 100,
      question: "What is the chemical symbol for tungsten?",
      options: ["Tu", "Tn", "W", "Tg"],
      answer: "W"
    }
  ];
  let randomScienceQuestion = []

  for (let i = 0; i < 10; i++) {
    const element = [i];
    let scienceQuestion =scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)];
    randomScienceQuestion.push(scienceQuestion)
  } 
    
  let question = document.querySelector('.question')
  let options = document.querySelector('.options')
  question.innerHTML = '1. ' + randomScienceQuestion[0].question
  options.innerHTML = ''
  options.innerHTML += `
      <input type="radio" id="${randomScienceQuestion[0].options[0]}" name="option" value="${randomScienceQuestion[0].options[0]}" class='option optionA' checked>
      <label for="${randomScienceQuestion[0].options[0]}">${randomScienceQuestion[0].options[0]}</label><br>
      `;
  options.innerHTML += `
      <input type="radio" id="${randomScienceQuestion[0].options[1]}" name="option" value="${randomScienceQuestion[0].options[1]}" class='option optionB' checked>
      <label for="${randomScienceQuestion[0].options[1]}">${randomScienceQuestion[0].options[1]}</label><br>
    `;
  options.innerHTML += `
        <input type="radio" id="${randomScienceQuestion[0].options[2]}" name="option" value="${randomScienceQuestion[0].options[2]}" class='option optionC' checked>
      <label for="${randomScienceQuestion[0].options[2]}">${randomScienceQuestion[0].options[2]}</label><br> 
  `;
  options.innerHTML += `
  <input type="radio" id="${randomScienceQuestion[0].options[3]}" name="option" value="${randomScienceQuestion[0].options[3]}" class='option optionD' checked>
      <label for="${randomScienceQuestion[0].options[3]}">${randomScienceQuestion[0].options[3]}</label><br>
      `;
  options.innerHTML += `
        <input type="radio" id="IDK" name="option" value="IDK" class='option' checked>
      <label for="IDK"></label><br> 
  `;

 let optionA = document.querySelector('.optionA')
 let optionB = document.querySelector('.optionB')
 let optionC = document.querySelector('.optionC')
 let optionD = document.querySelector('.optionD')
 
 optionA.addEventListener('click', () => {
  if (optionA.value == randomScienceQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
    
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
optionB.addEventListener('click', () => {
  if (optionB.value == randomScienceQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
  optionC.addEventListener('click', () => {
   if (optionC.value == randomScienceQuestion[currentQuestionIndex].answer) {
      console.log(optionC.value);
      console.log('correct');
      score+=1;
      console.log(score);
      
     console.log(randomScienceQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionC.value);
  }
 });
 optionD.addEventListener('click', () => {
  if (optionD.value == randomScienceQuestion[currentQuestionIndex].answer) {
    console.log(optionD.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionD.value);
    
  }
 });


  function displayQuestion() {
    options.innerHTML = ''
    options.innerHTML += `
      <input type="radio" id="${randomScienceQuestion[currentQuestionIndex].options[0]}" name="option" value="${randomScienceQuestion[currentQuestionIndex].options[0]}" class='option optionA' checked>
      <label for="${randomScienceQuestion[currentQuestionIndex].options[0]}">${randomScienceQuestion[currentQuestionIndex].options[0]}</label><br>
      `;
  options.innerHTML += `
      <input type="radio" id="${randomScienceQuestion[currentQuestionIndex].options[1]}" name="option" value="${randomScienceQuestion[currentQuestionIndex].options[1]}" class='option optionB' checked>
      <label for="${randomScienceQuestion[currentQuestionIndex].options[1]}">${randomScienceQuestion[currentQuestionIndex].options[1]}</label><br>
    `;
  options.innerHTML += `
        <input type="radio" id="${randomScienceQuestion[currentQuestionIndex].options[2]}" name="option" value="${randomScienceQuestion[currentQuestionIndex].options[2]}" class='option optionC' checked>
      <label for="${randomScienceQuestion[currentQuestionIndex].options[2]}">${randomScienceQuestion[currentQuestionIndex].options[2]}</label><br> 
  `;
  options.innerHTML += `
  <input type="radio" id="${randomScienceQuestion[currentQuestionIndex].options[3]}" name="option" value="${randomScienceQuestion[currentQuestionIndex].options[3]}" class='option optionD' checked>
      <label for="${randomScienceQuestion[currentQuestionIndex].options[3]}">${randomScienceQuestion[currentQuestionIndex].options[3]}</label><br>
      </li>`;
  options.innerHTML += `
        <input type="radio" id="IDK" name="option" value="IDK" class='option' checked>
      <label for="IDK"></label><br> 
  `;

 let optionA = document.querySelector('.optionA')
 let optionB = document.querySelector('.optionB')
 let optionC = document.querySelector('.optionC')
 let optionD = document.querySelector('.optionD')
 optionA.addEventListener('click', () => {
  if (optionA.value == randomScienceQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
    
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
optionB.addEventListener('click', () => {
  if (optionB.value == randomScienceQuestion[currentQuestionIndex].answer) {
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log(optionB.value);
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionB.value);
    
  }
 });
  optionC.addEventListener('click', () => {
  if (optionC.value == randomScienceQuestion[currentQuestionIndex].answer) {
    console.log(optionC.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionC.value);
    
  }
 });
 optionD.addEventListener('click', () => {
  if (optionD.value == randomScienceQuestion[currentQuestionIndex].answer) {
    console.log(optionD.value);
    console.log('correct');
    score+=1;
    console.log(score);
    
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
  } else {
    console.log(randomScienceQuestion[currentQuestionIndex].answer)
    console.log('incorrect');
    console.log(optionD.value);
    
  }
 });
  question.innerText = currentQuestionIndex +1 + '. ' + randomScienceQuestion[currentQuestionIndex].question;
  }

  nextButton.addEventListener('click', () => {
      answerButton.disabled = 'false';

    if(currentQuestionIndex < randomScienceQuestion.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
        alert(`You have completed the quiz! You got ${score}/10`);
        questionDiv.innerHTML = '  <button class="retryButton">Try again</button> ';
        let realAnswer = document.querySelector('.realAnswer')
        realAnswer.innerHTML = 'Corrections:'
        
        for (let i = 0; i < 10; i++) {
          realAnswer.innerHTML += `<p>${i + 1}. ${randomScienceQuestion[i].question}`
          realAnswer.innerHTML += `Answer :${randomScienceQuestion[i].answer}</p>`

        }
        realAnswer.innerHTML+=`You got ${score}/10`
        currentQuestionIndex = 0;
        nextButton.disabled = true;
        let tryAgain = document.querySelector('.retryButton')
        tryAgain.style.display = 'block'
        tryAgain.addEventListener('click', () => {
          window.location.reload()
          startQuiz();
        })
      }
  })
})
}

startButton.addEventListener('click', () => {
  startQuiz();
})

let tryAgain = document.querySelector('.retryButton')


