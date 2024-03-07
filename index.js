
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imagePath1 = "images/dice" + randomNumber1 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", imagePath1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imagePath2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img2")[0].setAttribute("src", imagePath2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏁";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

  