import { Schema, model } from "mongoose";

const productSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref:"User" ,required:true},
    productName: { type: String, required: true },
    productDesc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productImg: [{
        url: {type :String, required:true},
        publicId: {type :String, required:true}
    }],
    category: {  //for delete image from cloudinary
        type: String
    },
    brand: {
        type: String,
        
    }
}, { timestamps: true })

const Product = model("Product",productSchema);

export default Product;