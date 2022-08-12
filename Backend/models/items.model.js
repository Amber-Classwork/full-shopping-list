const db = require('mongoose')

let itemsSchema = new db.Schema({
	category_id: { type: db.Schema.Types.ObjectId, required: true , ref:"Category"},
	item_name: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
})

module.exports = db.model('items', itemsSchema)
