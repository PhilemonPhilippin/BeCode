// inputs
const inputs = document.querySelectorAll("input");
let userName = inputs[0];
let email = inputs[1];
let password = inputs[2];
let confirmPassword = inputs[3];

// validation messages
const validationMessages = document.querySelectorAll(".msg");
let userNameMessage = validationMessages[0];
let emailMessage = validationMessages[1];
let passwordMessage = validationMessages[2];
let confirmPasswordMessage = validationMessages[3];

const submit = document.querySelector(".btn-submit");
const reset = document.querySelector(".btn-reset");
submit.addEventListener("click", (e) => onSubmit(e));
reset.addEventListener("click", onReset);

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function onSubmit(e) {
  e.preventDefault();
  resetMessages();

  // inputs values
  const inputsValues = Array.from(inputs).map((x) => x.value);
  const userNameValue = inputsValues[0];
  const emailValue = inputsValues[1];
  const passwordValue = inputsValues[2];
  const confirmPasswordValue = inputsValues[3];

  const userNameValid = validateUserName(userNameValue);

  if (userNameValid) {
    setGreen(userName);
    userNameMessage.innerText = "Success!";
    setGreen(userNameMessage);
  }

  const emailValid = validateEmail(emailValue);

  if (emailValid) {
    setGreen(email);
    emailMessage.innerText = "Success!";
    setGreen(emailMessage);
  }

  const passwordValid = validatePassword(passwordValue);

  if (passwordValid) {
    setGreen(password);
    passwordMessage.innerText = "Success!";
    setGreen(passwordMessage);
  }

  const confirmPasswordValid = validateConfirmPassword(
    confirmPasswordValue,
    passwordValue
  );

  if (confirmPasswordValid) {
    setGreen(confirmPassword);
    confirmPasswordMessage.innerText = "Success!";
    setGreen(confirmPasswordMessage);
  }

  // If all valid
  if (userNameValid && emailValid && passwordValid && confirmPasswordValid) {
    inputs.forEach((x) => console.log(x.value));
  }
}

function validateUserName(userNameValue) {
  let userNameValid = true;

  if (userNameValue !== userNameValue.toLowerCase()) {
    userNameMessage.innerText += "Name must be in lower case.";
    setRed(userNameMessage);
    setRed(userName);
    userNameValid = false;
  }

  if (userNameValue.length < 5 || userNameValue.length > 10) {
    userNameMessage.innerText += `${
      userNameMessage.innerText === "" ? "" : "\n"
    }Name must be between 5 and 10 characters.`;
    setRed(userNameMessage);
    setRed(userName);
    userNameValid = false;
  }

  return userNameValid;
}

function validateEmail(emailValue) {
  let emailValid = true;

  const regexMatch = emailValue.match(regex);
  if (regexMatch == null || regexMatch[0] !== emailValue) {
    emailMessage.innerText = "Email address is not valid.";
    setRed(emailMessage);
    setRed(email);
    emailValid = false;
  }

  return emailValid;
}

function validatePassword(passwordValue) {
  let passwordValid = true;
  if (passwordValue.length < 8 || passwordValue.lngth > 15) {
    passwordMessage.innerText = "Password must be between 8 and 15 characters.";
    setRed(passwordMessage);
    setRed(password);
    passwordValid = false;
  }

  return passwordValid;
}

function validateConfirmPassword(confirmPasswordValue, passwordValue) {
  let confirmPasswordValid = true;
  if (confirmPasswordValue !== passwordValue) {
    confirmPasswordMessage.innerText = "Password is not the same";
    setRed(confirmPasswordMessage);
    setRed(confirmPassword);
    confirmPasswordValid = false;
  }

  return confirmPasswordValid;
}

function onReset() {
  document.querySelector("form").reset();
}

function resetMessages() {
  validationMessages.forEach((x) => {
    x.innerText = "";
    x.classList.remove("red");
    x.classList.remove("green");
  });
}

function setGreen(elem) {
  elem.classList.remove("red");
  elem.classList.add("green");
}

function setRed(elem) {
  elem.classList.remove("green");
  elem.classList.add("red");
}
