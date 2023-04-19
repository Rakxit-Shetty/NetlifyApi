const express=require('express');
const serverless=require('serverless-http');
const app=express();
const router=express.Router();

router.get('/',(req,res)=>{
    res.json({"name":"Abhishek", "Age":23,"Company":"Pinnacle technologies", "task":"Entha Task Chill manpun"});
})

router.get('/2',(req,res)=>{
    res.json({"hello2":"2"});
})

router.get('/hello3',(req,res)=>{
    res.json({"we":"3"});
})
app.use('/',router);

///app.listen(3000,()=>console.log("running"));
module.exports.handler = serverless(app);
