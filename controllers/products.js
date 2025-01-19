import Product from "../models/Product.js"


const getProductsStatic = async (req, res) =>{
    const products = await Product.find({
        name:"wooden desk",
        rating:4.5,
        price:40
    })
    res.status(200).json({products})
}

const getProducts = async (req, res) =>{
    const {featured, company} = req.query
    const queryObject = {}

    if(featured){

        if(featured === 'true'){
            queryObject.featured = true
        }
        else{
            queryObject.featured = false
        }
        //queryObject.featured = featured === true ? true: false
    }
    if (company){
        queryObject.company = company
    }
    const products =  await Product.find(queryObject)
    res.status(200).json({products, nbHits:products.length});
    
}   


export { getProducts, getProductsStatic };