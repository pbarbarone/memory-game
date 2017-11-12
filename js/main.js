
/* Card array */

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0]; 
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
 
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

/* checking card for matches mechancis*/

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

/* card interaction mechanics*/
var flipCard = function (cardId) {

/* code to determine functionality of user's moves*/
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

}

flipCard(0);
flipCard(2);




