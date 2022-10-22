const express = require('express')
const router = express.Router()
// 載入schema
const Url = require('../models/url')
// 載入網址轉換
const shortener = require('../public/javascript/shortener')
// 渲染首頁
router.get('/', (req, res) => {
  res.render('index')
})

// .then(data => data ? data : URL.create({ sourceURL, shortURL: shorten(5) }))
// .then(data => res.render('index', { sourceURL, shortURL: data.shortURL, origin }))
// .catch(err => console.log(err))

// 點擊shortener
router.post('/renew', (req, res) => {
  const hostUrl = req.headers.host
  const inputUrl = req.body.url
  Url.findOne({ inputUrl })
    .lean()
    .then((data) => data ? data : Url.create({ originalUrl: inputUrl, shortUrl: shortener(5) }))
    .then((data) =>
      res.render('renew', { shortUrl: data.shortUrl, hostUrl, originalUrl: inputUrl })
    )
    .catch(err => console.log(err))
  // .then((data) => {

  // if (data.originalUrl !== inputUrl || data === null) {
  //   Url.create({ originalUrl: inputUrl, shortUrl: shortener(5) })
  //     .then(() => res.render('renew'))

  // }
  // else {
  //   res.render('error', { inputUrl })
  // }
  // if (data === null) {
  //   Url.create({ originalUrl: inputUrl, shortUrl: shortener(5) })
  //     .then(() => res.render('renew'))
  // }
  // else { res.render('error', { inputUrl }) }


  // switch (data) {
  //   case data === null:
  //     console.log(data)
  // Url.create({ originalUrl: inputUrl, shortUrl: shortener(5) })
  //   .then(() => res.render('renew'))
  // case data !== data:
  //   Url.create({ originalUrl: inputUrl, shortUrl: shortener(5) })
  //     .then(() => res.render('renew'))
  // default:
  //   // res.render('error', { inputUrl })
  //   console.log('aa')
  // }
})


// })



module.exports = router