const ErrorResponse=require('../utils/errorResponse')

const errorHandler=(err,req,res,next)=>{
    let error={...err};

    error.message=err.message;

    console.log(err);
    if(err.code === 1000){
        const message='Duplicate key'
        error=new ErrorResponse(message,400)
    }

    if(err.name === 'ValidatonError'){
        const message=Object.values(err.errors).map(val=>val.message)
        error=new ErrorResponse(message,400)
    }

    res.status(error.statusCode || 500).json({
        success:false,
        error:error.message || 'Server Error'
    })
}

module.exports=errorHandler