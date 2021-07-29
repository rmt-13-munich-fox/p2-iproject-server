const imageKitAxios = require("../apis/imageKit");
const FormData = require('form-data');

const bodyFormData = new FormData();

const uploadImageKit = async (req, res, next) => {
    try {
        console.log('masuk ke imagekit');
        const {
            size,
            mimetype,
            buffer,
            originalname
        } = req.file

        const imageType = mimetype.substring(0, 5)

        if (imageType !== 'image') {
            next({
                name: 'unsupportedMediaType'
            })
        } else if (size > 30000000) {
            next({
                name: 'sizeTooBig'
            })
        } else {
            console.log('masuk ke axios imagekit part 1');
            bodyFormData.append('fileName', originalname);
            bodyFormData.append('file', buffer.toString('base64'));

            const imageKit = await imageKitAxios({
                method: 'POST',
                url: '/',
                headers: {
                    ...bodyFormData.getHeaders()
                },
                data: bodyFormData
            })
            console.log('masuk ke axios imagekit');
            req.body.thumbnail = imageKit.data.url
            next()
        }
    } catch (error) {
        next({
            name: "internalServerError"
        })
    }

}

module.exports = uploadImageKit