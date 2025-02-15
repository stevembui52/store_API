import Product from "../models/Product.js"


const getProductsStatic = async (req, res) =>{
    const products = await Product.find({ price
        // name:"wooden desk",
        // rating:4.5,
        // price:40
    }).sort("price")
    .select("name price")
    res.status(200).json({products})
}

const getProducts = async (req, res) =>{
    const {featured, company, name, sort, fields, numericFilters} = req.query
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
    if (fields){
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }
    const page = Number(req.query.page)
    const limit = Number(req.query.limit)
    const skip = (page -1) * limit

    result = result.skip(skip).limit(limit)

    if (numericFilters){
        const operatorMap = {
            '>' :'$gt',
            '>=' :'$gte',
            '=' :'$eq',
            '<' :'$lt',
            '<=' :'$lte'
        }

        const regEx = /\b(<|>|=|<=|>=)\b/g
        
        let filters = numericFilters.replace(regEx, (match)=> `-${operatorMap[match]}-`)
        console.log(filters);
        const options = ["price", "rating"]
        filters.split(",").forEach((item) => {
            let [field,operator,value] = item.split("-")
            if (options.includes(field)){
                queryObject[field] = {[operator]: Number(value)}
                console.log(queryObject);
                
            }
            
        });
        result = Product.find(queryObject)
        
    }
    
    const products = await result
    res.status(200).json({products, nbHits:products.length});
    
}   


export { getProducts, getProductsStatic };