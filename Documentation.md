## API Reference

### User Register

```http
  POST /register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** **Unique**. User Email |
| `password` | `string` | **Required**. User Password |

### Response
#### Status (201) Success

```JSON
{
    "id": 1,
    "email": "user@mail.com"
}
```

#### Status (400) Bad Request

```JSON
{
    "message": "Please input <Parameter>"
}
```

### User Login

```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** **Unique**. User Email |
| `password` | `string` | **Required**. User Password |

### Response
#### Status (200) Success

```JSON
{
    "access_token": "<string access token>"
}
```

#### Status (400) Bad Request

```JSON
{
    "message": "Please input <Parameter>"
}
```

#### Status (403) Forbidden

```JSON
{
    "message": "Invalid email / password"
}
```

### Get All Post

```http
  GET /posts
```

### Response
#### Status (200) Success

```JSON
[
    {
        "id": 1,
        "userId": 1,
        "imgUrl": "https://i.ibb.co/QbDzy6k/bf874bb1b609.jpg",
        "title": "Kamar Tiduer",
        "description": "No description",
        "createdAt": "2021-07-29T01:58:57.794Z",
        "updatedAt": "2021-07-29T01:58:57.794Z"
    }
]
```

### Get User Post

```http
  GET /posts/myPost
```

### Response
#### Status (200) Success

```JSON
[
    {
        "id": 1,
        "userId": 1,
        "imgUrl": "https://i.ibb.co/QbDzy6k/bf874bb1b609.jpg",
        "title": "Kamar Tiduer",
        "description": "No description",
        "createdAt": "2021-07-29T01:58:57.794Z",
        "updatedAt": "2021-07-29T01:58:57.794Z"
    }
]
```

### Create Post

```http
  POST /posts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required** Post Title |
| `post-image` | `file` | **Required** Photos of this post |
| `description` | `text` | Description about this post |

### Response
#### Status (201) Created

```JSON
{
    "success": "Your post successfully created"
}
```

#### Status (400) Bad Request

```JSON
{
    "message": "Please input <Parameter>"
}
```

#### Status (403) Forbidden

```JSON
{
    "message": "You must login first"
}
```

### Edit Post

```http
  PUT /posts/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required** Post Title |
| `post-image` | `file` | **Required** Photos of this post |
| `description` | `text` | Description about this post |

### Response
#### Status (200) Success

```JSON
{
    "success": "Your post has been edited"
}
```

#### Status (400) Bad Request

```JSON
{
    "message": "Please input <Parameter>"
}
```

#### Status (401) Unauthorize
```JSON
{
    "message": "You are not allowed to do that"
}
```

#### Status (403) Forbidden

```JSON
{
    "message": "You must login first"
}
```

### Delete Post

```http
  DELETE /posts/:id
```

### Response
#### Status (200) Success

```JSON
{
    "success": "Your post has been deleted"
}
```

#### Status (404) Not Found

```JSON
{
    "message": "We cannot find your post"
}
```

#### Status (401) Unauthorize
```JSON
{
    "message": "You are not allowed to do that"
}
```

#### Status (403) Forbidden

```JSON
{
    "message": "You must login first"
}
```

## Global Error


#### Status (500) Internal Server Error

```JSON
{
    "message": "Internal Server Error"
}
```