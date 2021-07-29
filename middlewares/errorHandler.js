function errorList(err) {
  const errors = err.errors;
  const errorMessages = errors.map((el) => el.message);
  return errorMessages;
}
const errorHandler = (err, req, res, next) => {
  let errorName = err.name;
  let messages;
  console.log(err);
  if (errorName.substring(0, 9) === "Sequelize") {
    messages = errorList(err);
  }
  switch (errorName) {
    case "SequelizeValidationError":
      res.status(400).json({ message: messages });
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: messages });
      break;
    case "SequelizeDatabaseError":
      res.status(500).json({ message: messages });
      break;
    case "InvalidLogin":
      res.status(400).json({ message: err.message });
      break;
    case "NotFound":
      res.status(404).json({ message: err.message });
      break;
    case "NotLogin":
      res.status(401).json({ message: err.message });
      break;
    case "NoImage":
      res.status(404).json({ message: err.message });
      break;
    case "NotAuthorized":
      res.status(403).json({ message: err.message });
      break;
    default:
      res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { errorHandler };
