const express = require('express');

const router = express.Router();

const userRouter = require('./user-router')

router.get('/',(_req,res)=>{
    return res.status(200).json({'message':'Hello, World!'})
})

router.use('/user',userRouter);

module.exports = router;