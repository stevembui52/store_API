import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Product name cannot be blank'],
        trim:true
    },
    price:{
        type:Number,
        required:[true, 'Product price cannot be blank'],
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea', 'liddy', 'caressa', 'marcos'],
            message:'{VALUE} is not supported'
        }
    }
})

export default mongoose.model('Product', productSchema)