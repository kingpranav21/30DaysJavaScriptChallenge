// const sidebarBtn = document.querySelector('sidebar-btn');
// sidebarBtn.addEventListener('click', () => {
//     sidebar.classList.toggle('open');
// })
import 'dotenv/config'
const apiKey = process.env.URI;
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=apiKey";
  
const searchBar = document.querySelector('#search-bar');
  const fetchData = async (city) => {
      const response = await fetch(apiUrl + `&q=${city}`);
      let data = await response.json();
      const description = data.weather[0].description;
      const rise = new Date(data.sys.sunrise * 1000); 
      const set = new Date(data.sys.sunset * 1000); 
      document.querySelector(".sunrise").innerHTML = rise.toLocaleTimeString();
      document.querySelector(".sunset").innerHTML = set.toLocaleTimeString();
      document.querySelector(".gust").innerHTML = data.wind.gust;
      document.querySelector(".humidity").innerHTML = data.main.humidity;
      document.querySelector(".feels").innerHTML = data.main.feels_like;
      document.querySelector(".pressure").innerHTML = data.main.pressure;
      document.querySelector('.city-name').innerHTML = data.name;
      document.querySelector(".visible").innerHTML = `${data.visibility/1000} Km`;
      document.querySelector(
        ".temp"
      ).innerHTML = `${Math.floor(data.main.temp)}°C`;
      document.querySelector(".conditions").innerHTML = `${
        description.charAt(0).toUpperCase() + description.slice(1)
      }`;
      document.querySelector(".high-to-low").innerHTML = `H: ${Math.floor(
        data.main.temp_max
      )}°C L: ${Math.floor(data.main.temp_min)}°C`;
      document.querySelector("#pId").innerHTML = `${
        description.charAt(0).toUpperCase() + description.slice(1)
          } Conditions will continue.`;
      document.querySelector(".windy").innerHTML = `${data.wind.speed} Km/h`;
  };

searchBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const city = searchBar.value;
        if (city) {
            fetchData(city);
        }
    }
});

