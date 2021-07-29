const errorHandler = (err, req, res, next) => {
	let msg;
	let code = err.code;
	switch (code) {
		case `400`:
			msg = err.msg || "Bad request";
			res.status(400).json({ msg });
			break;
		case `401`:
			msg = err.msg || Unauthorized;
			res.status(401).json({ msg });
			break;
		case `500`:
			msg = "Internal Server Error";
			res.status(500).json({ msg });
			break;
	}
};

module.exports = errorHandler;
