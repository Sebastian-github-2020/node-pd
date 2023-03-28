const express = require("express")
const router = express.Router()


router.get("/",(req, res) => {
    res.redirect("hello.hbs")
})

router.get("/user",(req, res) => {
    res.send({
        "name":"zaks",
        "time":req.time
    })
})

// 读取路径参数  path参数
router.get("/p/:name/:id",(req, res) => {
    console.log(req.params)
    res.send({
        "title":"读取路径参数",
        ...req.params
    })
})
// 读取查询参数
router.get("/query",(req, res) => {
    res.send({
        "title":"读取查询参数",
        ...req.query
    })
})


// JSON参数
router.post("/add",(req, res) => {
    console.log(req.body)
    res.send(req.body)
})


module.exports=router