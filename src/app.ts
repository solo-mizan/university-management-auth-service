import express, { Application } from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
const app: Application = express()

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors policy
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
