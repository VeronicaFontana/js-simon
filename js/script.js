const container = document.querySelector(".container");
const numberBar = document.querySelector(".number-bar");
const timerBar = document.querySelector(".timer-bar");
const timer = document.querySelector(".timer");
const restart = document.querySelector("button");
const result = document.querySelector(".result");
const esito = document.querySelector(".esito");
const numArr = [];
const userArr = [];
let counterSecondi = 6;


for(i = 0; i < 5; i++){
  const number = randomizer(1, 10);
  const span = document.createElement("span");
  span.innerHTML = number;
  numArr.push(number);
  console.log(numArr);
  numberBar.append(span);
}

startCountdown();









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
      esito.classList.remove("d-none");
		}
	},1000)
}

function delayPrompt(){
  const interval = setInterval(function(){
    for(t = 0; t < 5; t++){
      const number = promptFunction();
      const span = document.createElement("span");
      span.innerHTML = number;
      userArr.push(number);
      result.append(span);

      console.log(userArr);
    }
    clearInterval(interval);
  }, 1000);
} 

function promptFunction(){
  return prompt();
}


