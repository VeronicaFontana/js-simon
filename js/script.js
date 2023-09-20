const container = document.querySelector(".container");
const numberBar = document.querySelector(".number-bar");
const timerBar = document.querySelector(".timer-bar");
const timer = document.querySelector(".timer");
const startBtn = document.querySelector("#btn-start");
const restartBtn = document.querySelector("#btn-restart");
const result = document.querySelector(".result");
const resultBar = document.querySelector(".result-bar");
const esito = document.querySelector(".esito");
let numArr = [];
let userArr = [];
let errorArr = [];
let correctArr = [];
let messaggio = document.querySelector(".messaggio");
let counterSecondi = 6;
const span = [];
const spanPrompt = [];


startBtn.addEventListener("click", function(){
  start();
  numberBar.classList.remove("d-none");
  timerBar.classList.remove("d-none");
  startBtn.classList.add("d-none");
})


//FUNCTIONS
function start(){
  randomNumber()
  startCountdown();

  console.log("start eseguito")
}

function randomNumber(){
  for(i = 0; i < 5; i++){
    const number = randomizer(1, 10);
    span[i] = document.createElement("span");
    span[i].innerHTML = number;
    numArr.push(number);
    console.log(numArr);
    numberBar.append(span[i]);
  }
}

function randomizer(min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

function startCountdown(){
	setTimeout(function(){
		counterSecondi--;
    timer.innerHTML = counterSecondi;
    timerBar.append(timer);
		if(counterSecondi > 0){
			startCountdown(); 
		}else{
      numberBar.classList.add("d-none");
      delayPrompt();
      resultBar.classList.remove("d-none");
      timerBar.classList.add("d-none");
		}
	},1000)
}

function delayPrompt(){
  const interval = setInterval(function(){
    for(t = 0; t < 5; t++){
      const number = promptFunction();
      spanPrompt[t] = document.createElement("span");
      spanPrompt[t].innerHTML = number;
      userArr.push(number);
      result.append(spanPrompt[t]);

      console.log(userArr);
    }
    clearInterval(interval);
    confronto();
  }, 1000);
} 

function promptFunction(){
  return prompt();
}

function confronto(){
  let error = 0;
  let correct = 0;
  
  for(i = 0; i < 5; i++){
    if(numArr[i] == userArr[i]){
      correct++;
      correctArr.push(userArr[i])
    }else if(numArr[i] != userArr[i]){
      error++;
      errorArr.push(userArr[i])
    }
  }

  console.log(correctArr);
  console.log(errorArr);

  if(correctArr.length === 5){
    messaggio.innerHTML = `Bravo! Hai indovinato tutti i numeri!`
    restartBtn.classList.remove("d-none");
  }else if(correctArr.length === 0){
    messaggio.innerHTML = `Hai sbagliato tutti i numeri. Riprova!`
    restartBtn.classList.remove("d-none");
  }else{
    messaggio.innerHTML = `Hai indovinato ${correct} numeri: ${correctArr}. Hai sbagliato ${error} numeri: ${errorArr}.`
    restartBtn.classList.remove("d-none");
  }
}
  

  restartBtn.addEventListener("click", function(){
    numberBar.classList.add("d-none");
    resultBar.classList.add("d-none");
    timerBar.classList.add("d-none");
    restartBtn.classList.add("d-none");

    for (let i = 0; i < 5; i++) {
      span[i].remove();
    }

    for (let t = 0; t < 5; t++) {
      spanPrompt[t].remove();
    }

    numArr = [];
    userArr = [];
    correctArr = [];
    errorArr = [];
    counterSecondi = 6;
    console.log("restart eseguito")
    console.log([numArr, userArr, correctArr, errorArr])
    messaggio.innerHTML = "";

    startBtn.classList.remove("d-none");
  })
