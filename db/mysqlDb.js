// 导入模块
const mysql = require("mysql")
// 配置mysql
const db = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"zaks123",
    database:"nodesql"
})
// 这个sql语句没什么意义 用来测试的 不报错就正常工作
// db.query("select 1",(err,result)=>{
//     if(err) return console.log(err.message)
//     console.log(result)
// })
// db.end()

module.exports=db