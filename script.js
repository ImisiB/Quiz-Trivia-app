
// function startQuiz() {
// const API_KEY = 'Sge6uzhiEW+sDDX6NR+esA==sal0MxtCUkulmgcn';
// const url = `https://api.api-ninjas.com/v1/trivia?category=music`;
  
//   const getQuestion = async() => {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'X-Api-Key': API_KEY
//       }
//       });
//       console.log(response.json());
      
//   }
//   getQuestion()
// }
let startButton = document.querySelector('.startButton')

function startQuiz() {
  startButton.style.display = 'none'
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

  let randomMathQuestion = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
  console.log(randomMathQuestion);
  
  let question = document.querySelector('.question')
  let options = document.querySelector('.options')
  question.innerHTML = randomMathQuestion.question
  options.innerHTML = ''
  options.innerHTML += `<li class='option'>A. ${randomMathQuestion.options[0]}</li>`;
  options.innerHTML += `<li class='option'>B. ${randomMathQuestion.options[1]}</li>`;
  options.innerHTML += `<li class='option'>C. ${randomMathQuestion.options[2]}</li>`;
  options.innerHTML += `<li class='option'>D. ${randomMathQuestion.options[3]}</li>`;
  options.innerHTML +=`<label for="userAnswer">Choose your answer:</label>
  <select name="userAnswer" class="userAnswer">
    <option value=""></option>
    <option value="${randomMathQuestion.options[0]}">A</option>
    <option value="${randomMathQuestion.options[1]}">B</option>
    <option value="${randomMathQuestion.options[2]}">C</option>
    <option value="${randomMathQuestion.options[3]}">D</option>
  </select>
  `;
 options.innerHTML += `<button class='answerButton'>answer</button>`;
 let userOption = document.querySelector('.userAnswer')
 
  let answerButton = document.querySelector('.answerButton')
  answerButton.addEventListener('click', () => {
    if(userOption.value === randomMathQuestion.answer) {
    options.innerHTML += `<button class='nextButton'>Next</button>`;
      console.log('correct');
    
  let nextButton = document.querySelector('.nextButton')
  nextButton.addEventListener('click', () => {
    startQuiz();
  })  
    } else if(userOption !== randomMathQuestion.answer)
      options.innerHTML += `<button class='nextButton'>Next</button>`;
        console.log('incorrect');
  
  let nextButton = document.querySelector('.nextButton')
  nextButton.addEventListener('click', () => {
    startQuiz();
  })})
}



startButton.addEventListener('click', () => {
  startQuiz();
}) 

