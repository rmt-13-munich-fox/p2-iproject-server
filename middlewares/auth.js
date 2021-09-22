const {User,Recipe} = require('../models')
const {jwtVerify} =require('../helpers/jwtVerify')

//authetication
function authentication(req,res,next) {
    const {access_token} = req.headers
    if (access_token) {
        try{
            const payload = jwtVerify(access_token)
            User.findByPk(payload.id)
            .then((user)=>{
                if(user){
                    req.user = {id:user.id, role:user.role}
                    next()
                } else{
                    next({
                        code : 401,
                        message : 'invalid JWT'
                    })
                }
            })
        } catch(error){
            next({
                code : 401,
                message : 'invalid JWT'
            })
        }
    } else {
        next({
            code : 401,
            message : 'silahkan login terlebih dahulu'
        })
    }
}

//untuk acces (authorization)
function authorization(req,res,next) {
    const {id} = req.params
    Recipe.findByPk(Number(id))
    .then((recipes)=>{ 
        if (recipes) {
            if(req.user.role === "admin" || req.user.id === recipes.authorId){
                next()
            }else{
                next({
                    code : 403,
                    message : "forbidden to access"
                })
            }
        } else{
            next({
                code : 404,
                message : "data not found"
            })
        }
    })
    .catch(err=>{
        next({
            code : 404,
            message : err.message || "internal server error"
        })
    })
}
module.exports={authentication,authorization}