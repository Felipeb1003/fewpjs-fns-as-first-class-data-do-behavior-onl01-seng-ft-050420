/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  
 const fixedTime = time.split(':');
 
 if (fixedTime[0] < 12) return 
  
}
/* Write your implementation of displayMessage() */
