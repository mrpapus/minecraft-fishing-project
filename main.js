// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);


function catchFish(fish,fishIMG,fishHTML){
  fish++
  fishHTML.innerHTML = fish;
  resultImg.src = `img/${fishIMG}.png`;
  }

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === 'steve') {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    let randNum = Math.random();
    if (randNum < 0.7) {
      catchFish(numCod++,"Raw-cod",numCodSpan)
    } else if (randNum < 0.9) {
      catchFish(numSalmon++,"Raw-Salmon",numSalmonSpan)
    } else if (randNum < 0.95) {
      catchFish(numTropical++,"Tropical-Fish",numTropicalSpan)
    } else {
      catchFish(numPuffer++,"Pufferfish",numPufferSpan)
    }
  } else if (character === 'alex') {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    let randNum = Math.random();
    if (randNum < 0.1) {
      catchFish(numCod++,"Raw-cod",numCodSpan)
    } else if (randNum < 0.2) {
      catchFish(numSalmon++,"Raw-Salmon",numSalmonSpan)
    } else if (randNum < 0.5) {
      catchFish(numTropical++,"Tropical-Fish",numTropicalSpan)
    } else {
      catchFish(numPuffer++,"Pufferfish",numPufferSpan)
    }
  } else if (character === "villager"){
     //villager 25% for each
    let randNum = Math.random();
    if (randNum < 0.25) {
      catchFish(numCod++,"Raw-cod",numCodSpan)
    } else if (randNum < 0.5) {
      catchFish(numSalmon++,"Raw-Salmon",numSalmonSpan)
    } else if (randNum < 0.75) {
      catchFish(numTropical++,"Tropical-Fish",numTropicalSpan)
    } else {
      catchFish(numPuffer++,"Pufferfish",numPufferSpan)
    }
 }
}
