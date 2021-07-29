# My Movie App Server
Smart News App is an application to show you a new ways of reading news.
This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response



## RESTful endpoints for /news
### GET /news/latest-news/all

> Get all Headlines

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
    "news_id": "c60b94a1-931e-4944-8b14-5b6b6f268ae9",
    "title": "Kathy Sheridan: The armchair critics are far from the Olympic ideal",
    "author": "@kathysheridanIT",
    "description": "Athletes triumph with ambition and talent as gold medal-obsessed fans pontificate lazily",
    "url": "https://www.irishtimes.com/opinion/kathy-sheridan-the-armchair-critics-are-far-from-the-olympic-ideal-1.4631929?mode=sample&auth-failed=1&pw-origin=https%3A%2F%2Fwww.irishtimes.com%2Fopinion%2Fkathy-sheridan-the-armchair-critics-are-far-from-the-olympic-ideal-1.4631929",
    "image_url": "https://www.irishtimes.com/polopoly_fs/1.4631928.1627403908!/image/image.jpg",
    "category": "general",
    "published": "2021-07-28T00:06:43.000Z",
    "createdAt": "2021-07-28T02:21:45.325Z",
    "updatedAt": "2021-07-28T02:21:45.325Z",
    "Sentiment": {
        "id": 1,
        "NewsId": 1,
        "sentiment": "positive",
        "tokens": "athletes,triumph,with,ambition,and,talent,as,gold,medal-obsessed,fans,pontificate,lazily",
        "positive_words": "gold,talent,triumph",
        "negative_words": "",
        "stop_words": "with,and,as",
        "comperative": 0.6666666666666666,
        "score": 8,
        "calculation": "[{\"gold\":2},{\"talent\":2},{\"triumph\":4}]",
        "createdAt": "2021-07-28T02:21:45.353Z",
        "updatedAt": "2021-07-28T02:21:45.353Z"
    }
]
```
_Response (500 - Internal server error)_
```
  Internal server error
```
### GET /news/latest-news/
> Get headline with pagination and filtering
_Request query_
```
    page : <your desired page>
    sentiment : ["positive" || "negative" || "neutral"]
```
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
   "totalItems": 548,
    "rows": [
      {
        "id": 332,
        "news_id": "2f9dc6f1-8ab7-4c2f-bc0c-062432b46c9e",
        "title": "RPSC SI exam 2021 date announced at rpsc.rajasthan.gov.in, check here - Times of India",
        "author": "Heeba Hameed",
        "description": "Education News: NEW DELHI: Rajasthan Public Service Commission on Wednesday announced the exam date of Sub Inspector 2021 on its official website.",
        "url": "https://timesofindia.indiatimes.com/home/education/news/rpsc-si-exam-2021-date-announced-at-rpsc-rajasthan-gov-in-check-here/articleshow/84825083.cms",
        "image_url": "https://static.toiimg.com/thumb/msid-84825247,width-1070,height-580,imgsize-15166,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "category": "education",
        "published": "2021-07-28T15:54:10.000Z",
        "Sentiment": {
            "id": 332,
            "NewsId": 332,
            "sentiment": "neutral",
            "tokens": "education,news,new,delhi,rajasthan,public,service,commission,on,wednesday,announced,the,exam,date,of,sub,inspector,2021,on,its,official,website",
            "positive_words": "",
            "negative_words": "",
            "stop_words": "on,the,date,of,on,its",
            "comperative": 0,
            "score": 0,
            "calculation": "[]"
          }
        },
          ...
    ],
    "totalPages": 69,
    "currentPage": 0
]
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
_Response (500 - Internal server error)_
```
  Internal server error
```
---
### GET /news/keywords/
> Get specific news by using keywords
_Request Header_
```
    not needed
```

_Request Body_
```
    keywords : "<your keyword>"
```

_Response (200)_
```
[
    {
        "id": "876d4e33-a357-45b4-9519-0c4ac9633ea6",
        "title": "Indonesian President Conducts Aidiladha Prayers With Social Distancing In Open Space",
        "description": "This post first appeared on WORLD OF BUZZ.\nAidiladha looked a little different on 20 July as many conducted prayers in their own homes while complying with SOPs during the pandemic.\nIndonesian President Joko Widodo, also known as Jokowi, took to his Instagram to share how he conducted his Aidiladha ...",
        "url": "https://worldofbuzz.com/indonesian-president-conducts-aidiladha-prayers-with-social-distancing-in-open-space/",
        "author": "Erica Pamela Sadom",
        "image": "https://worldofbuzz.com/wp-content/uploads/2021/07/pjimage-27-1.jpg",
        "language": "en",
        "category": [
            "general"
        ],
        "published": "2021-07-22 04:21:08 +0000",
        "Sentiment": {
            "sentiment": "positive",
            "score": 1,
            "comperative": 0.02,
            "calculation": "[{\"share\":1}]",
            "stop_words": "first,on,a,little,different,on,as,many,in,their,own,while,with,during,the,also,known,as,took,to,his,to,how,he,his",
            "tokens": "this,post,first,appeared,on,world,of,buzz,aidiladha,looked,a,little,different,on,20,july,as,many,conducted,prayers,in,their,own,homes,while,complying,with,sops,during,the,pandemic,indonesian,president,joko,widodo,also,known,as,jokowi,took,to,his,instagram,to,share,how,he,conducted,his,aidiladha",
            "positive_words": "share",
            "negative_words": ""
        }
    },
        ...
]
```

_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```
---
### GET /news/bookmark/
> Get bookmark list for currently logged in user
_Request Query_
```
    page = <your desired page>,
    sentiment = [positive||negative||neutral]
```
_Request Header_
```
    "access_token": "<your access token>"
```

_Request Body_
```
    not needed
```

_Response (200)_
```
{
    "totalItems": 11,
    "rows": [
        {
            "UserId": 4,
            "NewsId": 4,
            "id": 8,
            "News": {
                "id": 4,
                "news_id": "d24b676c-3539-4eff-8354-651a90f94701",
                "title": "To be the very best, Olympic athletes break down their sport to a science",
                "author": "wtae",
                "description": "Momentum is translated to joules, runners understand the intricacies of different muscle fibers, kayakers deftly navigate the math behind fluid dynamics.",
                "url": "https://www.wtae.com/article/science-of-the-olympics/37147965",
                "image_url": "https://kubrick.htvapps.com/hmg-prod.s3.amazonaws.com/images/olympic-lede-2-ab-1626973602.jpg?crop=1xw:0.7804878048780488xh;center,top&resize=640:*",
                "category": "general",
                "published": "2021-07-27T22:37:00.000Z",
                "Sentiment": {
                    "id": 4,
                    "NewsId": 4,
                    "sentiment": "neutral",
                    "tokens": "momentum,is,translated,to,joules,runners,understand,the,intricacies,of,different,muscle,fibers,kayakers,deftly,navigate,the,math,behind,fluid,dynamics",
                    "positive_words": "",
                    "negative_words": "",
                    "stop_words": "is,to,the,of,different,the,behind",
                    "comperative": 0,
                    "score": 0,
                    "calculation": "[]"
                }
            }
        },
    ],
    "totalPages": 2,
    "currentPage": 0
}
```

_Response (401 - Not authorized)_
```
{
  "message": "Please log in first"
}
```

_Response (401 - Not authorized)_
```
{
  "message": "Invalid access token"
}
```
_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```
### POST /news/sentiment-analysis
> Analyze custom text to get the sentiment


_Request Header_
```
{
  not needed
}
```

_Request Body_
```
{
  "description": "<custom text,that you want to analyze>",
}
```

_Response (200 - Ok!)_
```
{
     "sentiment": "negative",
    "score": -5,
    "comperative": -0.45454545454545453,
    "calculation": "[{\"stupid\":-2},{\"bad\":-3}]",
    "stop_words": "is,such,a,always,being",
    "tokens": "trump,is,such,a,bad,leader,always,being,provokative,outragous,stupid",
    "positive_words": "",
    "negative_words": "stupid,bad"
}
```


_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```
### POST /news/bookmark/:id
> add bookmark for user with spesific id
_Request Header_
```
{
  "access_token" : "<your access token>"
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
    "NewsId": 14,
    "UserId": 4,
    "updatedAt": "2021-07-28T19:04:58.408Z",
    "createdAt": "2021-07-28T19:04:58.408Z"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "validation required"
}
```
```
{
  "message": [
    "NewsId must be unique"
  ]
}
```
_Response (404 - Bad Request)_
```
{
  "message": "News with id <id> not found"
}
```
_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```
### DELETE /news/bookmark/:id
> delete user bookmarked news with spesific id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
  no needed
```

_Response (200 - Ok!)_
```
{
  "message" : "Bookmark with id <id> has been deleted"
}
```

_Response (401 - unauthorized)_
```
{
  "message": "please login first"
}
```

_Response (404 - Page Not Found)_
```
{
  "message": "Bookmark with id <id> is not found"
}
```

_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```


##RESTful endpoints for User
### POST /user/reset-password
> To generate reset link for user,who forget their password
> return reset_token,that will be used as query to open the reset password link
_Request Header_
```
{
  not needed
}
```

_Request Body_
```
{
  "email": "<user email>"
}
```

_Response (200 - Ok)_
```
{
  "reset_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11c3RhaW4uYmlsYWhAZ21haWwuY29tIiwiaWF0IjoxNjI3NTAyNjk3LCJleHAiOjE2Mjc1MDYyOTd9.bvZfAEdQFepSHI-ZhADhATa215oE8-XrMMEz7ZFZLc8"
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
### POST /reset-password/
> return a link for reset password through email reset_token,that will be used as query to open the reset password link
_Request Query_
```
{
  reset_token : <your reset token>
}
```
_Request Header_
```
{
  not needed
}
```

_Request Body_
```
{
  "password": "<your new password>"
}
```

_Response (200 - Ok)_
```
{
  "message" : "Password has been reset successfully"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "invalid reset token"
}
```

_Response (404 - Bad Request)_
```
{
  "message": "User with <email> is not found"
}
```
_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```
### POST /login/
> return a access_token

_Request Header_
```
{
  not needed
}
```

_Request Body_
```
{
  "password": "<your password>"
  "email": "<your email>"
}
```

_Response (200 - Ok)_
```
{
  "access_token" : "your access token"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "email is required"
}
```
_Response (401 - Bad Request)_
```
{
  "message": "email/password is incorrect"
}
```


_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```


### POST /register/
> register new user

_Request Header_
```
{
  not needed
}
```

_Request Body_
```
{
  "password": "<your password>"
  "email": "<your email>"
}
```

_Response (201 - created)_
```
{
  "message" : "user with email mustain.bilah11@gmail.com has been registered"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "email must be unique"
}
```


_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```