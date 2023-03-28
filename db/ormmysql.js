const {Sequelize} = require("sequelize")
// 配置数据库连接对象

const sqllize = new Sequelize("nodesql","root","zaks123",{
    host:"localhost",
    dialect:"mysql",
    pool:{//连接池
        max:10,
        min:3,
        idle:10000
    },
    define:{
        freezeTableName:true // 模型名就是表名，false 就会出现 复数形式，如 模型名是user表名就是users
    }

})
// //测试连接
// async function abb(){
//     try {
//         await sqllize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// abb()

module.exports = sqllize