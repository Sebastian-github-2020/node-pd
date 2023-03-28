const express = require("express")
const routers = require("./routers/test")
const userRouter = require("./routers/user")
const tools = require("./routers/tools")
//导入中间件
const {log,err} = require("./middlewares/index")
// 导入跨域组件
const cors = require("cors")
// 创建express服务器对象
const app = express()
// 指定模板存放目录
app.set("views","views")
// 指定模板引擎是Handlebars
app.set("view engine",'hbs')

//注册全局中间件
app.use(log)
// 注册跨域
app.use(cors())
//注册请求体解析
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//静态文件托管
app.use(express.static("public"))

//注册路由
app.use(routers)
app.use(tools)
app.use(userRouter)

//注册捕获异常的中间件
app.use(err)
app.listen(8888,"0.0.0.0",()=>{
    console.log("http://127.0.0.1:8888")
})