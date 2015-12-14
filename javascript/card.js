//Declare Variables
var clubs = ["ac.gif", "2c.gif", "3c.gif", "4c.gif", "5c.gif", "6c.gif", "7c.gif", "8c.gif", "9c.gif", "10c.gif", "jc.gif", "qc.gif", "kc.gif"]; 
              
var diamonds = ["ad.gif", "2d.gif", "3d.gif", "4d.gif", "5d.gif", "6d.gif", "7d.gif", "8d.gif", "9d.gif", "10d.gif", "jd.gif", "qd.gif", "kd.gif"];
var score = 1000;
var scoreMultiplier = [1, 1, 1, 1, .25, .5, .75, 1.5, 3];
var guess;

var hearts = ["ah.gif", "2h.gif", "3h.gif", "4h.gif", "5h.gif", "6h.gif", "7h.gif", "8h.gif", "9h.gif", "10h.gif", "jh.gif", "qh.gif", "kh.gif"]; 
              
var spades = ["as.gif", "2s.gif", "3s.gif", "4s.gif", "5s.gif", "6s.gif", "7s.gif", "8s.gif", "9s.gif", "10s.gif", "js.gif", "qs.gif", "ks.gif"];
var drawnSuit;
var drawnCard;

//Prompt user for a guess
guess = cardGuess();

//checks to ensure the users guess is a valid suit
validSuit(guess);

//Selects a suit at random 
drawnSuit = drawSuit();

//Selects a card from the random suit selected
drawnCard = drawCard(drawnSuit);

//Checks the users guess to the drawn suit
guessCheck(drawnSuit, guess, drawnCard);

//Compares Suit and takes responsive action based on results
function guessCheck(drawnSuit, guess, drawnCard) {
  var nextCard = document.createElement("img");
  nextCard.setAttribute("src", "images/cards/" + drawnCard);
  document.body.appendChild(nextCard);
  
  //Compares guess to suit, and if correct it increments the score with a random
  //multiplier. 
  while (guess === drawnSuit) {
    multiplier = scoreMultiplier[Math.floor(Math.random() * 9)];
    score = (score + 1379) +  (score * multiplier);
    score = Math.round(score);
    alert("You are Correct! You gained a " + multiplier + "% bonus!");
    guess = cardGuess();
    validSuit(guess);
    drawnSuit = drawSuit();
    drawnCard = drawCard(drawnSuit);
    nextCard.setAttribute("src", "images/cards/" + drawnCard);
    document.body.appendChild(nextCard);
  }
  //Displays the score the user achieved, and what the correct answer was
  alert("Wrong! The correct answer was: " + drawnSuit);
  document.write("<h2>You Scored " + score + " Points!</h2>");
}