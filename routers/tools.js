const express = require("express")
const router = express.Router();


// 上传文件
router.get("/upload",(req, res) => {
    res.redirect("upload.html")
})
router.post("/upload",(req, res) => {

 res.send({
     "title":"文件上传"
 })
})


module.exports = router