var randomnumber = Math.floor(Math.random()*6)+1;
var randomnumber1= "images/dice" + randomnumber + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , randomnumber1);

var randonnumber0 = Math.floor(Math.random()*6)+1;
var randomnumber2 = "images/dice" + randonnumber0 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , randomnumber2);



if (randomnumber>randonnumber0) {
  document.querySelector("h1").innerHTML="🎈Player One Win";
}
else if (randomnumber<randonnumber0){
document.querySelector("h1").innerHTML="Player Two Win🎈";
}
else{
  document.querySelector("h1").innerHTML="Match🎈Draw";
}
