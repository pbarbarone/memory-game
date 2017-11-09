
console.log("Up and running!");


/* Card array */

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

/* variables revolving around user's first choice */

var cardOne = cards[1];
cardsInPlay.push(cardOne);
console.log("User flipped Queen");

/* variables revolving around user's second choice */
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped King");

/* code to determine functionality of user's moves*/
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Not a match! Try again!");
	}
}


