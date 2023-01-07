const mongoose = require('mongoose')

const connectionString = ''

const connectDB = (url) => {
  mongoose.connect(url,{
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
  })

  console.log('Connected to DB')
}

module.exports = connectDB
