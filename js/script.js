const container = document.querySelector(".container");
const numberBar = document.querySelector(".number-bar");
const numberArr = [];


for(i = 0; i < 5; i++){
  const number = randomizer(1, 10);
  console.log(number);
  const span = document.createElement("span");
  console.log(span);
  span.innerHTML = number;

  container.append(numberBar);
  numberBar.append(span);
}










function randomizer(min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

