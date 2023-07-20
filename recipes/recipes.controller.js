const Service  = require("./recipes.service")


const addRecipes = async(req,res)=>{
    try {
        const data = await Service.addRecipes()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}


const getRecipe = async(req,res)=>{
    try {
        const data = await Service.getRecipe()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

const getRecipeByQuery = async(req,res)=>{
    try {
        const {name} = req.query
        const data =  await Service.getRecipeByQuery({name})
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
} 


const deleteRecipeById = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await Service.deleteRecipeById({id})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}


const updateRecipe = async(req,res)=>{
    try {
        const body = req.body
       const {id} = req.params 
       const data = await Service.updateRecipe({id},{body}) 
       res.send(data)       
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    addRecipes,
    getRecipe,
    getRecipeByQuery,
    deleteRecipeById,
    updateRecipe
}