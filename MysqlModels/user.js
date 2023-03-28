// 模型类  Sequelize  定义模型
// 用模型来实现增删查改
const {Sequelize, DataTypes} = require("sequelize")
const sqllize = require("../db/ormmysql")

const User = sqllize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name"
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"age"
    }

},
    {
        tableName:"users",
        createdAt:false,// 默认会添加这个键
        updatedAt:false,// 默认会添加这个键
    })

module.exports = User