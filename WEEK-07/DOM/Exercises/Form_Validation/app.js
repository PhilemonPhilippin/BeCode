// inputs
const inputs = document.querySelectorAll("input");
let userName = inputs[0];
let email = inputs[1];
let pswd = inputs[2];
let confirmpswd = inputs[3];

// validation messages
const validationMessages = document.querySelectorAll(".msg");
let userNameMessage = validationMessages[0];
let emailMessage = validationMessages[1];
let passwordMessage = validationMessages[2];
let confirmpasswordMessage = validationMessages[3];

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
  const pswdValue = inputsValues[2];
  const confirmpswdValue = inputsValues[3];

  let valid = true;

  valid = validateUserName(userNameValue);
  if (valid) {
    setGreen(userName);
    userNameMessage.innerText = "Success!";
    setGreen(userNameMessage);
  }

  // TODO: vérifier que la validation email fonctionne

  valid = validateEmail(emailValue);
  if (valid) {
    setGreen(email);
    emailMessage.innerText = "Success!";
    setGreen(emailMessage);
  }

  // Si all valid
  if (valid) {
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
    if (regexMatch == null || regexMatch !== emailValue) {
        setRed(emailMessage);
        setRed(email);
        emailValid = false;
    }

    return emailValid;
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
