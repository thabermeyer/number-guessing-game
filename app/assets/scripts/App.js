// Game values

let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// UI elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.game__min-num');
const maxNum = document.querySelector('.game__max-num');
const guessBtn = document.querySelector('#guess-submit');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.game__message');

// Assign UI min/max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener

game.addEventListener('mousedown', function(e) {

    if(e.target.classList.contains('play-again')) {

        window.location.reload();

    }

});

// Listen for guess

guessBtn.addEventListener('click', function() {

    let guess = parseInt(guessInput.value);

    // Validate

    if (isNaN(guess) || guess < min || guess > max) {

        setMessage(`Please enter a number between ${min} and ${max}`, 'red');

    }

    // Check if winning number

    if (guess === winningNum) {

        gameOver(true, `That is correct!`)

    } else {

        if (guessesLeft > 1) {

            guessesLeft--;

            guessInput.value = '';

            setMessage(`That is incorrect. You have ${guessesLeft} guesses left.`, 'red');

        } else {

            guessInput.disabled = true;

            gameOver(false, `Sorry - the correct answer was ${winningNum}. Try playing again!`);

        }

    }

});

// Game over

function gameOver(won, msg) {

    let color;

    won === true ? color = 'green' : color = 'red';

    // Disable input

    guessInput.disabled = true;

    // Change border color

    guessInput.style.borderColor = color;

    // Set text color

    message.style.color = color;

    // Set message

    setMessage(msg);

    // Play again

    guessBtn.value = 'Play Again';
    guessBtn.className += ' play-again'; 

}

// Get winning number

function getRandomNum(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// Set message

function setMessage(msg, color) {

    message.style.color = color;
    message.textContent = msg;

}