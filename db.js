module.exports = (sql,value,cb)=>{
    //下载npm i mysql -S
    const mysql = require('mysql')
    //链接数据库
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'hero',
        multipleStatements:true // 支持执行多条 sql 语句
    })
    //执行sql语句
    conn.query(sqlStr1, value ,cb,  {
        
    })
    conn.connect();
    conn.end();
}