### GET /menus
> Get all menus

_Request Body_
```
not needed
```

_Response (200)_
```
[
  {
      "id": 15,
      "name": "Bakmi Ayam Shirataki Polos",
      "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Shirataki-Polos_TUWOxZ8ui.jpeg?updatedAt=1627366601013",
      "price": 35000,
      "isReady": true,
      "CategoryId": 1,
      "createdAt": "2021-07-27T07:36:29.076Z",
      "updatedAt": "2021-07-27T07:36:29.076Z",
      "Category": {
          "id": 1,
          "categoryName": "Makanan"
      }
  },
  {
      "id": 14,
      "name": "Bakmi Ayam Shirataki Pangsit Rebus",
      "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Shirataki-Pangsit-Rebus_47RJnmwVI.jpeg?updatedAt=1627366600125",
      "price": 41000,
      "isReady": true,
      "CategoryId": 1,
      "createdAt": "2021-07-27T07:36:29.076Z",
      "updatedAt": "2021-07-27T07:36:29.076Z",
      "Category": {
          "id": 1,
          "categoryName": "Makanan"
      }
  }
]
```

_Response (500 - Internal server error)_
```
{
  "error": "Internal server error"
}
```
---
### GET /menus/:id
> Get menu by id

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "name": "Bakmi Ayam Original Komplit",
    "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Original-Komplit_ESX7TDS3A.jpeg?updatedAt=1627366608044",
    "price": 30000,
    "isReady": true,
    "CategoryId": 1,
    "createdAt": "2021-07-27T07:36:29.076Z",
    "updatedAt": "2021-07-27T07:36:29.076Z",
    "Category": {
        "id": 1,
        "categoryName": "Makanan"
    }
}
```

_Response (404 - Not Found)_
```
{
  "error": "Data not found"
}
```

_Response (500 - Internal server error)_
```
{
  "error": "Internal server error"
}
```
---

### POST /orders
> Create new order

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "customerName": "Adul"
}
```

_Response (201 - Created)_
```
{
  "id": 1,
  "customerName": "Adul",
  "AdminId": "1"
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z"
}
```

_Response (400 - Bad Request)_
```
{
  "error": "Invalid requests"
}
```

_Response (500 - Internal server error)_
```
{
  "error": "Internal server error"
}
```
---
### GET /orders
> Find all customer order

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
        "customerName": "Adul azis",
        "AdminId": 1,
        "createdAt": "2021-07-27T12:20:21.322Z",
        "updatedAt": "2021-07-27T12:20:21.322Z",
        "Menus": [
            {
                "id": 6,
                "name": "Bakmi Ayam Yamin Komplit",
                "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Yamin-Komplit_4l6eX59Ea.jpeg?updatedAt=1627366608841",
                "price": 30000,
                "isReady": true,
                "CategoryId": 1,
                "OrderMenus": {
                    "id": 5,
                    "OrderId": 1,
                    "MenuId": 6,
                    "quantityItem": 1,
                    "quantityPrice": 30000,
                    "createdAt": "2021-07-27T19:55:07.997Z",
                    "updatedAt": "2021-07-27T19:55:07.997Z"
                }
            },
            {
                "id": 13,
                "name": "Bakmi Ayam Shirataki Pangsit Goreng",
                "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Shirataki-Pangsit-Goreng_usRGPoPIE.jpeg?updatedAt=1627366599319",
                "price": 40000,
                "isReady": true,
                "CategoryId": 1,
                "OrderMenus": {
                    "id": 27,
                    "OrderId": 1,
                    "MenuId": 13,
                    "quantityItem": 1,
                    "quantityPrice": 40000,
                    "createdAt": "2021-07-28T06:07:23.029Z",
                    "updatedAt": "2021-07-28T06:07:23.029Z"
                }
            }
        ]
    },
    {
        "id": 2,
        "customerName": "Adul azam",
        "AdminId": 1,
        "createdAt": "2021-07-27T12:20:21.322Z",
        "updatedAt": "2021-07-27T12:20:21.322Z",
        "Menus": [
            {
                "id": 6,
                "name": "Bakmi Ayam Yamin Komplit",
                "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Yamin-Komplit_4l6eX59Ea.jpeg?updatedAt=1627366608841",
                "price": 30000,
                "isReady": true,
                "CategoryId": 1,
                "OrderMenus": {
                    "id": 5,
                    "OrderId": 1,
                    "MenuId": 6,
                    "quantityItem": 1,
                    "quantityPrice": 30000,
                    "createdAt": "2021-07-27T19:55:07.997Z",
                    "updatedAt": "2021-07-27T19:55:07.997Z"
                }
            },
            {
                "id": 13,
                "name": "Bakmi Ayam Shirataki Pangsit Goreng",
                "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Shirataki-Pangsit-Goreng_usRGPoPIE.jpeg?updatedAt=1627366599319",
                "price": 40000,
                "isReady": true,
                "CategoryId": 1,
                "OrderMenus": {
                    "id": 27,
                    "OrderId": 1,
                    "MenuId": 13,
                    "quantityItem": 1,
                    "quantityPrice": 40000,
                    "createdAt": "2021-07-28T06:07:23.029Z",
                    "updatedAt": "2021-07-28T06:07:23.029Z"
                }
            }
        ]
    },
```
---

### GET /orders/:orderid
> Get orders by id

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
{
  "id": 1,
  "customerName": "Adul azis",
  "AdminId": 1,
  "createdAt": "2021-07-27T12:20:21.322Z",
  "updatedAt": "2021-07-27T12:20:21.322Z",
  "Menus": [
    {
      "id": 15,
      "name": "Bakmi Ayam Shirataki Polos",
      "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Shirataki-Polos_TUWOxZ8ui.jpeg?updatedAt=1627366601013",
      "price": 35000,
      "isReady": true,
      "CategoryId": 1,
      "OrderMenus": {
        "id": 1,
        "OrderId": 1,
        "MenuId": 15,
        "quantityItem": 5,
        "quantityPrice": 175000,
        "createdAt": "2021-07-27T12:54:52.239Z",
        "updatedAt": "2021-07-27T12:54:52.239Z"
      }
  },
  {
      "id": 12,
      "name": "Bakmi Ayam Shirataki Bakso",
      "img_url": "https://ik.imagekit.io/damario789/bakmipolim/Bakmi-Ayam-Shirataki-Bakso_ZBKhySJCP.jpeg?updatedAt=1627366597490",
      "price": 41000,
      "isReady": true,
      "CategoryId": 1,
      "OrderMenus": {
        "id": 2,
        "OrderId": 1,
        "MenuId": 12,
        "quantityItem": 2,
        "quantityPrice": 82000,
        "createdAt": "2021-07-27T13:13:04.856Z",
        "updatedAt": "2021-07-27T13:13:04.856Z"
      }
    }
  ]
}

```

_Response (404 - Not Found)_
```
{
  "error": "Data not found"
}
```

_Response (500 - Internal server error)_
```
{
  "error": "Internal server error"
}
```
---
### POST /neworder/:menuid
> Get orders by id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "quantityItem": 2
}
```

_Response (201)_
```
{
    "id": 2,
    "OrderId": 1,
    "MenuId": 12,
    "quantityItem": 2,
    "quantityPrice": 82000,
    "updatedAt": "2021-07-27T13:13:04.856Z",
    "createdAt": "2021-07-27T13:13:04.856Z"
}
```
### POST /neworder/ordercustomer
> Post new order

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "customerName": 2,
  "AdminId": 1
}
```

_Response (201)_
```
{
    "id": 2,
    "OrderId": 1,
    "MenuId": 12,
    "quantityItem": 2,
    "quantityPrice": 82000,
    "updatedAt": "2021-07-27T13:13:04.856Z",
    "createdAt": "2021-07-27T13:13:04.856Z"
}
```
### POST /neworder/currency
> Convert currency

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "currency": "usd",
  "totalPrice": 14000
}
```

_Response (201)_
```
{
    1
}
```
---

### POST /register
>Register User

_Request Body_
```
{
  "email": "<email>",
  "password": "<password>",
}
```

_Response (201 - Created)_
```
{
  "id": "<id>",
  "email": "<email>"
}
```
### POST /login
>Login User

_Request Body_
```
{
  "email": "<email>",
  "password": "<password>"
}
```

_Response (200 - Success Login)_
```
{
  "access_token": "<your access token>",
  "email": "<your email>"
}
```


