import express from 'express'
import specialtyRouter from './specialtyRouter'
import healthCheckRouter from './healthCheckRouter'
import specialistRouter from './specialistRouter'
const router = express.Router()

router.use('/health-check', healthCheckRouter)

router.use('/specialty', specialtyRouter)

router.use('/specialist', specialistRouter)

export default router
