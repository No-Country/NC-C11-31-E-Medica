import express, { Request, RequestHandler, Response } from 'express'
import {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
  getPatientByEmail
} from '../controllers/patientController'
import { validationResult } from 'express-validator'
import { patientValidation, idValidation } from '../validations'

const patientRouter = express.Router()

// Obtener todos los pacientes
patientRouter.get('/', (async (_req: Request, res: Response) => {
  try {
    const patients = await getPatients()
    res.json(patients)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudieron obtener los pacientes' })
  }
}) as RequestHandler)

// Obtener un paciente por email
patientRouter.get('/email/:email?', (async (req: Request, res: Response) => {
  try {
    const email = req.params.email
    if (email === null) {
      return res.status(400).json({ message: 'Email no ingresado' })
    }
    // TODO: Validacion email valido

    const patient = await getPatientByEmail(email)
    if (patient === null) {
      return res.status(404).json({ error: 'Paciente no encontrado.' })
    } else {
      res.status(200).json(patient)
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el paciente' })
  }
}) as RequestHandler)

// Obtener un paciente por ID
patientRouter.get('/:id?', idValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() })
    }
    const id = req.params.id

    const patient = await getPatientById(id)
    if (patient === null) {
      return res.status(404).json({ error: 'Paciente no encontrado.' })
    } else {
      res.status(200).json(patient)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener el paciente' })
  }
}) as RequestHandler)

// Crear un nuevo paciente
patientRouter.post('/', patientValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() })
    }
    const newPatient = req.body

    const patient = await createPatient(newPatient)
    res.json(patient)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo crear el paciente' })
  }
}) as RequestHandler)

// Actualizar un paciente
patientRouter.put('/:id?', idValidation, patientValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() })
    }

    const updatedPatient = req.body
    const id = req.params.id
    const patient = await updatePatient(id, updatedPatient)
    if (patient === null) {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    } else {
      res.status(200).json(patient)
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el paciente' })
  }
}) as RequestHandler)

// Eliminar un paciente
patientRouter.delete('/:id?', idValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() })
    }
    const { id } = req.params

    const patient = await deletePatient(id)
    if (patient === null) {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    } else {
      res.json({ message: 'Paciente eliminado correctamente' })
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el paciente' })
  }
}) as RequestHandler)

export default patientRouter
