//Draws at random a card that matches the suit drawn.
function drawCard(drawnSuit) {
  var drawnCard;
  switch (drawnSuit) {
    case "CLUBS":
      drawnCard = clubs[Math.floor(Math.random() * 13)];
      break;
    case "DIAMONDS":
      drawnCard = diamonds[Math.floor(Math.random() * 13)];
      break;
    case "HEARTS":
      drawnCard = hearts[Math.floor(Math.random() * 13)];
      break;
    case "SPADES":
      drawnCard = spades[Math.floor(Math.random() * 13)];
      break;
  }
  return drawnCard;
}