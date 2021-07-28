const axios = require('axios')

const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`

class Controller {
    static currencyConvert(req,res,next){
        const { convert, price } = req.body 
        // console.log(convert, price)
        // console.log(req.body)

        axios({
            method: "GET",
            url: `${baseUrl}/usd.json`
        })
        .then(response => {
            // console.log(response.data.usd)

            let list = response.data.usd
            let rate;

            for (const currency in list) {
                if(currency === convert){
                    rate = list[currency]
                }
            }
            let total = rate * +price


            res.status(200).json({total: total.toFixed(2)})
        })
        .catch(err => {
            console.log(err)
            next({code: 500})
        })
    }

    static allCurrency(req,res,next){
        axios({
            method: "GET",
            url: `${baseUrl}/usd.json`
        })
        .then(response => {
            let list = response.data.usd

            let currencies = []

            for (const currency in list) {
                currencies.push(currency)
            }
            // console.log(currencies)
            res.status(200).json(currencies)
        })
        .catch(err => {
            console.log(err)
            next({code: 500})
        })
    }
}


module.exports = Controller