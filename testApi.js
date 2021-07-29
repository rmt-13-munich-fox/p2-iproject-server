const express = require('express');
const FormData = require('form-data');

const test = express()
const port = 3030

const axios = require('axios');
const multer = require('multer');

test.use(express.urlencoded({ extended: true }))
test.use(express.json())

const upload = multer()

const instance = axios.create({
    baseURL: 'https://api.imgbb.com/1'
})

test.post('/',  upload.single('image') , (req, res) => {
    const fileImage = req.file.buffer.toString('base64')
    const testForm = new FormData()

    console.log(testForm.getHeaders());

    testForm.append('key', '17f9412a43059b0424e87755acd6f119')
    testForm.append('image', fileImage)

    instance({
        method: 'post',
        url: `/upload`,
        headers: {
            ...testForm.getHeaders(),
        },
        data: testForm
    })
    .then(({data}) => {
        res.status(201).json(data)
    })
    .catch((err) => {
        console.log(err);    
        res.status(500).json(err)
    });
})


test.listen(port, () => {
    console.log(`port : ${port}`);
})