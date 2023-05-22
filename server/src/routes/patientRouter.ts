import express, { Request, RequestHandler, Response } from 'express'
import {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
  getPatientByEmail
} from '../controllers/patientController'
import { Types } from 'mongoose'

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
    if (!email) {
      return res.status(400).json({ message: 'Email no ingresado' });
    }
    //TODO: Validacion email valido

    const patient = await getPatientByEmail(email)
    if (patient) {
      res.status(200).json(patient)
    } else {
      return res.status(404).json({ error: 'Paciente no encontrado.' })
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el paciente' })
  }
}) as RequestHandler)

// Obtener un paciente por ID
patientRouter.get('/:id?', (async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    if (!id) {
      return res.status(400).json({ message: 'Id no ingresado' });
    }
    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Identificador de paciente inválido' });
    }
    const patient = await getPatientById(id)
    if (patient) {
      res.status(200).json(patient)
    } else {
      return res.status(404).json({ error: 'Paciente no encontrado.' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener el paciente' })
  }
}) as RequestHandler)

// Crear un nuevo paciente
patientRouter.post('/', (async (req: Request, res: Response) => {
  const { firstName, lastName, dob, gender, dni, email } = req.body

  // Verificar si se proporcionaron todas las propiedades
  if (!firstName || !lastName || !dob || !gender || !dni || !email) {
    return res.status(400).json({ error: 'Faltan propiedades en la solicitud' });
  }
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
patientRouter.put('/:id?', (async (req: Request, res: Response) => {
  const { firstName, lastName, dob, gender, dni, email } = req.body

  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'Id no ingresado' });
  }
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Identificador de especialidad inválido' });
  }
  // Verificar si se proporcionaron todas las propiedades
  if (!firstName || !lastName || !dob || !gender || !dni || !email) {
    return res.status(400).json({ error: 'Faltan propiedades en la solicitud' });
  }
  const updatedPatient = req.body
  try {
    const patient = await updatePatient(id, updatedPatient)
    if (patient) {
      res.status(200).json(patient)
    } else {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el paciente' })
  }
}) as RequestHandler)

// Eliminar un paciente
patientRouter.delete('/:id?', (async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ error: 'Id no ingresado' });
  }

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Identificador de especialidad inválido' });
  }

  try {
    const patient = await deletePatient(id)
    if (patient) {
      res.json({ message: 'Paciente eliminado correctamente' })
    } else {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el paciente' })
  }
}) as RequestHandler)

export default patientRouter
