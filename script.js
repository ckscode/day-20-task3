//selecting all the HTML elements with DOM
const InputItem = document.querySelector(".location");
const Btn = document.querySelector(".click");
const deg = document.querySelector(".deg");
const sky = document.querySelector(".sky");

//function to fetch data and set it to the selected HTML elements
const FetchData = () => {
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${InputItem.value}&appid=7045ff42f23d49e7601563eb17b37bfd&units=metric`;
  fetch(Url)
    .then((e) => e.json())
    .then((item) => {
      //setting to HTML elements
      deg.innerHTML = `${Math.round(
        item.main.temp
      )}<span class="fw-light">°C</span>`;
      sky.innerHTML = `${item.weather[0].main}`;
    })
    .catch((err) => {console.log(err)
        sky.innerHTML = "give a proper input"});
};

//search button click and press enter to call the FetchData function
Btn.addEventListener("click", () => FetchData());
InputItem.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    FetchData();
  }
});
