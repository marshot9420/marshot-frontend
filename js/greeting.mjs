import { HIDDEN_CLASSNAME } from "./login.mjs";

const greeting = document.querySelector("#greeting");

export function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
