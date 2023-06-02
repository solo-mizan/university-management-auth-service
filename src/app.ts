import express, { Application } from 'express';
import { Request, Response } from 'express';
const app: Application = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;