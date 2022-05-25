"use strict"

// This function displays all numbers from user starting number to the user ending number
function enterClicked () {

  let sum = 0

  // initialize numbers as an empty string 
  let numbers = ""

  
  // get the user starting number 
	let userNum1 = parseInt(document.getElementById('userNum1').value)

  // get the user ending number 
  let userNum2 = parseInt(document.getElementById('userNum2').value)


  // for loop, each time the for loop runs, the counter's value will change until counter matches userNum 2 which is the number that defines the second number in the multiplication. Counter represents the number of times a loop has run "the counter".
  for (let counter = 0; counter < userNum2; counter++) {
    sum = sum + userNum1
  }

	
  // display the results
  document.getElementById('display-results').innerHTML = sum                                                                                                                                                                               
}
