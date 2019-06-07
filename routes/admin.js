const express = require('express')
const router = express.Router()
//const mongoose = require("mongoose")
//require("../game/Char")
//require("../game/sketch")
//const New_Adventure = mongoose.model("new_adventure")

router.get('/', (req, res)=>{
    res.render('main/home')
})
router.get('/produtos', (req, res)=>{
    res.render('main/produtos')
})
router.get('/orcamentos', (req, res)=>{
    res.render('main/orcamentos')
})

module.exports = router