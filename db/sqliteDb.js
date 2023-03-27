const {Sequelize} = require("sequelize")
const path = require("path")
// 创建链接 实例
const seq = new Sequelize({
    dialect:"sqlite",
    storage:path.join(__dirname,"my.db")
})

//测试链接是否正常
seq.authenticate().then(()=>{
    console.log("链接成功")
}).catch(err=>{
    console.log("链接失败",err)
})


//默认情况下,Sequelize 将保持连接打开状态,并对所有查询使用相同的连接. 如果你需要关闭连接,请调用 sequelize.close()
module.exports = seq