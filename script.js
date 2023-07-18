const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1f0fc39d5mshe187762bad1b92dp1cc5c7jsncd73594b6603',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}