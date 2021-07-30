# Ayahmarmut server


### Description

This is a simple web app devoted to all guinea pig lovers.



### GET /getmarmut

> Get all list of registered guinea pigs.

_Request Header_
```
  not needed
```

_Request Body_
```
  not needed
```

_Response (200)_
```
[
  {
    "id": 1,
    "name": "Chess",
    "gender": "Sow (Female)",
    "imgURL": "https://ik.imagekit.io/waknkqe0dx5v/Screen_Shot_2021-07-27_at_5.43.21_PM_uplylFecN-.png?updatedAt=1627382645187",
    "age": 2,
    "submittedBy": "Garry",
    "description": "Chess was our first guinea pig! She is a very naughty guinea pig but she is very cute, she likes eating grass so much.",
    "createdAt": "2021-07-28T19:50:28.698Z",
    "updatedAt": "2021-07-28T19:50:28.698Z"
  },
  {
    "id": 2,
    "name": "Key",
    "gender": "Sow (Female)",
    "imgURL": "https://ik.imagekit.io/waknkqe0dx5v/Screen_Shot_2021-07-27_at_5.43.01_PM_6ifHDKIBL.png?updatedAt=1627382644876",
    "age": 2,
    "submittedBy": "Garry",
    "description": "Key was the second guinea pig that we adopted, she is more of a stronger woman compared to chess, she really hates to be touched, but we love her nonetheless!",
    "createdAt": "2021-07-28T19:50:28.698Z",
    "updatedAt": "2021-07-28T19:50:28.698Z"
  }
]
```
_Response (500 - Internal server error)_
```
  Internal server error
```
### POST /register
> Register an account.

_Request Header_
```
  not needed
```

_Request Body_
```
  username: strings,
  email: strings,
  password: strings
```

_response(201)_
```
{
  "email": "marmut@Mail.com",
  "username": "tanakaa"
}
```
_response(500)_
```
"Internal Server Error"
```

### POST /login
> Login to existing account.

_Request Header_
```
  not needed
```

_Request Body_
```
  email: strings,
  password: strings
```

_response(201)_
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2Mjc1OTg5MjUsImV4cCI6MTYyNzYwMjUyNX0.gjmzSjfTcOgjKq-pu2VUKgEWTdTbTImQeD7OFxf0K_4",
  "username": "admin"
}
```

_response(401)_
```
{
  "message": "Invalid info"
}
```

### POST /addmarmut

_Request Header_
```
  not needed
```

_Request Body_
```
  name: strings,
  gender: strings,
  imgURL: file,
  age: integer,
  submittedBy: strings,
  description: strings
```
_response(201)_
```
[
	{
		Little Timmy has been added to the community! Welcome!
	}
]
```
_response(500)_
```
"Internal Server Error"
```