const mongoose = require('mongoose')

const MONGO_URI =
  'mongodb+srv://root:root@cluster0.ahvp0.mongodb.net/memories?retryWrites=true&w=majority'

// async because we will need to wait for DB response
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('MongDB connection SUCCESS')
  } catch (error) {
    console.error('MongoDB connection FAILED: ', error)
    process.exit(1)
  }
}

mongoose.set('useFindAndModify', false)

// To call this function elsewhere
export default connectDB
