import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import postRoutes from './routes/posts'
import connectDB from './config/db'

const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))

app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

app.use('/posts', postRoutes)

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
