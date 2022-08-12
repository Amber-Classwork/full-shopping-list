const db = require('mongoose');


let categorySchema = new db.Schema({
    category:{ type: String, required: true}
});

module.exports = db.model('Category', categorySchema);


