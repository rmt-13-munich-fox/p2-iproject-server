# cms-integration-server
Recipe Mama Server
 
# My Recipe Mama App Server
My Recipe Mama App is an application to manage your Movies Data. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
- "GET /recipes"
- "GET /recipes/:word"
- "POST /recipes"
- "GET /favorites"
- "POST /favorites"
- "DELETE /favorites/:id"
- "POST /users/register"
- "POST /users/login"
- "POST /users/gLogin"

---
### GET /recipes

> Get all recipes

_Request Header_
```
{
  not needed
}
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
    "name": "<recipe name>",
    "description": "<recipe description>",
    "image": "<recipe image>",
    "ingredients": "<recipe ingredients>",
    "directions": "<recipe directions>",
    "cook_time": "<recipe cook_time>",
    "total_calories": "<recipe total_calories>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### GET /recipes/:word

> Get recipes by word

_Request Header_
```
{
  not needed
}
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
    "name": "<recipe name>",
    "description": "<recipe description>",
    "image": "<recipe image>",
    "ingredients": "<recipe ingredients>",
    "directions": "<recipe directions>",
    "cook_time": "<recipe cook_time>",
    "total_calories": "<recipe total_calories>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```
_Response (400 - Bad Request)_
```
{
  "message": "Bad Request"
}
```
_Response (404 - Data Not Found)_
```
{
  "message": "Data Not Found"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### POST /recipes

> Set new random recipes

_Request Header_
```
{
  not needed
}
```

_Request Body_
```
{
  not needed
}
```

_Response (201 - Created)_
```
{
  "id": 1,
  "name": "<recipe name>",
  "description": "<recipe description>",
  "image": "<recipe image>",
  "ingredients": "<recipe ingredients>",
  "directions": "<recipe directions>",
  "cook_time": "<recipe cook_time>",
  "total_calories": "<recipe total_calories>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Bad Request"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### GET /favorites

> Get all favorites

_Request Header_
```
{
  "access_token": "<your access token>"
}
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
    "userId": "<userId>",
    "recipeId": "<recipeId>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
### POST /movies

> Create new movies

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "userId": "<favorite userId to get insert into >",
  "recipeId": "<favorite recipeId to get insert into >"
}
```

_Response (201 - Created)_
```
{
  "id": <given id by the system>,
  "userId": "<posted favorite userId >",
  "favoriteId": "<posted favorite favoriteId >",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Bad Request"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### DELETE /favorite/:id

> Delete favorite by Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200-OK!)_
```
{
  "message": "favorite success to delete"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

  ### post users/register/

> register user
_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "email": "<user email to get insert into>",
  "name": "<user name to get insert into>",
  "password": "<user password to get insert into>",
}
```

_Response (201 - Created)_
```
{
  "id": <given id by the system>,
  "email": "<user email>",
}
```
_Response (400 - Bad Request)_
```
{
  "message": "validation required"
}
```

_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```

## POST users/login/
> login user
_Request Header_
```
{
  not needed
}
```
_Request Body_
```
{
  "email": "<user email to log in to>",
  "password": "<user password to log in to>",
}
```
_Response (200 - Ok!)_
```
{
  "accessToken": <accessToken>,
}
```

_Response (401 - Invalid credentials)_
```
{
  "message": "Invalid account"
}
```

_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```
