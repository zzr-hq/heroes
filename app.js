//下载express  npm i express -S
const express = require('express')
const app = express()
app.listen(3000, () => console.log(`服务器启动`));
app.use(express.static('public'));
app.use(express.static('public/login'))
app.use(express.static('public/manager'));
 // 下载 npm i body-parser -S
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//get 接口
app.get('/getHeroes',(req,res)=>{
    db('select * from heros order by id desc',null,(err,result)=>{
        if(err)throw err;
        res.send(result);
    });
});