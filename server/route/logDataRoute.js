const express=require('express');
const router=express.Router();
const getLogData=require('../controller/getLogData');

router.get('/api/result',getLogData);
module.exports=router;