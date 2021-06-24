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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f89e161a878685dcfa708dfbc08a670e`)
        .then(response => response.json())
        .then(data => {
            if (data.name){
                document.querySelector('.w-placeholder').style.visibility = 'visible';
                document.querySelector('.w-placeholder').style.display = 'flex';
                document.querySelector('.error-placeholder').style.visibility = 'hidden';
            document.querySelector('.city').innerText = data.name;
            document.querySelector('.weather-img').style.backgroundImage = `url(http://openweathermap.org/img/w/${data.weather[0].icon}.png)`;
            document.querySelector('.weather-desk').innerText = `Weather: ${data.weather[0].description}`;
            document.querySelector('.temp').innerText = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
            document.querySelector('.wind').innerText = `Wind speed: ${data.wind.speed} m/s`;
            document.querySelector('.humidity').innerText = `Humidity: ${data.main.humidity}%`;
            }else {
                document.querySelector('.error-placeholder').style.visibility = 'visible';
                document.querySelector('.w-placeholder').style.display = 'none';
                document.querySelector('.err').innerText = `${data.message}`;
            }
        })
        .catch(err => alert(err.message));
        let month;
        if (date.getMonth()+1<10){
            month = `0${date.getMonth()+1}`;
        }else {
            month = `${date.getMonth()+1}`;
        }
        document.querySelector('.time').innerText = `${date.getDate()}.${month} ${date.getHours()}:${date.getMinutes()}`;
}

showBtn.addEventListener('click', () => showWeather(input.value));

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13){
        showWeather(input.value);
    }
})