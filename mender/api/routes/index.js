var express = require('express');
var router = express.Router();
var mongo = require("mongodb-curd");

const db = "1701B";
const col = "user";

//添加
router.post("/api/getadd", function (req, res, next) {
  let data = req.body;
  // delete data.id;
  if (data.name && data.age && data.sex && data.addrees && data.phone) {
    mongo.insert(db, col, data, function (result) {
      if (!result) {
        res.send({
          code: 0,
          mes: "添加失败"
        })
      } else {
        res.send({
          code: 0,
          mes: "添加成功",
          data: result
        })
      }
    })
  }else {
    res.send({
      code: 3,
      mes: "内容不全"
    })
  }

})

//查询
router.post("/api/findUsr", function (req, res, next) {
  let data = req.body;
  mongo.find(db, col, data, function (result) {
    if (!result) {
      res.send({
        code: 0,
        mes: "查询失败"
      })
    } else {
      res.send({
        code: 0,
        mes: "查询成功",
        data: result
      })
    }
  })
})

//详细查询
router.post("/api/findone", function (req, res, next) {
  let id = req.body.id;
  mongo.find(db, col, {
    "_id": id
  }, function (result) {
    if (!result) {
      res.send({
        code: 0,
        mes: "查询失败"
      })
    } else {
      res.send({
        code: 0,
        mes: "查询成功",
        data: result
      })
    }
  })
})

//改
router.post("/api/addupdate", function (req, res, next) {
  let data = req.body;
  let id = data.id;
  delete data.id;
  mongo.update(db, col, [{
    "_id": id
  }, data], function (result) {
    if (!result) {
      res.send({
        code: 0,
        mes: "更改失败"
      })
    } else {
      res.send({
        code: 0,
        mes: "更改成功",
        data: result
      })
    }
  })
})

//删除
router.post("/api/getdelete", function (req, res, next) {
  let id = req.body.id;
  // delete data.id;
  mongo.remove(db, col, {
    "_id": id
  }, function (result) {
    if (!result) {
      res.send({
        code: 0,
        mes: "删除失败"
      })
    } else {
      res.send({
        code: 0,
        mes: "删除成功",
        data: result
      })
    }
  })
})


module.exports = router;