function updateTime() {
  //Manchester
  let manchesterElement = document.querySelector("#manchester");
  let manchesterDateElement = manchesterElement.querySelector(".date");
  let manchesterTimeElement = manchesterElement.querySelector(".time");
  let manchesterTime = moment().tz("Europe/London");

  manchesterDateElement.innerHTML = manchesterTime.format("MMMM Do YYYY");
  manchesterTimeElement.innerHTML = manchesterTime.format(
    "HH:mm:ss[<small>]A[</small>]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss[<small>]A[</small>]");

  //Toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTime = moment().tz("Canada/Eastern");

  torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "HH:mm:ss[<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
