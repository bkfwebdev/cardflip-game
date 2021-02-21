const gameContainer = document.getElementById("game");
let flippedCards = [];
let matchedCards = 0; 
let noclicky = false;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


  // if last two cards flipped dont match unflip them 

  // if all cards have been matched, end game



// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function checkCards (myCards){
  if(myCards[0].style.backgroundColor != myCards[1].style.backgroundColor){
    myCards[0].classList.remove("flipped");
    myCards[1].classList.remove("flipped");
    myCards[0].style.backgroundColor = "white";
    myCards[1].style.backgroundColor = "white"
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
if (noclicky) return;
event.target.style.backgroundColor = event.target.classList[0];
event.target.classList.add("flipped");
flippedCards.push(event.target)
if (flippedCards.length >= 2){checkCards(flippedCards);}
  }

// when the DOM loads
createDivsForColors(shuffledColors);
