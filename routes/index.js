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
            res.render('index', { shortUrl: urlData.shortUrl, inputUrl, hostUrl }))
      }
    })

    .catch(err => console.log(err))
})


// 當不同網址卻產生重複的shortUrl，但是我測試會無法抓取重複的shortUrl。
// router.get('/:shortUrl', (req, res) => {
//   const shortUrl = req.params.shortURL
//   Url.findOne({ shortUrl })
//     .lean()
//     .then(data => {
//       // 找到重複
//       if (data) {
//          res.render('error',{errorShort:`{req.headers.host}\{shortUrl}`}) 
//       }
//     })
//     .catch(err => console.log(err))
// })


module.exports = router