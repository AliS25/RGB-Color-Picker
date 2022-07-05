 /*Ali Sbeih*/

let myBox = document.querySelector('div');

const red = document.querySelector('#red');
const redVal = document.querySelector('.red-output');
const green = document.querySelector('#green');
const greenVal = document.querySelector('.green-output');
const blue = document.querySelector('#blue');
const blueVal = document.querySelector('.blue-output');

redVal.textContent = red.value;
greenVal.textContent = green.value;
blueVal.textContent = blue.value;

red.addEventListener('input', function() {
  redVal.textContent = red.value;
 myBox.style.backgroundColor="rgb("+red.value+","+green.value +","+ blue.value+")";

});
green.addEventListener('input', function() {
  greenVal.textContent = green.value;
  myBox.style.backgroundColor="rgb("+red.value+","+green.value +","+ blue.value+")";

});
blue.addEventListener('input', function() {
  blueVal.textContent = blue.value;
  myBox.style.backgroundColor="rgb("+red.value+","+green.value +","+ blue.value+")";

});
