//For player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let imgUrl1 = "./images/dice"+ randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imgUrl1);

//For player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let imgUrl2 = "./images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgUrl2);

//Condition
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 win!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}