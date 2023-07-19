const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e1f0fc39d5mshe187762bad1b92dp1cc5c7jsncd73594b6603',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
    .then(response => response.json())
    .then(response => {console.log(response)
    cityname.innerHTML = city + " ";
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed09.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset  
    })
    
    .catch(err => console.error(err))

}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi");