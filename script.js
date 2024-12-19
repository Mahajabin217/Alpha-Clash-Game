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
    console.log('Player Pressed', playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }

    // Get the Expected to press
    const newAlphabetElement = document.getElementById('new-alphabet');
    const newAlphabet = newAlphabetElement.innerText;
    const expectedAlphabet = newAlphabet.toLowerCase();
    //console.log(playerPressed,expectedAlphabet);

    // Check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');

        // Way-2:
        const currentScore = getTextElementValueById('current-score');
        //console.log(currentScore);

        const updatedScore = currentScore+1;
        setTextElementValueById('current-score',updatedScore);

        // Way-1:
        // Update Score:
        // 1. Get the current score:
        //const currentScoreElement = document.getElementById('current-score');
        //const currentScoreText = currentScoreElement.innerText;
        //const currentScore = parseInt(currentScoreText);
        //console.log(currentScore);

        // 2.Increase the new score:
        //const newScore = currentScore + 1;

        // 3. Show the updated score:
        //currentScoreElement.innerText = newScore;

        //console.log('You have pressed correctly', expectedAlphabet);

        // Matched korle game continue thakbe
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You Missed. You Lost a Life');

        // Way-2:
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife-1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
            //console.log('Game Over');
            gameOver();
        }

    /*  Way-1:   
        // Reduce Life:
        // 1. Get the current life number:
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // 2.Reduce the life:
        const newLife = currentLife - 1;

        // 3. Show the updated life:
        currentLifeElement.innerText = newLife; 
        */
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
    // Hode everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // Reset score & life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // Update score
    // 1. Get the final score:
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);

    // 2. Set the final score:
    setTextElementValueById('last-score',lastScore);

    // Clear previous alphabet
    //1. Set the current alphabet:
    const currentAlphabet = getElementTextById('current-alphabet');
    //console.log(currentAlphabet);

    //2. Remove the bg color of the current alphabet:
    removeBgColorById(currentAlphabet);

}