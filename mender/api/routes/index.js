var express = require('express');
var router = express.Router();
var mongo = require("mongodb-curd");

const db = "1701B";
const col = "user";

/* GET home page. */
router.post("/api/findUsr", function(req,res,next){
  let id = req.body.id;
    mongo.find(db, col, {"_id":id}, function(result){
      if(!result){
        res.send({
          code:0,
          mes:"查询失败"
        })
      }else{
        res.send({
          code:0,
          mes:"查询成功",
          data:result
        })
      }
    })
})

module.exports = router;
