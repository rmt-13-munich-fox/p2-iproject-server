const axios = require("axios");

const weather = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/onecall",
	params: {
		lat: "-6.145321",
		lon: "106.733167",
		exclude: "minutely",
		units: "metric",
		appid: "dab4b86ac2803b31d41334c5be8ef5bc",
	},
});

module.exports = weather;
