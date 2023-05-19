import express from 'express'
import specialtyRouter from './specialtyRouter'
import healthCheckRouter from './healthCheckRouter'

import specialistRouter from './specialistRouter'
import appointmentRouter from './appointmentRouter'
import patientRouter from './patientRouter'

const router = express.Router()

router.use('/health-check', healthCheckRouter)

router.use('/specialty', specialtyRouter)


router.use('/specialist', specialistRouter)

router.use('/appointment', appointmentRouter)

router.use('/patient', patientRouter)


export default router
