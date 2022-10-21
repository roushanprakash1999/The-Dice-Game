function rollDice(){
    //Declaring variables

    var randomNum1 = Math.trunc(Math.random() * 6) + 1;
    var randomNum2 = Math.trunc(Math.random() * 6) + 1;

    var image1 = "images/dice" + randomNum1 + ".png";
    var image2 = "images/dice" + randomNum2 + ".png";

    //Setting values

    document.querySelector(".img1").setAttribute("src", image1);
    document.querySelector(".img2").setAttribute("src", image2);

    //Declaring winner

    if (randomNum1 > randomNum2) {
      document.querySelector("h1").textContent = "Player 1 wins! 🚩";
    } else if (randomNum1 < randomNum2) {
      document.querySelector("h1").textContent = "Player 2 wins! 🚩";
    } else {
      document.querySelector("h1").textContent = "Draw! Play again! 🎲";
    }
}
