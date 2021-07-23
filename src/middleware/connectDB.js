const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const dbName = process.env.DB_NAME

const connectDB = (req, res, next) => {
  try {
    client.connect(async (err, client) => {
      if (err) {
        return res.send({
          status: 'failed',
          message: 'Server Error: Gagal Koneksi ke Database',
        })
      }

      // pilih database
      const db = client.db(dbName)
      req.db = db
      next()
    })
  } catch (error) {
    console.log(error)
    res.send({
      status: 'failed',
      message: 'Server Error',
    })
  }
}

module.exports = { connectDB }
