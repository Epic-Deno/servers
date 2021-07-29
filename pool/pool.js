/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2019-12-19 17:51:01
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-11 09:44:51
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    database:'pony',
    user:'root',
    password:'ponyzhang',
});
pool.getConnection(function(err,conection){
    if(err){
        console.log('与mysql数据库建立连接失败');
    }else{
        console.log('与mysql数据库建立成功');
        // conection.query('select * from ALL_PLUGINS',function(err,rows){
        //     if(err){
        //         console.log('数据查询失败');

        //     }else{
        //         console.log(rows);
        //         pool.end();
        //     }
        // })
    }
})
module.exports=pool;