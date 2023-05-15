import express, { Request, Response, RequestHandler } from 'express'

const healthCheckRouter = express.Router()

healthCheckRouter.get('/', (async (req: Request, res: Response) => {
  try {
    res.status(200).send('e-medica-API is Up and running')
  } catch (error) {
    res.status(500).json({ error: 'API is failed' })
  }
}) as RequestHandler)

export default healthCheckRouter
