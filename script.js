let input = document.querySelector('.w-input');
let showBtn = document.querySelector('.w-btn');
let weatherPlaceholder = document.querySelector('.w-placeholder');
let test = fetch('https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&appid=f89e161a878685dcfa708dfbc08a670e')
    .then(response => response.json())
    .then(data => console.log(data));


function showWeather(city){
    if (city===false){
        alert('Enter a city');
        return;
    }
    let date = new Date();
    let cityData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f89e161a878685dcfa708dfbc08a670e`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.city').innerText = data.name;
            document.querySelector('.weather-img').style.backgroundImage = `url(http://openweathermap.org/img/w/${data.weather[0].icon}.png)`;
            document.querySelector('.weather-desk').innerText = `Weather: ${data.weather[0].description}`;
            document.querySelector('.temp').innerText = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
            document.querySelector('.wind').innerText = `Wind speed: ${data.wind.speed} m/s`;
            document.querySelector('.humidity').innerText = `Humidity: ${data.main.humidity}%`;

        })
        .catch(err => alert(err.message));
        document.querySelector('.time').innerText = new Date().getHours();


}

showBtn.addEventListener('click', () => showWeather(input.value));

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13){
        showWeather(input.value);
    }
})