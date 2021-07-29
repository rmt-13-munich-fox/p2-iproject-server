const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
	try {
		let { access_token } = req.headers;
		if (!access_token) {
			throw { code: `403`, msg: `Unauthorized` };
		}
		let verification = jwt.verify(access_token, process.env.SECRET_KEY);
		if (!verification) {
			throw { code: `403`, msg: `Unauthorized` };
		}
		console.log(verification);
		req.user = { email: verification.email };
		next();
	} catch (err) {
		next({ code: `401`, msg: "Unauthorized to retrieve data" });
	}
};

module.exports = { authentication };
