const unlockPhone = () => {
  const savedPassword = "3698";
  const passLenght = 4;
  const maxAttempts = 3;

  const hbutton = document.querySelector(".homebutton");
  const screen = document.querySelector(".screen");

  let closed = true;
  let currPassword = "";
  let currAttempt = 1;

  const showScreen = () => {
    hbutton.addEventListener("click", () => {
      screen.style.opacity = 1;
      closed = false;
    });
  };

  const sideLock = () => {
    const sideLock = document.querySelector(".hitBox");

    sideLock.addEventListener("click", () => {
      if (closed) {
        screen.style.opacity = 1;
        closed = false;
      } else {
        screen.style.opacity = 0;
        closed = true;
      }
    });
  };

  const processTouch = () => {
    const options = document.querySelectorAll(".button");
    options.forEach((option) => {
      option.addEventListener("click", function () {
        currPassword += this.textContent;
        console.log(currPassword);
        checkPassword(currPassword, savedPassword);
      });
    });
  };

  const checkPassword = (userPassword, presetPassword) => {
    const passField = document.querySelector(".password");
    //check if passwords are equal
    if (userPassword === presetPassword) {
      passField.textContent = "Your phone is unlocked";
      currAttempt = 1;
      return;
    } else if (passField.textContent.length >= passLenght - 1){
      passField.textContent = "";
      currPassword = "";

      if(currAttempt >= maxAttempts) {
        currAttempt = 1;
        alert("Phone is blocked for 1 minute");
      } else {
        currAttempt++;
      alert("wrong password, try again!");
      };
      return;
    }    
    else {
      passField.textContent += "*";
    }
  };

  showScreen();
  sideLock();
  processTouch();
};

unlockPhone();
