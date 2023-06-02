import express, { Application } from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
const app: Application = express()
const port = 3000;

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;