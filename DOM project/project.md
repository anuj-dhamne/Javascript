Project Related to DOM

## project 1
<!-- [click me]() -->
```javascript

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach((button)=>{
  // console.log(button);
  button.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    // if(e.target.id==='grey'){
    //   body.style.backgroundColor=e.target.id;
    // }else if(e.target.id==='white'){
    //   body.style.backgroundColor=e.target.id;
    // }if(e.target.id==='blue'){
    //   body.style.backgroundColor=e.target.id;
    // }if(e.target.id==='yellow'){
    //   body.style.backgroundColor=e.target.id;
    // }
    body.style.backgroundColor=e.target.id;
  })
})
```

## Project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi} : Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi} : Normal Range</span>`;
    } else {
      result.innerHTML = `<span>${bmi} : Overweight</span>`;
    }
  }
});
```
## Project 3
```Javascript
const clock =document.querySelector("#clock");

setInterval(()=>{
  let date=new Date();
  clock.innerHTML=`${date.toLocaleTimeString()}`;
},1000);
setInterval;

```
## Project 4

```javascript
let randomNumber=parseInt(Math.random()*100+1);
// console.log(randomNumber);

const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver =document.querySelector(".resultParas");

const p=document.createElement("p");

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
   })
}
function validateGuess(guess){
 // validate aahi ki nahi 
 if(isNaN(guess)){
  alert("Enter valid number");
 }
 else if(guess<1){
  alert("Enter number greater than 1");
 }
 else if(guess>100){
  alert("Enter number less than 100");
 }else{
   prevGuess.push(guess);
    if(numGuess==11){
      displayGuess(guess);
      displayMessage(`GameOver . Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
 }

}
function checkGuess(guess){
  // random number chya equal aahe ki nahi 
  if(guess===randomNumber){
    displayMessage(`You guess it right.`);
    endGame();
  }else if(guess<randomNumber){
    displayMessage(`Number is TOO Loww`);
  }else if(guess>randomNumber){
    displayMessage(`Number is TOO Highhh`);
  }
}
function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML +=` ${guess}`;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
  // interact with dom 
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
userInput.value='';
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
startOver.appendChild(p);
playGame=false;
newGame();
}
function newGame(){
 const newGameButton =document.querySelector("#newGame");
 newGameButton.addEventListener(('click'),(e)=>{
  randomNumber=parseInt(Math.random()*100+1);
  prevGuess=[];
  numGuess=1;
  guessSlot.innerHTML='';
  remaining.innerHTML=`${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.
  removeChild(p);
 });
 playGame=true;
}
```