const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs')

const postImage = (req,res,next) => {
  if(!req.file && !req.params.id){
    next()
  }else{
    if(!req.file){
      console.log('masuk ini khusus edit dan go next')
      next()
    }
    else{
      const file = req.file.buffer.toString('base64')
      const filename = Date.now() + '--' +req.file.originalname
      const form = new FormData();
      form.append('file', file);
      form.append('fileName',filename)
      //create instance
      let basicAuth = new Buffer.from(process.env.PRIVATE_KEY + ':','utf8').toString('base64')    
      const postAPI = axios.create({
        baseURL: process.env.BASE_URL,
        headers: {
          ...form.getHeaders(),
          'Authorization': 'Basic ' + basicAuth, //authorization
        }
      });
      postAPI.post('/upload',form)
      .then((response)=>{
        req.body.imgUrl = response.data.url
        next();
      })
      .catch((err)=>{
        next({
          code : 500,
          message : err.message
        })
      })
    }
  }
}

module.exports = {postImage}