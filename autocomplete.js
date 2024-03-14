const apiKey = "9c6ad485cfd6a8bd17e7b12d8e0b6728";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(" .details").style.display = "none";
    }
    else{
        
    console.log(response);
    var data = await response.json();
    console.log(data);
    cityName.innerText = data.name;
    temperature.innerText = Math.round(data.main.temp) +"°C";
    humidity.innerText = data.main.humidity+"%";
    wind.innerText = data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(" .details").style.display = "flex";

    document.querySelector(".error").style.display ="none";
  }
}




const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");


const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

searchBox.addEventListener("keypress", function(e){
    if(e.key ==='Enter'){
        e.preventDefault();
        checkWeather(searchBox.value);
    }
});

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});