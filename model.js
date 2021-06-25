const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    review: String,
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    own: Boolean,
    
});
const Books = mongoose.model("Books", bookSchema)

const store =  {
};

module.exports = {
    Books,
    store,
    
}; 