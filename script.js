let displayEl = document.getElementById("display");
let keysEls = document.getElementsByTagName("li");
let keysCount = keysEls.length;
let operator;
displayEl.innerHTML = "";
let num1, num2;
let answer;
let equation_firstPrt;
let equation_allPrt;
let clearAfterEqual = false;
let percent_on = false;

function operate() {
  equation_allPrt = displayEl.innerHTML;
  num2 = parseFloat(displayEl.innerHTML.substring(equation_firstPrt.length, equation_allPrt.length));
  if (operator === "+") {
    if (!percent_on) {
      add();
    } else {
      addPercent();   
    }
    displayEl.innerHTML = answer;
    percent_on = false;
  }
  if (operator === "-") {
    if (!percent_on) {
      subtract();
    } else {
      subtractPercent();
    }
    displayEl.innerHTML = answer;
    percent_on = false;
  }
  if (operator === "×") {
    if (!percent_on) {
      multiply();
    } else {
      multiplyPercent();
    }
    displayEl.innerHTML = answer;
    percent_on = false;
  }
  if (operator === "÷") {
    if (!percent_on) {
      divide();
    } else {
        dividePercent();
      }
      displayEl.innerHTML = answer;
    percent_on = false;
    }

  }
  function add() {
    answer = parseFloat(num1 + num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  function subtract() {
    answer = parseFloat(num1 - num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  function multiply() {
    answer = parseFloat(num1 * num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  function divide() {
    answer = parseFloat(num1 / num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  
  function addPercent() {
    answer = num1 + (num1 * (num2 / 100));
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  function subtractPercent() {
    answer = num1 - (num1 * (num2 / 100));
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  function multiplyPercent() {
    answer = num1 * (num2 / 100);
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  function dividePercent() {
    answer = num1 / (num2 / 100);
    answer = Math.floor(answer * 10000000000) / 10000000000;
  }
  function handleInput(input) {
    // If the current display value is already a zero and the next input is also a zero, ignore the input.
    if (displayEl.innerHTML === "0" && input === "0") {
      return;
    }
  
    // Otherwise, update the display with the input value.
    displayEl.innerHTML = input;
  }
  
  function calc_process(ope) {
 
    if (displayEl.innerHTML === "") {
      num1 = 0; 
    } else 
    if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
      displayEl.innerHTML = displayEl.innerHTML.slice(0, -3);
      num1 = parseFloat(displayEl.innerHTML);
    } else 
    if (displayEl.innerHTML.match(/[^0-9.]/g)) {
      operate();
      num1 = parseFloat(answer);
    } else { 

      num1 = parseFloat(displayEl.innerHTML);

    }

    operator = ope; 
    clearAfterEqual = false;
    if (operator != "=") {
      displayEl.innerHTML = num1 + " " + operator + " "; 
      equation_firstPrt = displayEl.innerHTML; 
    }
  }
  for (var i = 4; i <= keysCount; i += 1) {
    if (i === 7 || i === 11 || i === 15 || i >= 17) {
    } else {
      keysEls[i].addEventListener("click", function() {
        if (clearAfterEqual === false) {
       if(displayEl.innerHTML=="0" && this.innerHTML=="0"){
        displayEl.innerHTML = "0";
       } else {
          displayEl.innerHTML += this.innerHTML;
        };
          percent_on = false;
          if (displayEl.innerHTML.indexOf("0") === -1) {
         
       
          }
        } else {
          displayEl.innerHTML = this.innerHTML;
          clearAfterEqual = false;
          percent_on = false;
        }
      });
    }
  }
  
  keysEls[17].addEventListener("click", function() {
    if (displayEl.innerHTML.slice(-1) !== ".") {
      if (clearAfterEqual === false) {
        if (displayEl.innerHTML === "") {
          displayEl.innerHTML = "0.";
        } else 
        if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
          displayEl.innerHTML = displayEl.innerHTML + "0.";

        } else 
        if (displayEl.innerHTML.match(/[^0-9.]/g)) {
          equation_allPrt = displayEl.innerHTML;
          num2_str = displayEl.innerHTML.substring(equation_firstPrt.length, equation_allPrt.length);
          if (num2_str.indexOf(".") === -1) {
            displayEl.innerHTML = displayEl.innerHTML + ".";
          }
        } else { 
          if (displayEl.innerHTML.indexOf(".") === -1) {

            displayEl.innerHTML = displayEl.innerHTML + ".";
          }
        }
      } else {
        displayEl.innerHTML = "0.";
        clearAfterEqual = false;
      }
    }
  });
  keysEls[0].addEventListener("click", function() {
    displayEl.innerHTML = "";
    num1 = 0;
    num2 = 0;
  });
  keysEls[15].addEventListener("click", function() {
    calc_process("+");
    percent_on = false;
  });
  keysEls[11].addEventListener("click", function() {
    calc_process("-");
    percent_on = false;
  });
  keysEls[7].addEventListener("click", function() {
    calc_process("×");
    percent_on = false;
  });
  keysEls[3].addEventListener("click", function() {
    calc_process("÷");
    percent_on = false;
  });
  keysEls[2].addEventListener("click", function() {
    percent_on = true;
  });
  keysEls[19].addEventListener("click", function() {
    calc_process("=");
    displayEl.innerHTML = num1; 
    clearAfterEqual = true;
    percent_on = false;

  });
  function clear_entry() {
    if (displayEl.innerHTML === "") {
      num1 = 0; 
    } else 
    if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
    } else 
    if (displayEl.innerHTML.match(/[^0-9.]/g)) {
      displayEl.innerHTML = equation_firstPrt; 
    } else { 
      displayEl.innerHTML = "";
      num1 = 0;
    }
  }

  function back_space() {
    if (displayEl.innerHTML === "") {
      num1 = 0; 
    } else 
    if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
      displayEl.innerHTML = displayEl.innerHTML.slice(0, -3);
      num1 = parseFloat(displayEl.innerHTML);
    } else 
    {

      displayEl.innerHTML = displayEl.innerHTML.slice(0, -1);

    }
  }
  keysEls[1].addEventListener("click", function() {
    clear_entry();
    percent_on = false;
  });
  keysEls[18].addEventListener("click", function() {
    back_space();
    percent_on = false;
  });