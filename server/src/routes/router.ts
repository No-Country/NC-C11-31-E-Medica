import express from 'express'
import specialtyRouter from './specialtyRouter'

const router = express.Router()

router.use('/specialty', specialtyRouter)

export default router
