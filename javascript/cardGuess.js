//prompts the user for a suit, and then converts it to all uppercase.
function cardGuess() {
  guess = prompt("Guess That Suit!");
  guess = guess.toUpperCase();
  return guess;
}