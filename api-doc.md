## auth 
### POST /register

> Create new user (admin)

_Request Header_
```
not needed
```

_Request Body_
```
{
    "username" : "<username>",
    "email":"<email>",
    "password":"<password>"
}
```

_Response (201 - Created)_
```
{
    "id": <id>,
    "email": "<email>"
}
```

_Response (500 - Internal server error)_
```
{
  'message': 'Internal server error'
}
```

_Response (400 - Error in create)_
```
{
  "message": [<validation error>]
}
```
----------

### POST /login

> sign in to app

_Request Header_
```
not needed
```

_Request Body_
```
{
    "email":"<email>",
    "password":"<password>"
}
```

_Response (201)_
```
{
    "accessToken": "<access_token>"
}
```

_Response (500 - Internal server error)_
```
{
  'message': 'Internal server error'
}
```

_Response (400 - Error in create)_
```
{
  "message": [<validation error>]
}
```
----------