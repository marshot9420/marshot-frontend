const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
}

loginForm.addEventListener("submit", onLoginSubmit);
