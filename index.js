buttons = document.querySelectorAll(".drum");

var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");

for (var i = 0; i < buttons.length; i++)
  buttons[i].addEventListener("click", handleClicks);

function handleClicks() {
  if (this.textContent === "w") tom1.play();
  if (this.textContent === "a") tom2.play();
  if (this.textContent === "s") tom3.play();
  if (this.textContent === "d") tom4.play();
  if (this.textContent === "j") snare.play();
  if (this.textContent === "k") crash.play();
  if (this.textContent === "l") kick.play();
}
