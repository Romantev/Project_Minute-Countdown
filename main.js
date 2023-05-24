//! Var
let outputNumb = document.querySelector("#time");
let inputVal = Number(document.querySelector("#minutes").value);
let countDown;
let secVal = 1;

//! Var for one click function
let startScope = false;
let continueScope = false;

//! Start Function
function startMinCountdown() {
  if (startScope == false) {
    inputVal = Number(document.querySelector("#minutes").value);

    //* setInterval Function for count down
    countDown = setInterval(() => {
      secVal--;
      if (secVal < 0) {
        secVal = 59;
        inputVal--;
      }
      let sec = secVal < 10 ? "0" + secVal : secVal;
      outputNumb.innerHTML = `${inputVal}:${sec}`;

      //* Stop Countdown
      if (inputVal === 0 && secVal == 0) {
        clearTimeout(countDown);
      }
      startScope = true;
    }, 1000);
  }
}

//! Pause Function
function pauseMinCountdown() {
  clearTimeout(countDown);
  continueScope = false;
}

//! Continue Function
function restartMinCountdown() {
  if (continueScope == false) {
    countDown = setInterval(() => {
      secVal--;
      if (secVal < 0) {
        secVal = 59;
        inputVal--;
      }
      let sec = secVal < 10 ? "0" + secVal : secVal;
      outputNumb.innerHTML = `${inputVal}:${sec}`;

      if (inputVal === 0 && secVal == 0) {
        clearTimeout(countDown);
      }
    }, 1000);
    continueScope = true;
  }
}

//! Reset Function
function resetMe() {
  outputNumb.innerHTML = "00:00";
  inputVal = 0;
  secVal = 1;
  clearTimeout(countDown);
  startScope = false;
  continueScope = false;
}
