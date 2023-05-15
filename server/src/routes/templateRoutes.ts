import express from 'express'
import cors from 'cors'
// import { exampleController1 } from '../controllers/templateControllers'

const templateRouter = express.Router()

templateRouter.get('/example', cors(), (_req, res) => {
  try {
    // exampleController1().then(exampleDocument => {
    //   res.json(exampleDocument)
    // }).catch(() => {
    //   console.log('No example document found')
    // })
    res.json('Hello World!')
  } catch (error) {
    console.log(error)
  }
})

export default templateRouter
