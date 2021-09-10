const axios = require('axios')

const decodePrivateKey = Buffer.from(`${process.env.PRIVATE_KEY}:`).toString('base64')

const instance = axios.create({
    baseURL: process.env.IMAGEKIT_URL,
    headers: {
        'Authorization': `Basic ${decodePrivateKey}`
    }
});

module.exports = instance