const express = require("express")
const userRouter = express.Router()
const sqldb = require("../db/mysqlDb")


// 导入orm模型
const UserModel = require("../MysqlModels/user")
// 导入sequelize实例
const sequelize = require("../db/ormmysql")
// 添加学生信息
userRouter.post("/addUser", (req, res) => {
    let {name, age} = req.body
    sqldb.query("insert into user set ?", {name, age}, (err, result) => {
        if (err) {
            console.log(err.message)
        } else {
            res.send({
                code: 200,
                msg: "插入成功"
            })
            sqldb.end(err => {
                if (err) {
                    console.log(err.message)
                    return
                }
                console.log("断开sql连接")
            })
        }
    })


})

//添加学生信息 用orm工具  Sequelize  模型
userRouter.post("/addOneUser", async (req, res) => {
    let {name, age} = req.body
    let user = await UserModel.build(req.body)
    let mes = await user.save()
    console.log(mes)

})

// 根据id查询学生信息
userRouter.get("/userinfo/:id",async (req, res) => {
    let {id} = req.params
    let user = await UserModel.findOne({where:{id:id}})
    res.send(user)
})

// 查询所有user信息 带分页 和总量
userRouter.get("/alluser",async (req, res) => {
    let {pageSize,pageNum} = req.query
    console.log(req.query)
    let users = await UserModel.findAll()
    let count = users.length
    let users1 = await UserModel.findAll({limit:parseInt(pageSize),offset:(parseInt(pageNum)-1)*parseInt(pageSize)})


    res.send({
        code:200,
        msg:"查询成功",
        data:users1,
        count
    })
})
// 查询user 查询条件 如 id=1  age>20
const {Op} =require("sequelize")
userRouter.get("/userConditions", async (req, res) =>{
    let users = await UserModel.findAll({
        where:{
            // id:1
            id:{
                [Op.or]:[1,2]
            },
            // 大于20
            // age:{
            //     [Op.gt]:19
            // }
        }
    })
    res.send({
        code:200,
        msg:"ok",
        data:users
    })
})


// 查询部分字段
userRouter.get("/partuser", async (req,res)=>{
    let {pageSize,pageNum} = req.query
    console.log(req.query)
    let users = await UserModel.findAll({
        limit:parseInt(pageSize),
        offset:(parseInt(pageNum)-1)*parseInt(pageSize),
        attributes:[['name',"dalao"],['age',"suishu"],

        ]
    })
    res.send({
        code:200,
        msg:"查询成功",
        data:users
    })
})
module.exports = userRouter