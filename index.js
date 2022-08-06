

var randomnumber1 = Math.floor(Math.random()*6+1);
var randomnumber2 = Math.floor(Math.random()*6+1);
// console.log(randomnumber1);
// console.log(randomnumber2);
// while (randomnumber1 == randomnumber2) {
//   randomnumber2 = Math.floor(Math.random()*6+1);
// }
document.querySelector("#img1").src = 'images/dice'+randomnumber1.toString()+'.png';
document.querySelector("#img2").src = 'images/dice'+randomnumber2.toString()+'.png';

if(randomnumber1==randomnumber2){
  document.getElementById("heading").innerHTML = "Draw!"
}
else if (randomnumber1 > randomnumber2){
  document.getElementById("heading").innerHTML = "Player1 Won!"
}
else{
  document.getElementById("heading").innerHTML = "Player 2 Won!"
}
