/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

Hint: Make sure each one of the 52! permutations of the deck is equally likely.
*/

const makeRandomNumber = (k) => {
  return Math.round(Math.random()*(k-1)+1)
}

const cardDeck = () => {
  let output = []
  for (i = 0; i < 52; i++) {
    output.push(i)
  }
  return output
}

const limitedSwap = (yourArray) => {
  let copiedArray = yourArray.slice()
  let output = [];
  let temp1;
  for ( i = 0; i < copiedArray.length; i++ ) {
    temp1 = copiedArray[i];
    temp2 = makeRandomNumber(52)
    copiedArray[i] = copiedArray[temp2];
    copiedArray[temp2] = temp1;
  }
  return copiedArray
}

let deck = cardDeck()
console.log(deck)
console.log(limitedSwap(deck))

$(document).ready(function() {

});
