require('module-alias/register')
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'

const app: express.Application = express()

app.use(bodyParser.json())

export { app }
