const express = require("express")
const router = express.Router({mergeParams:true})
const Controller = require("./recipes.controller")

router.post("/",Controller.addRecipes)
router.get("/",Controller.getRecipe)
router.get("/search",Controller.getRecipeByQuery)
router.delete("/:id",Controller.deleteRecipeById)
router.put("/:id",Controller.updateRecipe)








module.exports = router;