const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema(
  {
    url: String,
  })

module.exports = mongoose.model('Url-List', urlSchema)