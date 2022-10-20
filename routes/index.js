const express = require('express')
const router = express.Router()

// 渲染首頁
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/renew', (req, res) => {
  res.render('renew')
})


module.exports = router