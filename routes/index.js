const express = require('express')
const url = require('../models/url')
const router = express.Router()
// 載入schema
const Url = require('../models/url')
// 載入網址轉換
const shortener = require('../public/javascript/shortener')



// 渲染首頁
router.get('/', (req, res) => {
  res.render('index')
})

// 點擊shortener button
router.post('/', (req, res) => {
  const hostUrl = req.headers.host
  const inputUrl = req.body.url
  Url.findOne({ originalUrl: inputUrl })
    .lean()
    .then((urlData) => {
      // 已轉換過的url
      if (urlData) {
        res.render('error', { shortUrl: urlData.shortUrl, inputUrl, hostUrl })
      }
      else {
        Url.create({ originalUrl: inputUrl, shortUrl: shortener(5) })
          .then((urlData) =>
            res.render('index', { shortUrl: urlData.shortUrl, hostUrl }))
      }
    })

    .catch(err => console.log(err))
})


// 點擊網址之後，找尋資料庫的轉換成原網址。
router.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  Url.find({ shortUrl })
    .lean()
    .then(data => {
      // 比對失敗，重新輸入，原本想要在這裡改變刪除重複的shortUrl，結果一直無法成功。
      if (data.length > 1) {
        res.render('error')
      }
      // 比對成功，重新導向原始網頁
      if (data.length === 1) {
        res.redirect(data[0].originalUrl)
        console.log(data)
      }

    })
    .catch(err => console.log(err))

})

module.exports = router