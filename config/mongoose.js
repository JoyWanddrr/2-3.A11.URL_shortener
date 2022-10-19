const mongoose = require('mongoose')
// 設定環境變數
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true })
// 設定伺服器連接
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected')

})

// 自建模組
module.exports = db