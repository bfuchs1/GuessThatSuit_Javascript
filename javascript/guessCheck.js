function guessCheck(drawnSuit, guess, drawnCard) {
  var nextCard = document.createElement("img");
  nextCard.setAttribute("src", "images/cards/" + drawnCard);
  document.body.appendChild(nextCard);
  while (guess === drawnSuit) {
    multiplier = scoreMultiplier[Math.floor(Math.random() * 8)];
    score = (score + 1379) +  (score * multiplier);
    score = Math.round(score);
    alert("You are Correct!");
    guess = cardGuess();
    validSuit(guess);
    drawnSuit = drawSuit();
    drawnCard = drawCard(drawnSuit);
    nextCard.setAttribute("src", "images/cards/" + drawnCard);
    document.body.appendChild(nextCard);
  }
  alert("Wrong! The correct answer was: " + drawnSuit);
  document.write("<h2>You Scored " + score + " Points!</h2>");
}