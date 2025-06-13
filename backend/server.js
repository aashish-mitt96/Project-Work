import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import userRoutes from './routes/userRoutes.js'
import { connectDB } from './config/db.js'
import cookieParser from "cookie-parser";
import chatRoutes from './routes/chatRoute.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get('/', (req,res) => {
    res.send("Hello World!")
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`)
    connectDB()
})