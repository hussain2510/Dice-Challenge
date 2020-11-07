function compare(p1,p2)
{
  if(p1>p2)
  {
    document.querySelector("h1").textContent="P1 Is Winner";
  }
  else if(p2>p1)
  {
    document.querySelector("h1").textContent="P2 Is Winner";
  }
  else
      document.querySelector("h1").textContent="Match Is Tie";

}
function changeP1(p1)
{
  if(p1==1)
  {
    n[0].setAttribute("src","images/dice1.png");
  }
  else if(p1==2)
  {
    n[0].setAttribute("src","images/dice2.png");
  }
  else if(p1==3)
  {
    n[0].setAttribute("src","images/dice3.png");
  }
  else if(p1==4)
  {
    n[0].setAttribute("src","images/dice4.png");
  }
  else if(p1==5)
  {
    n[0].setAttribute("src","images/dice5.png");
  }
  else if(p1==6)
  {
    n[0].setAttribute("src","images/dice6.png");
  }
}
function changeP2(p2)
{
  if(p2==1)
  {
    n[1].setAttribute("src","images/dice1.png");
  }
  else if(p2==2)
  {
    n[1].setAttribute("src","images/dice2.png");
  }
  else if(p2==3)
  {
    n[1].setAttribute("src","images/dice3.png");
  }
  else if(p2==4)
  {
    n[1].setAttribute("src","images/dice4.png");
  }
  else if(p2==5)
  {
    n[1].setAttribute("src","images/dice5.png");
  }
  else if(p2==6)
  {
    n[1].setAttribute("src","images/dice6.png");
  }
}
  var n=document.querySelectorAll("img");
  var p1=Math.floor(Math.random()*6)+1;
  var p2=Math.floor(Math.random()*6)+1;
  changeP1(p1);
  changeP2(p2);
  compare(p1,p2);






  /*Another Solution*/
  // var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  //
  // var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  //
  // var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  //
  // var image1 = document.querySelectorAll("img")[0];
  //
  // image1.setAttribute("src", randomImageSource);
  //
  //
  // var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  //
  // var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  //
  // document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  // 
  //
  // //If player 1 wins
  // if (randomNumber1 > randomNumber2) {
  //   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  // }
  // else if (randomNumber2 > randomNumber1) {
  //   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  // }
  // else {
  //   document.querySelector("h1").innerHTML = "Draw!";
  // }
