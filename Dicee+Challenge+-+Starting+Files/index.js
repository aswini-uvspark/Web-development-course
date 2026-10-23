var randomNumber = Math.floor(Math.random()*6)+1
var randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
