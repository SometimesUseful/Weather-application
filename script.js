let input = document.querySelector('.w-input');
let showBtn = document.querySelector('.w-btn');
let weatherPlaceholder = document.querySelector('.w-placeholder');

function showWeather(city){
    if (city===false){
        alert('Enter a city');
        return;
    }
    let cityData = {};
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f89e161a878685dcfa708dfbc08a670e`)
        .then(response => response.json())
        .then(data => console.log(data));
}

showBtn.addEventListener('click', showWeather(input.value));

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13){
        showWeather(input.value);
    }
})