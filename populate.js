import dotenv from "dotenv";
import connect from "./db/connect.js";
import Product from "./models/Product.js"
import jsonproduct from "./products.json" assert {type:"json"};

const dtenv = dotenv.config()

const MONGO_URI = process.env.MONGO_URI

const start = async ()=>{
    try {
        await connect(MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonproduct)
        console.log("Success!!!!!!!!!!")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

start()