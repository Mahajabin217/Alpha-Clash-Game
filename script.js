//function play(){
    //console.log('Play start now!');

    // Step-1: Hide the Home Screen
    //const homeSection = document.getElementById('home-screen');
    //homeSection.classList.add('hidden');

    // Step-2: Show The PlayGround Section
    //const playgroundSection = document.getElementById('play-ground');
    //playgroundSection.classList.remove('hidden');
//}


function continueGame(){
    // Generate a random alphabet:
    const alphabet = getRandomAlphabet();
    console.log('Your Random Alphabet is', alphabet);

    // Set randomely generated alphabet to the screen:
    const newAlphabet = document.getElementById('new-alphabet');
    newAlphabet.innerText = alphabet;

    // Set Background Color:
    setBgColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}