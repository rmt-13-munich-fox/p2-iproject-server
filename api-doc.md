# Blog web
## auth 
### POST /admin/register

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
    "id": 26,
    "username": "admin5",
    "email": "admin5@gmail.com",
    "password": "$2a$10$Wg9CzixvqyqHjwdkA/iO8ebuQW4opzfBMciK7miPoy.lMp4gVmiGG",
    "role": "admin",
    "avatarImg": "https://robohash.org/admin5?set=any",
    "updatedAt": "2021-07-30T04:50:36.936Z",
    "createdAt": "2021-07-30T04:50:36.936Z"
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

### POST /admin/register

> Create new user (client)

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
    "id": 28,
    "username": "client13",
    "email": "client13@gmail.com",
    "password": "$2a$10$ohv9bvHdYFvccbTppz5zLOtXyaeWj149Fac0RKnMcUV4XTXUWz8di",
    "role": "client",
    "avatarImg": "https://robohash.org/client13?set=any",
    "updatedAt": "2021-07-30T04:52:02.783Z",
    "createdAt": "2021-07-30T04:52:02.783Z"
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

_Response (200)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjc2MjQzNjMsImlkIjoyMCwiZW1haWwiOiJjbGllbnQxQGdtYWlsLmNvbSIsInJvbGUiOiJjbGllbnQiLCJ1c2VybmFtZSI6ImNsaWVudDEiLCJpYXQiOjE2Mjc2MjA3NjN9.ZCrxdTOAc5ZTBBX3w4EnfV16X6F3Z6SqbTt7a1RtpKc",
    "id": 20,
    "email": "client1@gmail.com",
    "role": "client"
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

## Blog Articles 

### GET /posts

> fetch all blog articles with pagination 

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
{
    "totalArticles": 12,
    "articles": [
        {
            "id": 12,
            "title": "84917398139871273",
            "description": "<ol><li>ADASDAJSHDHHHHHHHHHHHHHHHHHHHHHHHH</li><li>HHHHHHHHHHHHHHHHHHHHHHHHHH</li><li>HKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</li></ol><p><br></p><p><br></p><h1>AJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ</h1>",
            "thumbnail": "https://ik.imagekit.io/aisyah/blogLogo_4wYv3FCjv.png",
            "userId": 1,
            "tagId": 2,
            "createdAt": "2021-07-29T02:29:45.262Z",
            "updatedAt": "2021-07-29T02:29:45.262Z",
            "Tag": {
                "id": 2,
                "name": "skincare",
                "createdAt": "2021-07-28T04:18:54.830Z",
                "updatedAt": "2021-07-28T04:18:54.830Z"
            }
        },
        {
            "id": 11,
            "title": "adad",
            "description": "<p>asdadasda</p>",
            "thumbnail": "https://ik.imagekit.io/aisyah/freestocks-_3Q3tsJ01nc-unsplash_lRze1gICO.jpg",
            "userId": 1,
            "tagId": 1,
            "createdAt": "2021-07-29T01:51:12.131Z",
            "updatedAt": "2021-07-29T01:51:12.131Z",
            "Tag": {
                "id": 1,
                "name": "make-up",
                "createdAt": "2021-07-28T04:18:54.830Z",
                "updatedAt": "2021-07-28T04:18:54.830Z"
            }
        },
        {
            "id": 10,
            "title": "skincare 5",
            "description": "lorem ipsum skincare 5",
            "thumbnail": "https://ik.imagekit.io/aisyah/amy-shamblen-xwM61TPMlYk-unsplash_T3A0k55rWz.jpg",
            "userId": 1,
            "tagId": 1,
            "createdAt": "2021-07-29T01:42:33.095Z",
            "updatedAt": "2021-07-29T01:42:33.095Z",
            "Tag": {
                "id": 1,
                "name": "make-up",
                "createdAt": "2021-07-28T04:18:54.830Z",
                "updatedAt": "2021-07-28T04:18:54.830Z"
            }
        },
        {
            "id": 9,
            "title": "skincare 5",
            "description": "lorem ipsum skincare 5",
            "thumbnail": "https://ik.imagekit.io/aisyah/raphael-lovaski-Pe9IXUuC6QU-unsplash_AGciynXe4.jpg",
            "userId": 1,
            "tagId": 1,
            "createdAt": "2021-07-29T01:26:03.520Z",
            "updatedAt": "2021-07-29T01:26:03.520Z",
            "Tag": {
                "id": 1,
                "name": "make-up",
                "createdAt": "2021-07-28T04:18:54.830Z",
                "updatedAt": "2021-07-28T04:18:54.830Z"
            }
        },
        {
            "id": 8,
            "title": "skincare 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Vestibulum lectus mauris ultrices eros in cursus. Justo donec enim diam vulputate ut. Donec adipiscing tristique risus nec feugiat in fermentum. Egestas diam in arcu cursus euismod quis. Malesuada nunc vel risus commodo viverra maecenas. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Non sodales neque sodales ut etiam sit. Donec enim diam vulputate ut pharetra sit. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Donec massa sapien faucibus et molestie ac feugiat. Amet justo donec enim diam vulputate ut pharetra. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Dignissim diam quis enim lobortis scelerisque. Aliquet nibh praesent tristique magna sit. Enim praesent elementum facilisis leo vel fringilla est.",
            "thumbnail": "https://ik.imagekit.io/aisyah/angelica-echeverry-iZlMuVu9luM-unsplash_Ms8somumw.jpg",
            "userId": 19,
            "tagId": 2,
            "createdAt": "2021-07-28T09:59:06.308Z",
            "updatedAt": "2021-07-28T09:59:06.308Z",
            "Tag": {
                "id": 2,
                "name": "skincare",
                "createdAt": "2021-07-28T04:18:54.830Z",
                "updatedAt": "2021-07-28T04:18:54.830Z"
            }
        },
        {
            "id": 7,
            "title": "makeup 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Vestibulum lectus mauris ultrices eros in cursus. Justo donec enim diam vulputate ut. Donec adipiscing tristique risus nec feugiat in fermentum. Egestas diam in arcu cursus euismod quis. Malesuada nunc vel risus commodo viverra maecenas. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Non sodales neque sodales ut etiam sit. Donec enim diam vulputate ut pharetra sit. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Donec massa sapien faucibus et molestie ac feugiat. Amet justo donec enim diam vulputate ut pharetra. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Dignissim diam quis enim lobortis scelerisque. Aliquet nibh praesent tristique magna sit. Enim praesent elementum facilisis leo vel fringilla est.",
            "thumbnail": "https://ik.imagekit.io/aisyah/johan-mouchet-KdbCwfzcwWE-unsplash_SJ95-Lp78.jpg",
            "userId": 19,
            "tagId": 1,
            "createdAt": "2021-07-28T09:57:42.519Z",
            "updatedAt": "2021-07-28T09:57:42.519Z",
            "Tag": {
                "id": 1,
                "name": "make-up",
                "createdAt": "2021-07-28T04:18:54.830Z",
                "updatedAt": "2021-07-28T04:18:54.830Z"
            }
        }
    ],
    "totalPages": 2,
    "currentPage": 0
}
```
_Response (500 - Internal server error)_
```
{
  'message': 'Internal server error'
}
```
### GET /posts/:id

> fetch one blog article by id 

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
{
    "id": 1,
    "title": "make up 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Vestibulum lectus mauris ultrices eros in cursus. Justo donec enim diam vulputate ut. Donec adipiscing tristique risus nec feugiat in fermentum. Egestas diam in arcu cursus euismod quis. Malesuada nunc vel risus commodo viverra maecenas. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Non sodales neque sodales ut etiam sit. Donec enim diam vulputate ut pharetra sit. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Donec massa sapien faucibus et molestie ac feugiat. Amet justo donec enim diam vulputate ut pharetra. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Dignissim diam quis enim lobortis scelerisque. Aliquet nibh praesent tristique magna sit. Enim praesent elementum facilisis leo vel fringilla est.",
    "thumbnail": "https://ik.imagekit.io/aisyah/amy-shamblen-xwM61TPMlYk-unsplash_EL7HMEQsN.jpg",
    "userId": 1,
    "tagId": 1,
    "createdAt": "2021-07-28T09:46:12.778Z",
    "updatedAt": "2021-07-28T09:46:12.778Z",
    "Tag": {
        "id": 1,
        "name": "make-up",
        "createdAt": "2021-07-28T04:18:54.830Z",
        "updatedAt": "2021-07-28T04:18:54.830Z"
    },
    "User": {
        "id": 1,
        "username": "admin1",
        "email": "admin1@gmail.com",
        "password": "$2a$10$GbVH8OHXnYhacOz4ivZCxOvMWQlI4g5nrhFJZamh3bdCYz0vDplhe",
        "avatarImg": "https://robohash.org/admin1?set=any",
        "role": "admin",
        "createdAt": "2021-07-28T04:20:09.363Z",
        "updatedAt": "2021-07-28T04:20:09.363Z"
    }
}
```