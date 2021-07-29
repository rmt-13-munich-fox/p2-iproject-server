const {Recipe} = require('../models/index')
const axios = require("axios")

class recipeControllers{
    static showAll(req,res,next){
        Recipe.findAll()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next({
                code : 500,
                message : "Internal Server Error"
            })
        })
    }
    static showByWord(req,res,next){
        let word = req.params.word
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${word}`)
        .then(({data})=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    static setRecipe(req,res,next){
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(({data})=>{
            // res.status(200).json(data)
            let newRecipe={
                name: data.meals[0].strMeal,
                directions : data.meals[0].strInstructions,
                image : data.meals[0].strMealThumb,
                description : data.meals[0].strTags,
                ingredients: `${data.meals[0].strIngredient1} ${data.meals[0].strMeasure1}, ${data.meals[0].strIngredient2} ${data.meals[0].strMeasure2}, ${data.meals[0].strIngredient3} ${data.meals[0].strMeasure3}, ${data.meals[0].strIngredient4} ${data.meals[0].strMeasure4}, ${data.meals[0].strIngredient5} ${data.meals[0].strMeasure5}`
            }
            // console.log(newRecipe);
            return Recipe.create(newRecipe)
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
module.exports=recipeControllers