import dotenv from "dotenv"
dotenv.config()

import express from "express"
import bodyParser from "body-parser"
import newsApiRoutes from "./newsapi"

const app = express()

app.use(bodyParser.json())

newsApiRoutes(app)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening to ${PORT}`))

export { app }
