const container = document.querySelector(".container");
const numberBar = document.querySelector(".number-bar");
let counterSecondi = 6;


for(i = 0; i < 5; i++){
  const number = randomizer(1, 10);
  console.log(number);
  const span = document.createElement("span");
  console.log(span);
  span.innerHTML = number;

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
		console.log(counterSecondi);
		if(counterSecondi > 0){
			startCountdown(); 
		}else{
			console.log("fine");
		}
	},1000)
}