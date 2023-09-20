const container = document.querySelector(".container");
const numberBar = document.querySelector(".number-bar");
const timerBar = document.querySelector(".timer-bar");
const timer = document.querySelector(".timer");
const restart = document.querySelector("button");
const numArr = [];
const userArr = [];
let counterSecondi = 6;


for(i = 0; i < 5; i++){
  const number = randomizer(1, 10);
  const span = document.createElement("span");
  span.innerHTML = number;
  numArr.push(number);
  console.log(numArr);

  container.append(numberBar);
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
		}
	},1000)
}

function delayPrompt(){
  let t = 0;
  const interval = setInterval(function(){
    t++;
    userArr.push(prompt_function());
    console.log(userArr);
    clearInterval(interval);
  }, 1000);
} 



function prompt_function(){
  return prompt();
}


  
