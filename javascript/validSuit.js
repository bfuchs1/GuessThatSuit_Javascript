//Validates the entry from the user to confirm that it is a suit
function validSuit(guess) {
  var isValid = false;
  if (guess === "CLUBS") {
      isValid = true;
    } else if (guess === "DIAMONDS") {
      isValid = true;
    } else if (guess === "HEARTS") {
      isValid = true;
    } else if (guess === "SPADES") {
      isValid = true;
    }

    if (!isValid) {
      alert("Invalid Suit Entered!");
    }
  }