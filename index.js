var randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var st1="images/dice"+randomNumber1+".png";
console.log(st1);
document.getElementsByClassName("img1")[0].setAttribute("src",st1);

var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var st2="images/dice"+randomNumber2+".png";
console.log(st2);
document.getElementsByClassName("img2")[0].setAttribute("src",st2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}
