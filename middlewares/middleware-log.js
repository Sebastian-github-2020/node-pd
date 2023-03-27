const log = (req,res,next)=>{
    console.log("log中间件-全局")
    req.time = Date.now()
    next()
}

module.exports = log