import express, { Request, Response, RequestHandler } from 'express'
import { createSpecialty, getAllSpecialties } from '../controllers/specialtyController'

const specialtyRouter = express.Router()

// Ruta para crear una especialidad
specialtyRouter.post('/', (async (req: Request, res: Response) => {
  try {
    const { name, description, active } = req.body

    const specialty = await createSpecialty(name, description, active)

    res.status(201).send({ specialty })
  } catch (error) {
    res.status(500).send({ error: 'Error al crear la especialidad' })
  }
}) as RequestHandler)

specialtyRouter.get('/', (async (req: Request, res: Response) => {
  try {
    const specialties = await getAllSpecialties()

    res.json(specialties)
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las especialidades' })
  }
}) as RequestHandler)
export default specialtyRouter
