import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import { connectDB } from './config/db.js'
import cookieParser from "cookie-parser";

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser());

app.get('/', (req,res) => {
    res.send("Hello World!")
})

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`)
    connectDB()
})