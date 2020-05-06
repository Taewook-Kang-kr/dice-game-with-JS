
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";

var imageSource1 = "images/" + randomImage1;
var imageSource2 = "images/" + randomImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", imageSource1);
image2.setAttribute("src", imageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerText = "Player1 Wins!";
}
else if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerText = "Draw!";
}
else{
    document.querySelector("h1").innerText = "Player2 Wins!";
}