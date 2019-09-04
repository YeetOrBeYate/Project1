//Getting the inputs
const VALUES = document.querySelectorAll("input");
const RESPONSES = document.querySelectorAll(".form span");
const PASSWORD = document.getElementById("password");
const REPASSWORD = document.getElementById("reEnterPassword");
const BUTTON = document.getElementById("button");
const MODAL = document.getElementById("modal");
const CLOSEBUTTON = document.querySelector(".closeButton");

//making the repsonsive text invisiable
for (let i = 0; i < RESPONSES.length; i++) {
  RESPONSES[i].style.display = "none";
}
//Looping backward from the inputted values position in the array to check the other values
function checkBefore(position) {
  for (var i = (position - 1); i >= 0; i--) {
    if (VALUES[i].value == "") {
      RESPONSES[i].style.display = "inline";
    }
  }
}
//Taking away warning resoponses when the value is typed
function notEmpty(position) {
  if (VALUES[position].value != "") {
    RESPONSES[position].style.display = "none";
  }
}

function passwordRules() {
  RESPONSES[3].style.display = "inline";
  let pass = PASSWORD.value;
  if (pass.length >= 8) {
    RESPONSES[3].style.display = "none";
  }
}

function checkPassword() {

  let pass = PASSWORD.value;
  let rePass = REPASSWORD.value;
  let amt = rePass.length;
  if (rePass == pass.substring(0, amt) || rePass == pass) {
    RESPONSES[4].style.display = "inline";
    RESPONSES[4].innerHTML = "&#10004";
  } else {
    RESPONSES[4].innerHTML = "Passwords do not match";
  }
}

function openModal() {

  let hasValue = false;
  let passwordCheck = false;
  //first checks if all values have a value in them
  if (VALUES[0].value != "" && VALUES[1].value != "" && VALUES[2].value != "" && VALUES[3].value != "" && VALUES[4].value != "") {
    hasValue = true;
  }
  if (PASSWORD.value == REPASSWORD.value) {
    passwordCheck = true;
  }

  if (hasValue && passwordCheck) {
    document.querySelector('.modal-content p').innerHTML = "Thank you so much for the exercise, everything looks correct!";
  } else {
    if (hasValue && !passwordCheck) {
      document.querySelector(".modal-content p").innerHTML = "Sorry the passwords do not match, please re-enter them";
    } else {
      document.querySelector(".modal-content p").innerHTML = "Sorry it seems some information is missing. Please close this and try again";
    }
  }

  console.log(hasValue);
  console.log("pass", PASSWORD);
  console.log("repass", REPASSWORD);

  MODAL.style.display = "block";
}

function closeModal() {
  MODAL.style.display = "none";
}

//Event listeners for checking null values
VALUES[1].addEventListener('input', function() {
  checkBefore(1)
}, false);
VALUES[2].addEventListener('input', function() {
  checkBefore(2)
}, false);
PASSWORD.addEventListener('input', function() {
  checkBefore(3)
}, false);
REPASSWORD.addEventListener('input', function() {
  checkBefore(4)
}, false);
VALUES[0].addEventListener('input', function() {
  notEmpty(0)
}, false);
VALUES[1].addEventListener('input', function() {
  notEmpty(1)
}, false);
VALUES[2].addEventListener('input', function() {
  notEmpty(2)
}, false);
PASSWORD.addEventListener('input', function() {
  notEmpty(3)
}, false);

//event listeners for password rules and such
PASSWORD.addEventListener("input", passwordRules, false);
REPASSWORD.addEventListener("input", checkPassword, false);

//event listeners for modal stuff
BUTTON.addEventListener("click", openModal, false);
CLOSEBUTTON.addEventListener("click", closeModal, false);
