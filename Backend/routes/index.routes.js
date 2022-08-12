const express = require('express')
const CategoryController = require('../controllers/category.controller')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
	getItemById
} = require('../controllers/items.controller')

router.route('/').get(IndexController.index)

router.route('/shopping_list').post(createItem).get(getAllItems)

router.route('/shopping_list/:id').delete(deleteItemsById).get(getItemById)

router
	.route("/categories/")
	.post(CategoryController.createCategory)
	.get(CategoryController.getAllCategories);

router
	.router("/categories/:id")
	.get(CategoryController.getCategoryById)
	.patch(CategoryController.updateCategory)
	.delete(CategoryController.deleteCategory)


module.exports = router
