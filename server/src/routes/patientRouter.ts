import express, { Request, RequestHandler, Response } from 'express'
import {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from '../controllers/patientController'

const patientRouter = express.Router()

// Obtener todos los pacientes
patientRouter.get('/', (async (req: Request, res: Response) => {
  try {
    const patients = await getPatients()
    res.json(patients)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudieron obtener los pacientes' })
  }
}) as RequestHandler)

// Obtener un paciente por ID
patientRouter.get('/:id', (async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const patient = await getPatientById(id)
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    }
    res.json(patient)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener el paciente' })
  }
}) as RequestHandler)

// Crear un nuevo paciente
patientRouter.post('/', (async (req: Request, res: Response) => {
  const newPatient = req.body
  try {
    const patient = await createPatient(newPatient)
    res.json(patient)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo crear el paciente' })
  }
}) as RequestHandler)

// Actualizar un paciente
patientRouter.put('/:id', (async (req: Request, res: Response) => {
  const { id } = req.params
  const updatedPatient = req.body
  try {
    const patient = await updatePatient(id, updatedPatient)
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    }
    res.json(patient)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo actualizar el paciente' })
  }
}) as RequestHandler)

// Eliminar un paciente
patientRouter.delete('/:id', (async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const patient = await deletePatient(id)
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    }
    res.json({ message: 'Paciente eliminado correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo eliminar el paciente' })
  }
}) as RequestHandler)

export default patientRouter
