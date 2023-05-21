import express from "express";
import cors from "cors"
import { config } from "dotenv";
import Connect from "./Database/Connect.js"
config()
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000
app.listen(port, () => {
    Connect()
    console.log("Server is Runing On Port:", port)
})