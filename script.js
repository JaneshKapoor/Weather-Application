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

const Bangalore = document.getElementById("Bangalore");

Delhi.addEventListener("click",(e) => {
    e.preventDefault();
    getWeather("Delhi");
})

Bangalore.addEventListener("click",(e) => {
    e.preventDefault();
    getWeather("Bangalore");
})

Mumbai.addEventListener("click",(e) => {
    e.preventDefault();
    getWeather("Mumbai");
})


getWeather("Delhi");

const tableupdate = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
    .then(response => response.json())
    .then(response => {console.log(response)
    // delhidata.innerHTML = city + " ";
    delhicloud.innerHTML = response.cloud_pct
    delhidata.innerHTML = response.temp
    delhifeelslike.innerHTML = response.feels_like
    delhihumidity.innerHTML = response.humidity
    delhimintemp.innerHTML = response.min_temp
    delhimaxtemp.innerHTML = response.max_temp
    delhiwindspeed.innerHTML = response.wind_speed
    delhiwinddegrees.innerHTML = response.wind_degrees
    delhisunrise.innerHTML = response.sunrise
    delhisunset.innerHTML = response.sunset  
    })
    
    .catch(err => console.error(err)) 
}

tableupdate("Delhi");
tableupdate("Bangalore");