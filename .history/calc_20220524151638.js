

const getDetails = (e) => {
  
    var number;
  var operators = e.getAttribute("data-ops");

  let oldNum = number;

    isOperator = operators ? true : false;
    
    
    for (let i = 0; i < 10; i++){
        number = e.getAttribute("data-num");
        number += 6;
       console.log(number)
    }

};

// When: Equals is clicked. Calculate result
var displayNum = function () {
  // Convert string input to numbers
  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);

  // Perform operation
  switch (operator) {
    case "plus":
      resultNum = oldNum + theNum;
      break;

    case "minus":
      resultNum = oldNum - theNum;
      break;

    case "times":
      resultNum = oldNum * theNum;
      break;

    case "divided by":
      resultNum = oldNum / theNum;
      break;

    // If equal is pressed without an operator, keep number and continue
    default:
      resultNum = theNum;
  }

  // If NaN or Infinity returned
  if (!isFinite(resultNum)) {
    if (isNaN(resultNum)) {
      // If result is not a number; set off by, eg, double-clicking operators
      resultNum = "You broke it!";
    } else {
      // If result is infinity, set off by dividing by zero
      resultNum = "Look at what you've done";
      el("#calculator").classList.add("broken"); // Break calculator
      el("#reset").classList.add("show"); // And show reset button
    }
  }

  // Display result, finally!
  viewer.innerHTML = resultNum;
  equals.setAttribute("data-result", resultNum);

  // Now reset oldNum & keep result
  oldNum = 0;
  theNum = resultNum;
};
