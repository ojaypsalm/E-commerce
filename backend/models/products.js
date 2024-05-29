const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Image Schema

const ImageSchema = new Schema({
    url:{
        type: String,
        required: true
    },
    altText: {
        type:String,
        required: true
    }
});

//Product Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required:true,
        trim : true
    },
    images: [ImageSchema],
    stock: {
        type: Number,
        required: true,
        min: 0
    }
    
}, 
{ 
    timestamps: true 
}

);

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;