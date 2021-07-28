const {User} = require('../models')
const jwt = require('jsonwebtoken')
const { hashSync, compareSync } = require('../helper/bcrypt')
const getAxios = require("../helper/axios");

class Sign{
    static async signUp(req, res, next){
        try{
            let {username, email, password, address, quotes} = req.body
            const { originalname } = req.file;
            const buffer = req.file.buffer.toString("base64");
            let imgUrl = await getAxios(originalname, buffer)
            password = hashSync(password)
            imgUrl = imgUrl.url
            let dataSign = await User.create({username, email, password, address, quotes, imgUrl})
            if(dataSign){
                res.status(201).json({id: dataSign.id, email})
            } else {
                throw {code: 400, message: "Error Create Table User", name: "ErrorCreateAndEdit" }
            }
        }
        catch(err){
            console.log(err);
            if(err.code){
                next({
                    name: err.name,
                    message: err.message
                })
            }
            if(err.message){
                next({
                    name: "ValidationError",
                    message: err.message
                })
            }else{
                next({
                    name: "InternalErrorServer",
                    message: "Internal Server Error"
                })
            }
        }
    }
    static async login(req, res, next){
        try{
            let { email, password } = req.body
            // console.log(req.body);
            if(!email || !password){
                throw {code: 400, message: "Email or Password cannot be empty", name:"ValidationError"}
            } else{
                let dataUser = await User.findOne({where: {email: email}})
                console.log(dataUser);
                if(dataUser){
                    let dataPassword = compareSync(password, dataUser.password)
                    if(dataPassword){
                        let access_token = jwt.sign({id: dataUser.id, username: dataUser.username}, process.env.SECRET)
                        res.status(200).json({access_token, id: dataUser.id, username: dataUser.username})
                    } else{
                        throw {code:401, message: "Error User Email or Password is Wrong", name: "ErrorLoginUser"}
                    }
                } else{
                    throw {code:401, message: "Error User Email or Password is Wrong", name: "ErrorLoginUser"}
                }
            }
        }
        catch(err){
            console.log(err);
            if(err.code){
                next({
                    name: err.name,
                    message: err.message
                })
            } else {
                next({
                    name: "InternalErrorServer",
                    message: "Internal Server Error"
                })
            }
        }
    }
    static async editUser(req, res, next){
        try{
            const id = req.params.id
            let {username, email, address, quotes} = req.body
            const { originalname } = req.file;
            const buffer = req.file.buffer.toString("base64");
            let imgUrl = await getAxios(originalname, buffer)
            imgUrl = imgUrl.url
            let dataUser = await User.update({username, email, address, quotes, imgUrl}, {where: {id}})
            if(dataUser){
                res.status(201).json({message: 'success to update'})
            } else {
                throw {code: 400, message: "Error Create Table User", name: "ErrorCreateAndEdit" }
            }
        }
        catch(err){
            console.log(err);
            if(err.code){
                next({
                    name: err.name,
                    message: err.message
                })
            }
            if(err.message){
                next({
                    name: "ValidationError",
                    message: err.message
                })
            }else{
                next({
                    name: "InternalErrorServer",
                    message: "Internal Server Error"
                })
            }
        }
    }
    static async fetchUser (req, res, next){
        try {
            const id = req.user.id
            const data = await User.findByPk(id)
            if(data){
                res.status(200).json(data)
            } else{
                throw {
                    code: 404,
                    message: "data cannot be found",
                    name: "DataCannotBeFound",
                  };
            }
        } catch (err) {
            console.log(err);
            if(err.code){
                next({
                    name: err.name,
                    message: err.message
                })
            }
            if(err.message){
                next({
                    name: "ValidationError",
                    message: err.message
                })
            }else{
                next({
                    name: "InternalErrorServer",
                    message: "Internal Server Error"
                })
            }
        }
    }
}

module.exports = Sign