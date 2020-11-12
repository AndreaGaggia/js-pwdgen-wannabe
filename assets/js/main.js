var userName = prompt("What's your name?");
var userSurname = prompt("What's your surname?");
var favoriteColor = prompt("What's your favorite color?");

var psw = userName + userSurname + favoriteColor + 20;

document.getElementById('psw').innerHTML = psw;