let randomNum=parseInt(Math.random() * 100 + 1);

const userInput=document.querySelector('#guessField');
const submitButton= document.querySelector('#subt');
const lowOrHi= document.querySelector('.lowOrHi');
const gussesSlot= document.querySelector('.guesses');
const startOver= document.querySelector('.resultParas');
const remaining=document.querySelector('.lastResult');

const p=document.createElement('p')

let previousGuesses=[];
let numGuesse = 1;

let playGame=true

if(playGame){
    submitButton.addEventListener('click',function (e) {
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a vaild number')
    }else if(guess < 1){
        alert('Please enter a number bigger then 0')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    } else{
        previousGuesses.push(guess);
        if(numGuesse === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();

        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
     } 

}

function checkGuess(guess){
        if(guess === randomNum){
            displayMessage(`You guessed it right`);
            endGame();
        }else if(guess < randomNum){
            displayMessage(`Number is Too Low`);
        }else if(guess > randomNum){
            displayMessage(`Number is Too high`);
        }

}

function displayGuess(guess){
    userInput.value='';
    gussesSlot.innerHTML +=`${guess}, `;
    numGuesse++;
    remaining.innerHTML=`${11 - numGuesse}`;


}

function displayMessage(message){
   lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame(){
   userInput.value='';
   userInput.setAttribute('disable','');
   p.classList.add('button');
   p.innerHTML= `<h2 id="newGame">Start new game</h2>`;
   startOver.appendChild(p);
   playGame=false;
   newGame();
}

function newGame(){
    const newGame=document.querySelector('#newGame');
    newGame.addEventListener('click', ()=>{
        userInput.removeAttribute('disable');
        previousGuesses=[]
        numGuesse=1;
        gussesSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuesse}`;
        startOver.removeChild(p);
        playGame=true;
    });
 

}
