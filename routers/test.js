const express = require("express")
const router = express.Router()


router.get("/",(req, res) => {
    res.redirect("index.html")
})

router.get("/user",(req, res) => {
    res.send({
        "name":"zaks",
        "time":req.time
    })
})

module.exports=router