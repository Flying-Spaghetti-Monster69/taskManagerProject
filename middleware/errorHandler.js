const {CustomAPIError} = require('../errors/customError')
const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    console.log(err);
    return res.status(500).json({msg:'something went wrong :C, check the path and try again'})
}

module.exports = errorHandlerMiddleware