const jwt = require('jsonwebtoken')

const jwtSign = (id,email)=>{
    let access_token = jwt.sign({
        id:id,
        email:email
    },
        process.env.SECRET_KEY,{
            expiresIn:60*60
    })
    return access_token;
}
const jwtVerify = (access_token)=>{
    const payload = jwt.verify(access_token,process.env.SECRET_KEY)
    return payload;
}
module.exports={jwtSign,jwtVerify}