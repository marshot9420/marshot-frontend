import { HIDDEN_CLASSNAME } from "./login.mjs";

const greeting = document.querySelector("#greeting");

export function paintGreetings(username) {
  const date = new Date();
  const hour = date.getHours();
  let greetingMessage = "";

  if (hour >= 6 && hour < 12) {
    greetingMessage = `Good Morning, ${username}!`;
  } else if (hour >= 12 && hour < 18) {
    greetingMessage = `Good Afternoon, ${username}!`;
  } else if (hour >= 18 && hour < 22) {
    greetingMessage = `Good Evening, ${username}!`;
  } else {
    greetingMessage = `Good Night, ${username}!`;
  }

  greeting.innerText = greetingMessage;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
