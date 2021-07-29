# Weather Calendar

Weather Calendar is an application that shows weather and let you look at your appointment or to do list that is connected to your Google Calendar. This app has:

-   RESTful endpoint for asset's CRUD operations.
-   JSON formatted response

&nbsp

## Endpoints

### POST /login

> Login User using Google OAuth2

_Request Header_

```
not needed
```

_Request Body_

```
{
    "access_token": <google access token>,
    "id_token": <google id token>
}
```

_Response (200 - OK)_

```
{
    "access_token": <token that is signed by jwt>
}
```

_Response (500 - Internal Server Error)_

```
{
    "msg": "Internal Server Error"
}
```

### GET /weather

> Get weather data

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
"data": {
    "current": Object
    "daily": Array(8)
    "hourly": Array(48)
    "lat": -6.1453
    "lon": 106.7332
    "timezone": "Asia/Jakarta"
}

```

_Response (400 - Bad request)_

```
{
    "msg": 'Bad Request'
}
```

### GET /calendar

> Get top 10 upcoming events from Google Calendar

_Request Header_

```
{
    "access_token"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
    "data": Array(10) {
        "0": {
            "created": (...),
            "creator": (...),
            "end": (...),
            "etag": (...),
            "eventType": (...),
            "htmlLink": (...),
            "iCalUID": (...),
            "id": (...),
            "kind": (...),
            "organizer": (...),
            "reminders": (...),
            "sequence": (...),
            "start": (...),
            "status": (...),
            "summary": (...),
            "transparency": (...)
        },
        "1": {…},
        "2": {…},
        "3": {…},
        "4": {…},
        "5": {…},
        "6": {…},
        "7": {…},
        "8": {…},
        "9": {…}
    }
}
```

_Response (400 - Bad request)_

```
{
    "msg": 'Bad Request'
}
```

### POST /pushNotification

_Request Header_

```
not needed
```

_Request Body_

```
{
    "registrationToken": <FCM registration token>
}
```

_Response (200 - OK)_

```
"Notification sent successfully"
```

_Response (400 - Bad request)_

```
{
    "msg": 'Bad Request'
}
```
