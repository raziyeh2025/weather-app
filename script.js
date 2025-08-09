const input_city = document.getElementById("inp-city");
const form = document.getElementById("Weather-form");
const div_result = document.getElementById("div-result");
const p_temp = document.getElementById("p-temp");
const apiKey = "0ec8b8c0723cfc2806140ee515e19fdb";

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const city = input_city.value.trim();
  if (city === "") {
    div_result.innerHTML = "Enter a city";
    div_result.style.color = "red";
    div_result.style.fontSize = "20px";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("city not found");
    }

    const data = await response.json();
    const weather = data.weather[0].description;
    const temp = Math.ceil(data.main.temp);
    const wind = data.wind.speed;
    const country = data.sys.country;
    div_result.innerHTML = `<div ><span class="title">temperature: </span ><span class=response>${temp}</span></div>
            <div ><span class="title">weather: </span><span class=response>${weather}</span></div>
            <div ><span class="title">wind: </span><span class=response>${wind}</span></div>
            <div ><span class="title">country: </span><span class=response>${country}</span></div>`;
  } catch (error) {
    div_result.innerHTML = "City not found";
    div_result.style.color = "red";
    div_result.style.fontSize = "20px";
  }
});
