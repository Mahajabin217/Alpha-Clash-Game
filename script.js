//function play(){
//console.log('Play start now!');

// Step-1: Hide the Home Screen
//const homeSection = document.getElementById('home-screen');
//homeSection.classList.add('hidden');

// Step-2: Show The PlayGround Section
//const playgroundSection = document.getElementById('play-ground');
//playgroundSection.classList.remove('hidden');
//}

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    //console.log('Player Pressed', playerPressed);

    // Get the Expected to press
    const newAlphabetElement = document.getElementById('new-alphabet');
    const newAlphabet = newAlphabetElement.innerText;
    const expectedAlphabet = newAlphabet.toLowerCase();
    //console.log(playerPressed,expectedAlphabet);

    // Check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');

        // Update Score:
        // 1. Get the current score:
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // 2.Increase the new score:
        const newScore = currentScore + 1;

        // 3. Show the updated score:
        currentScoreElement.innerText = newScore;

        console.log('You have pressed correctly', expectedAlphabet);
        // Matched korle game continue thakbe
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You Missed. You Lost a Life');

        // Reduce Life:
        // 1. Get the current life number:
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // 2.Reduce the life:
        const newLife = currentLife - 1;

        // 3. Show the updated life:
        currentLifeElement.innerText = newLife;
    }
}



// Capture Keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // Generate a random alphabet:
    const alphabet = getRandomAlphabet();
    //console.log('Your Random Alphabet is', alphabet);

    // Set randomely generated alphabet to the screen:
    const newAlphabet = document.getElementById('new-alphabet');
    newAlphabet.innerText = alphabet;

    // Set Background Color:
    setBgColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}