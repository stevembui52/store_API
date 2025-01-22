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
    const {featured, company, name, sort} = req.query
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
    if (name){
        queryObject.name = {$regex:name, $options: "i"}
    }
    let result =   Product.find(queryObject)
    if (sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else{
        result = result.sort("createdAt")
    }
    const products = await result
    res.status(200).json({products, nbHits:products.length});
    
}   


export { getProducts, getProductsStatic };