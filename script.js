const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1f0fc39d5mshe187762bad1b92dp1cc5c7jsncd73594b6603',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    
    cloud_pct = result.cloud_pct
    temp = result.temp
    feels_like = result.feels_like
    humidity = result.humidity
    min_temp = result.min_temp
    max_temp = result.max_temp
    wind_speed09 = result.wind_speed09
    wind_degrees = result.wind_degrees
    sunrise = result.sunrise
    sunset = result.sunset
    
	console.log(result);
} catch (error) {
	console.error(error);
}