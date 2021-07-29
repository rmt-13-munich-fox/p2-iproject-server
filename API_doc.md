# Kerja-In Server
Kerja-In is an application to make post-it cards in a web. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### POST /register

> Register for user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "firstName": "<first name to register>",
  "lastName": "<lastName to register>",
  "username": "<username to register>",
  "email": "<email to register>",
  "password": "<password to register>"
}
```

_Response (201 - Created)_
```
{
  "id": "<user registered id>"
  "username": "<user registered username>",
  "email": "<user registered email>"
}

```

_Response (400 - Bad Request)_
```
[
  "Email is required",
  "Email cannot be empty",
  "Should be in email format",
  "Password is required",
  "Password cannot be empty"
]
```
---
### POST /login

> User login

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to register>",
  "password": "<password to register>"
}
```

_Response (200 - OK)_
```
{
  "access_token": "<user access token>" 
}
```

_Response (401 - Unauthorized)_
```
{
  "message": "Invalid email/password"
}
```
---
### POST /tasks

> Create new task

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Body_
```
{
  "name": "<name to register>",
  "task": "<task to register>"
}
```

_Response (200 - OK)_
```
[
  {
    "id": "<task id>",
    "name": "<task name>",
    "task": "<task task>"
    "createdAt": "2021-06-29T06:28:05.391Z",
    "updatedAt": "2021-06-29T06:28:05.391Z"
  }
]
```
---
### DELETE /tasks/:id

> Delete task

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Param_
```
{
  "id": "<task id>" 
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "message": "Task deleted"
}
```
---
### POST /subtasks

> Create new subtask

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Body_
```
{
  "TaskId": "<TaskId to register>",
  "subtask": "<subtask to register>"
}
```

_Response (200 - OK)_
```
{
  "id": "<subtask id>",
  "TaskId": "<subtask TaskId>",
  "subtask": "<subtask subtask>"
  "createdAt": "2021-06-29T06:28:05.391Z",
  "updatedAt": "2021-06-29T06:28:05.391Z"
}
```
---
### DELETE /subtasks/:id

> Delete subtask

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Param_
```
{
  "id": "<subtask id>" 
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "message": "Subtask deleted"
}
```
---