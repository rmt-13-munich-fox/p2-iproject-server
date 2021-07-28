const weather = require("../helpers/weather.js");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { google } = require("googleapis");
const { OAuth2Client } = require("google-auth-library");
const calendar = google.calendar("v3");
const { admin } = require("../helpers/firebaseconfig.js");

class MainController {
	static async getWeather(req, res, next) {
		try {
			let weatherData = await weather({
				method: "GET",
			});
			weatherData.data.current.dt = new Date(
				weatherData.data.current.dt * 1000
			).getHours();
			weatherData.data.hourly.forEach((time) => {
				time.dt = new Date(time.dt * 1000).getHours();
			});
			console.log(weatherData.data.daily.length);
			res.status(200).json(weatherData.data);
		} catch (err) {
			res.status(400).json(err);
			console.log(err.toJSON);
		}
	}

	static async loginGoogle(req, res, next) {
		const { id_token, access_token } = req.body;
		const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
		try {
			let ticket = await client.verifyIdToken({
				idToken: id_token,
				audience: process.env.GOOGLE_CLIENT_ID,
			});
			let payload = ticket.getPayload();
			console.log(payload);
			let userData = await User.findOne({
				where: {
					email: payload.email,
				},
			});
			if (!userData) {
				let newUser = await User.create({
					email: payload.email,
					id_token,
					access_token,
				});
				let token = jwt.sign(
					{
						id: newUser.id,
						email: newUser.email,
					},
					process.env.SECRET_KEY
				);
				res.status(200).json({ access_token: token });
			} else {
				let updateUser = await User.update(
					{
						id_token,
						access_token,
					},
					{
						where: {
							email: payload.email,
						},
						returning: true,
					}
				);
				let token = jwt.sign(
					{
						id: updateUser[1][0].dataValues.id,
						email: updateUser[1][0].dataValues.email,
					},
					process.env.SECRET_KEY
				);
				res.status(200).json({ access_token: token });
			}
		} catch (err) {
			next({ code: `500` });
		}
	}

	static async getUpcomingEvents(req, res, next) {
		let userEmail = req.user.email;
		try {
			let userData = await User.findOne({
				where: {
					email: userEmail,
				},
			});
			let access_token = userData.access_token;
			let id_token = userData.id_token;
			const oauth2client = new OAuth2Client(
				process.env.GOOGLE_CLIENT_ID,
				process.env.GOOGLE_CLIENT_SECRET
			);
			oauth2client.setCredentials({
				access_token,
				id_token,
			});
			const upcomingEvents = await calendar.calendarList.list({
				auth: oauth2client,
			});
			res.status(200).json(upcomingEvents.data);
		} catch (err) {
			console.log(err);
		}
	}

	static async fcmNotification(req, res, next) {
		const notification_options = {
			priority: "high",
			timeToLive: 60 * 60 * 24,
		};
		let { registrationToken } = req.body;
		const options = notification_options;
		let message = {
			notification: {
				title: "test",
				body: "bisa masuk",
			},
		};
		admin
			.messaging()
			.sendToDevice(registrationToken, message, options)
			.then((response) => {
				res.status(200).send("Notification sent successfully");
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

module.exports = MainController;
