const {json} = require('express');
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const posts = [ ]

fs.readFile('./data.json',(err,data)=>{
    if(err){
        console.log('something went wrong');
    }
    posts = data 
})

router.get('/',(req,res,next)=>{
    res.json(posts);
})
module.exporst{
    router
}