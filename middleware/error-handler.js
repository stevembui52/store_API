import  {CustomApiError} from '../custom_error/custom-error.js'

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    return res.status(400).json({msg: err.message});
}

export default errorHandler;