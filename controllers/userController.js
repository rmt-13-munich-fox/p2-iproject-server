const { User } = require("../models");
const { generateToken } = require("../helpers/jwt");
const { syncPassword } = require("../helpers/bcrypt");
const { OAuth2Client } = require("google-auth-library");

class UserController {
  static userRegister(req, res, next) {
    const { name, email, password, dateOfBirth, imgURL, phoneNumber } = req.body;
    const newUser = {
      name,
      email,
      password,
      dateOfBirth,
      imgURL,
      phoneNumber,
    };
    User.create(newUser)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        next(err);
      });
  }
  static userLogin(req, res, next) {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then((data) => {
        if (data) {
          console.log(data.password);
          console.log(password);
          const correctPswd = syncPassword(password, data.password);
          console.log(correctPswd);
          if (correctPswd) {
            const token = generateToken(data);
            res.status(200).json({ token, email: data.email, role: data.role });
          } else {
            next({
              name: "InvalidLogin",
              message: "Invalid email or password",
            });
          }
        } else {
          next({
            name: "InvalidLogin",
            message: "Invalid email or password",
          });
        }
      })
      .catch((err) => {
        next({
          message: "Internal server error",
          err,
        });
      });
  }

  static glogin(req, res, next) {
    const { id_token } = req.body;
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    let payload;
    client
      .verifyIdToken({
        idToken: id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .then((ticket) => {
        payload = ticket.getPayload();
        return User.findOne({
          where: {
            email: payload.email,
          },
        });
      })
      .then((data) => {
        if (!data) {
          return User.create({
            username: payload.name,
            email: payload.email,
            password: process.env.GOOGLE_PASSWORD + Math.round(+new Date() / 1000),
            phoneNumber: "098217547",
            address: "Indonesia",
            role: "staff",
          });
        } else {
          return data;
        }
      })
      .then((result) => {
        const token = generateToken(result);
        res.status(200).json({ token, email: result.email, role: result.role });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
