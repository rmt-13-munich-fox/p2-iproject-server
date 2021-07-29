## Ayah Marmut

### Description

This is a simple web app devoted for all guinea pig lovers.

### Dependency NPM Package

- `express`               for handling your routes
- `axios`			      for connecting client, server, and 3rd party apis
- `sequelize`             ORM for storing users in the database
- `pg`                    Non-blocking PostgreSQL client for Node.js
- `bcrypt`                for encrypting your passwords before you store them in your database. It’s a necessity to never store passwords in plain text for obvious security reasons.
- `cors`                 for giving connections to
- `form-data`			 to make adding image through multer and imagekit possible.
- `multer`				  tools for uploading pictre.
- `nodemailer`			  api for automatically sending email.
- `socket.io`			  for making chatbox
- `jsonwebtoken`          An implementation of JSON Web Tokens.

Routes:

```
GET    /getmarmut                        """Fetch database"""
POST   /register     				     """Register POST handle"""
POST   /login                            """Login POST handle"""
POST   /addmarmut                        """Logout handle"""
```

### Instalation

**1. Clone the source code**

```
$ git clone https://github.com/garryfishy/p2-iproject-server.git
```

**2. Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Project dependencies listed in `package.json`.

```
$ npm install
```

**3. Run the server**

Run server with:

```
$ nodemon app.js

&nbsp;

Server listening in port 3000 (open http://localhost:3000)
Make sure you use API testing tool like Postman or Insomnia.
That's all. Thank you.

&nbsp;

Sincerely,

Garry Agassi