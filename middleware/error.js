const ErrorResponse=require('../utils/errorResponse')

const errorHandler=(err,req,res,next)=>{
    let error={...err};

    error.message=err.message;

    
    if(err.code === 1000){
        const message='Duplicate key'
        error=new ErrorResponse(400,message)
    }

    if(err.name === 'ValidatonError'){
        const message=Object.values(err.errors).map(val=>val.message)
        error=new ErrorResponse(400,message)
    }

    res.status(error.statusCode || 500).json({
        success:false,
        error:error.message || 'Server Error'
    })
}

module.exports=errorHandler