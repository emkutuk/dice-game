var rndNr1 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src", "img/dice" + rndNr1 + ".png");

var rndNr2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img2").setAttribute("src", "img/dice" + rndNr2 + ".png");

if(rndNr1 > rndNr2)
document.querySelector(".title").textContent = "🚩 Player 1 Wins!";
else if(rndNr2 > rndNr1)
document.querySelector(".title").textContent = "Player 2 Wins! 🚩";
else if(rndNr2 === rndNr1)
document.querySelector(".title").textContent = "It is a draw!";