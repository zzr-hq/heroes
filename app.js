//下载express  npm i express -S
const express = require('express')
const app = express()
app.listen(3000, () => console.log(`服务器启动`));
app.use(express.static('public'))