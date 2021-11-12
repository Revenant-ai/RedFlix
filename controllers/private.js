exports.getPrivateData=(req,res,next)=>{
    res.status(200).json({
        message:'you have acess to private data on this route'
    })
}