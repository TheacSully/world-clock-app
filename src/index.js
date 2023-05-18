function updateTime() {
  //Manchester
  let manchesterElement = document.querySelector("#manchester");
  if (manchesterElement) {
    let manchesterDateElement = manchesterElement.querySelector(".date");
    let manchesterTimeElement = manchesterElement.querySelector(".time");
    let manchesterTime = moment().tz("Europe/London");

    manchesterDateElement.innerHTML = manchesterTime.format("MMMM Do YYYY");
    manchesterTimeElement.innerHTML = manchesterTime.format(
      "HH:mm:ss[<small>]A[</small>]"
    );
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "HH:mm:ss[<small>]A[</small>]"
    );
  }
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTime = moment().tz("Canada/Eastern");

    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format(
      "HH:mm:ss[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let mainCityElement = document.querySelector("#main-city");
  mainCityElement.innerHTML = `
  <div class="city">
  <div> 
         <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
            <div class="time">${cityTime.format(
              "H:mm:ss"
            )}<small>${cityTime.format("A")}</small>
            </div>
      </div>
      <a href="/">All cities</a>
  `;
  setTimeout(() => {
    updateCity(event);
  }, 1000);
}

setInterval(updateCity, 1000);

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
