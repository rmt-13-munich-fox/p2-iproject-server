const FormData = require('form-data');
const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://api.imgbb.com/1'
})

async function uploadToImgBB(req, res, next) {
    const imageFile = req.file.buffer.toString('base64')
    const key = process.env.IMGBB_KEY

    try {
        const form = new FormData()
        form.append('key', key)
        form.append('image', imageFile)
    
        const { data } = await instance({
            method: 'post',
            url: '/upload',
            headers: {
                ...form.getHeaders()
            },
            data: form
        })

        req.body.imgUrl = data.data.url
        
        next()

    } catch (err) {
        next({
            name: 'ImgBBError',
            message: err.message || 'Something error with image uploader'
        })
    }
}

module.exports = {
    uploadToImgBB
}