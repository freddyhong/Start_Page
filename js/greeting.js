const LoginForm = document.querySelector("#main_blur");
const LoginMain = document.querySelector("#login_page");
const LoginInput = document.querySelector(".Login input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const BLUR_CLASS = "blur";
const USERNAME_KEY = "username";

function onLoginSubmit(info) {
  info.preventDefault(); //form 제출했을때 자동으로 refresh 되는걸 방지
  //info를 log하면 기본 내장 정보들을 output
  LoginForm.classList.add(HIDDEN_CLASS);
  const username = LoginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}
function paintGreeting(username) {
  greeting.innerText = greeting.innerText + " " + username;
  LoginForm.classList.remove(BLUR_CLASS);
  LoginMain.classList.add(HIDDEN_CLASS);
  document.querySelector("#main").classList.remove(HIDDEN_CLASS);
  /*
  if (document.querySelector("img").classList.contains(HIDDEN_CLASS)) {
    document.querySelector("img").classList.remove(HIDDEN_CLASS);
  }
  */
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  LoginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
