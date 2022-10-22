const db = require('./../../config/mongoose')

// 載入 restaurant model
const url = require('../url')

// export的db用在這裡。
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 10; i++) {
    url.create({ url: `url-${i}` })
  }
  console.log('done')
})

// 這個應該用不到，直接在router新增?