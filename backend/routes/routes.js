const express = require('express');
const router = express.Router();

const {formDB} = require('../models/model');

router.get('/item',(req,res)=>{
    formDB.find({})
    .then(data=>{
        res.json(data)})
    .catch(err=>{
        res.json(err)
    })
    
})

router.post('/item',(req,res)=>{
    const newItem = formDB({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    })
    newItem.save()
    .then(data=>{
        res.json(data);
        console.log("POST SUCCESSFUl")
    })
    .catch(err=>{
        res.json(err);
        console.log(err)
    })
    
})

module.exports = router;