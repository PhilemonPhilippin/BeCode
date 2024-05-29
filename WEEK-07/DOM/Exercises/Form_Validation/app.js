const submit = document.querySelector(".btn-submit");
const reset = document.querySelector(".btn-reset");
submit.addEventListener("click", (e) => onSubmit(e));
reset.addEventListener("click", (e) => onReset(e));
// regex email:
// (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

function onSubmit(e) {
  e.preventDefault();

  // inputs
  const inputs = document.querySelectorAll("input");
  let userName = inputs[0];
  let email = inputs[1];
  let pswd = inputs[2];
  let confirmpswd = inputs[3];

  // inputs values
  const inputsValues = Array.from(inputs).map((x) => x.value);
  const userNameValue = inputsValues[0];
  const emailValue = inputsValues[1];
  const pswdValue = inputsValues[2];
  const confirmpswdValue = inputsValues[3];

  // validation messages
  const validationMessages = document.querySelectorAll(".msg");
  let userNameMessage = validationMessages[0];
  let emailMessage = validationMessages[1];
  let passwordMessage = validationMessages[2];
  let confirmpasswordMessage = validationMessages[3];
  validationMessages.forEach((x) => x.classList.add("red"));

  let valid = true;

  userName.classList.add("green");
  if (userNameValue !== userNameValue.toLowerCase()) {
    userNameMessage.innerText += "Name must be in lower case.";
    userName.classList.remove("green");
    userName.classList.add("red");
    valid = false;
  }

  if (userNameValue.length < 5 || userNameValue.length > 10) {
    userNameMessage.innerText += `${
      userNameMessage.innerText === "" ? "" : "\n"
    }Name must be between 5 and 10 characters.`;
    userName.classList.remove("green");
    userName.classList.add("red");
    valid = false;
  }

  if (valid) {
  }
  inputs.forEach((x) => console.log(x.value));
}

function onReset(e) {
  document.querySelector("form").reset();
}
