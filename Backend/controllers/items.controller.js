const { JSONResponse } = require('../lib/helper')
const Items = require('../models/items.model')

/**
 * ### Description
 * Get all items
 */
exports.getAllItems = async (req, res) => {
	try {
		const items = await Items.find()
        JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}

/**
 * ### Description
 * Creating an item
 */
exports.createItem = async (req, res) => {
	try {
		const items = await Items.create(req.body)
		JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}

/**
 * ### Description
 * Deleting items from list
 */
exports.deleteItemsById = async (req, res) => {
	try {
		const item = await Items.findById(req.params.id)
		if (item) await item.delete()
		JSONResponse.success(res, 'Success.', item, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}
/**
 * ### Description
 * Getting one item by item
 */
exports.getItemById = async (req, res) => {
	try {
		const item = await Items.findById(req.params.id)
		JSONResponse.success(res, 'Success.', item, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

/**
 * ### Description
 * Updates the user that matches the id that was passed to the route.
 */
exports.updateItemById = async (req,res, next)=>{
	try{
		const id = req.params.id;
		console.log("editing")
		const item = await Items.findByIdAndUpdate(id, req.body, {new: true});
		JSONResponse.success(res, "Success", item, 200)
	}catch(error){
		JSONResponse.error(res, "Failed", error, 404);
	}
}
