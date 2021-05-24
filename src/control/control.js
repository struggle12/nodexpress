const db = require("../db/connection.js");
let control = {

  //查询所有的名曲
    GetAllTune(req,res) {
        db.connect;
        console.log("all");
        db.query(
          //从 Tune 表中读取所有内容
            'SELECT * FROM Tune',
            function (error, results) {
              if (error == null) {
                // 如果没有错则响应一个code为200的json对象
                res.send({
                  code: 200,
                  msg: "查询成功",
                  data: results,
                });
              } else {
                res.send({
                  code: 500,
                  msg: "服务器内部错误",
                });
              }
            }
          );
        db.end;
        },
        //通过名曲的名字查找对应的名曲
        tuneSelectName(req,res) {
        //打印从请求中获取的值
        // console.log(req.params);
        //将 get 请求中的 Tname 赋予 search  
        var search = req.query.Tname;	
        console.log(search);
        let sql = 'SELECT * FROM Tune WHERE Tname LIKE "%'+search+'%"';
        //叠加 search 的内容
        // sql += search;
        // sql += '%"';
        console.log(sql);
        db.query(sql,function (error, results) {
                if (error == null) {
                  // 如果没有错则响应一个code为200的json对象
                  res.send({
                    code: 200,
                    msg: "查询成功",
                    data: results,
                  });
                } else {
                  res.send({
                    code: 500,
                    msg: "服务器内部错误",
                  });
                }
              });
    },
        //名曲收藏时插入名曲和用户信息
        InsertCollection(req,res){
          //将Get请求中获取的openID和TID放到OpenID和TID中
          var TID = req.query.TID;
          var OpenID = req.query.OpenID;
          // console.log(TID);
          // console.log(OpenID);
          let sql = 'insert into collection (openID,TID)  values('+OpenID+','+TID+')';
          console.log(sql);
          db.query(sql,function (error, results) {
            if (error == null) {
              // 如果没有错则响应一个code为200的json对象
              res.send({
                code: 200,
                msg: "插入成功",
                data: results,
              });
            } else {
              res.send({
                code: 500,
                msg: "服务器内部错误",
              });
            }
          });
          
        },
        //取消名曲收藏时删除对应的名曲ID和用户ID
        DelCollection(req,res){
           //将Get请求中获取的openID和TID放到OpenID和TID中
           var TID = req.query.TID;
           var OpenID = req.query.OpenID;
          //  console.log(TID);
          //  console.log(OpenID);
           let sql = 'delete from collection where TID ='+TID;
           console.log(sql);
           db.query(sql,function (error, results) {
             if (error == null) {
               // 如果没有错则响应一个code为200的json对象
               res.send({
                 code: 200,
                 msg: "删除成功",
                 data: results,
               });
             } else {
               res.send({
                 code: 500,
                 msg: "服务器内部错误",
               });
             }
           });
        },

        //统计名曲的收藏数
        Count(req,res){
          var TID= req.query.TID;
          let sql = 'select count(*) as countTID from collection where TID='+TID;
          console.log(sql);
          db.query(sql,function (error, results) {
            if (error == null) {
              // 如果没有错则响应一个code为200的json对象
              res.send({
                code: 200,
                msg: "统计成功",
                data: results,
              });
            } else {
              res.send({
                code: 500,
                msg: "服务器内部错误",
              });
            }
          });
        },

        //列出个人收藏
        showCollection(req,res){
          // var openID= req.openID;
          let sql= 'select * from (collection left join Tune on collection.TID= Tune.TID) where openID=1000';
          console.log(sql);
          db.query(sql,function (error, results) {
            if (error == null) {
              // 如果没有错则响应一个code为200的json对象
              res.send({
                code: 200,
                msg: "查询收藏成功",
                data: results,
              });
            } else {
              res.send({
                code: 500,
                msg: "服务器内部错误",
              });
            }
          });
        },

}


module.exports =  control;