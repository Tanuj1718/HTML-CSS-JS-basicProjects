let randomNumber = parseInt(Math.random()*100 +1)
const submit = document.querySelector('#btn')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
if(isNaN(guess) || guess<1 || guess>100){
    alert('Please enter a valid number between 1 to 100')
} else {
    prevGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`GAME OVER! Random Number was ${randomNumber}`)
        endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`Wooww! You guessed it right`)
    endGame()
} else if (guess < randomNumber){
    displayMessage(`Number is TOOO low`)
} else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
}
}
function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess}, `
numGuess++
remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
userInput.value = ''
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(p)
playGame = false
newGame()
}
function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() *10 +1)
    prevGuess = []
    remaining.innerHTML = `10`
    numGuess = 1
    guessSlot.innerHTML = ''
    lowOrHigh.innerHTML = ''
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
})

}