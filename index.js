import express from "express";
import cors from "cors"
import { config } from "dotenv";
import Connect from "./Database/Connect.js"
import UserRouter from "./Routes/user.routes.js"
import TransactionRouter from "./Routes/transaction.routes.js"
import middleware from "./Middleware/JWTverify.js"

config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/user', UserRouter)
app.use('/transaction', middleware, TransactionRouter)


const port = process.env.PORT || 4000
app.listen(port, () => {
    Connect()
    console.log("Server is Runing On Port:", port)
})