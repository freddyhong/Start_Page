const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDay()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText =
    date.getFullYear() +
    ". " +
    month +
    ". " +
    day +
    " \n" +
    hour +
    ":" +
    minute +
    ":" +
    second;
}

getClock();
setInterval(getClock, 1000);
