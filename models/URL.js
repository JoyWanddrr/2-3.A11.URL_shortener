const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema(
  // 網址會有兩種，一種是輸入的，一種是輸出的。
  {
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
  })


module.exports = mongoose.model('Url-List', urlSchema)