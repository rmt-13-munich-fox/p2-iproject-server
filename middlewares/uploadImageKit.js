const imageKitAxios = require("../apis/imageKit");
const FormData = require('form-data');

const bodyFormData = new FormData();

const uploadImageKit = async (req, res, next) => {
    try {
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