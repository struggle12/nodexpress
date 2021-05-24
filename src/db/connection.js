// 引入 dotenv 从隐藏文件中读取环境变量
const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');

//使用环境变量连接数据库
var connection = mysql.createConnection({     
    host     : process.env.DB_HOST,       
    user     : process.env.DB_USER,              
    password : process.env.DB_PASS,       
    port: process.env.DB_PORT,                   
    database: process.env.DB_NAME 
  }); 
// 使得数据库连接可以被其他引用
module.exports =  connection;
