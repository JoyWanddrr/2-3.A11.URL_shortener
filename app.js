const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// // 設定環境變數
// mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true })
// // 設定伺服器連接
// const db = mongoose.connection
// db.on('error', () => {
//   console.log('mongodb error!')
// })
// db.once('open', () => {
//   console.log('mongodb connected')
// })
// 載入handlebars
const exphbs = require('express-handlebars')
// 載入engine，預設首頁main。要加.engine，因為express的版本不同
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 要使用圖片必須載入靜態檔案
app.use(express.static('public'))
// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

// 啟動
app.listen(3000, () => {
  console.log('Express start success.')
})