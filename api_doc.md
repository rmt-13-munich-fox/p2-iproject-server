# WibChat
My WibChat is an application to Chat with your wibu friends and listen to the song via spotify. This app has : 
* REST endpoint for asset's Create and Delete operation
* Main Fiture to chat with many people

&nbsp;

## RESTful endpoints
- `POST/login`
- `DELETE/logout`

### POST /login

> login and create specific user

_Request Body_
```
{
    "username": "Bambang",
}
```

_Response (200)_
```
{
    "username": "Bambang",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTYyNzQ4NTcyM30.trdFQqUzpobig5IFWJq8tZxW2Jkwi2TlB9kooQODeoQ"
}
```

_Response (400 - User Cannot Be Empty)_
```
{
  "message": "Please insert your username correctly"
}
```
{
  "message": "Internal Services Error"
}
```
---


### GET /user

> Get all users loged in
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
        "username": "Maya",
        "createdAt": "2021-07-28T18:11:02.200Z",
        "updatedAt": "2021-07-28T18:11:02.200Z"
    },
    {
        "id": 2,
        "username": "Pentri",
        "createdAt": "2021-07-28T18:11:04.790Z",
        "updatedAt": "2021-07-28T18:11:04.790Z"
    }
]
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Services Error"
}
```
---
### POST /post

> Create new chatHistory

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "chat": "Halo budi",
}
```

_Response (201 - Created)_
```
{
    "id": 1,
    "UserId": 1,
    "chat": "Halo Budii",
    "updatedAt": "2021-07-28T21:28:04.668Z",
    "createdAt": "2021-07-28T21:28:04.668Z"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Services Error"
}
```
---

### GET /chat

> Get chat from specific user

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
no need

```

_Response (200)_
```
[
    {
        "username": "Budi",
        "message": "Halo Budii"
    },
    {
        "username": "Budi",
        "message": ""
    },
    {
        "username": "Budi",
        "message": "aoooo"
    }
]
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Services Error"
}
```
---

### DELETE /logout

> DELETE and logout specific user

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Response (200)_
```
{
   "msg": `<username from token> leave the chat`
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Services Error"
}
```
---

