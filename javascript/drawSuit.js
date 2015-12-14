//Selects a card suit at random from the suits array
function drawSuit() {
  var drawnSuit;
  var suits = ["CLUBS", "DIAMONDS", "HEARTS", "SPADES"];
  drawnSuit = suits[Math.floor(Math.random() * 4)];
  return drawnSuit;
}