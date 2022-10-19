const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema(
  {
    url: {
      type: url,
      required: true
    }
  })

module.exports = mongoose.model('Url-List', urlSchema)