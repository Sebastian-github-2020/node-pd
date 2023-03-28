const err = (err,req,res)=>{
    if(err.message){
        console.log("异常信息",err.message)
    }

}

module.exports = err