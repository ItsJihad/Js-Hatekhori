const submit = document.querySelector("#subt");
const form = document.querySelector("form");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const NewGbtn = document.querySelector(".button1");
const Numberr = document.querySelector(".number");
const p = document.createElement("p");

//---------------------------------------------------------------Game Begins------------------------------------------------------------------------

let randomNumber = Math.round((Math.random() * 100).toFixed(2));
console.log(randomNumber);

let gameLogic=true

submit.addEventListener("click", (e) => {
  e.preventDefault();
  guess = parseInt(userInput.value);
 
  if(isNaN(guess)){
    alert('Need a Number')
  }else{
    GameLogic(guess);
    GuessCol(guess);
    attempted();
    retry();
  }

});

let prevGuess = [];
function GuessCol() {
  prevGuess.push(guess);
  guessSlot.innerHTML = prevGuess;
}

let attempt = 1;
let remain;
function attempted() {
  remain = `${10 - attempt}`;
  attempt++;
  if (remain == 0) {
    Endgame();
    Textchanger()
  }
  remaining.innerHTML = remain;
  console.log("CHilo 10 hoilo : ", remain);
  
  
}



function GameLogic() {
  if (guess === randomNumber) {
    Numberr.innerHTML = `Yes ${guess} is the Right Number`;
    Endgame();
  } else if (guess>= randomNumber){
    Numberr.innerHTML = `High Number`;
  }else if (guess>= randomNumber){
    Numberr.innerHTML = `Low Number`;
  }
}


function Endgame() {
  
  userInput.setAttribute("disabled", "");
  subt.setAttribute("disabled", "");
  
}

function retry() {
  userInput.value = "";
}



function Textchanger(){
  gameLogic=false
  Numberr.innerHTML = ` Better Luck Next Time`;
}


