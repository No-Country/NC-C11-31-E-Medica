import { Router, Request, Response, RequestHandler } from 'express'
import { getAppointments, getAppointmentById, createAppointment, updateAppointmentById } from '../controllers/appointmentController'
import { appointmentValidation, idValidation } from '../validations'
import { validationResult } from 'express-validator'

const appointmentRouter = Router()

// Ruta para obtener todos los appointments
appointmentRouter.get('/', (async (req: Request, res: Response) => {
  try {
    const appointments = await getAppointments()
    res.status(200).json(appointments)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener los appointments' })
  }
}) as RequestHandler)

// Ruta para obtener un appointment por su ID
appointmentRouter.get('/:appointmentId?', idValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() });
    }
    const { appointmentId } = req.params

    const appointment = await getAppointmentById(appointmentId)
    if (appointment) {
      res.status(200).json(appointment)
    } else {
      return res.status(404).json({ error: 'Appointment no encontrado.' })
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el appointment' })
  }
}) as RequestHandler)

// Ruta para crear un nuevo appointment
appointmentRouter.post('/', appointmentValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() });
    }
    const newAppointment = req.body
    const appointment = await createAppointment(newAppointment)
    res.json(appointment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo crear el appointment' })
  }
}) as RequestHandler)

// Ruta para actualizar un appointment por su ID
appointmentRouter.put('/:appointmentId', idValidation, appointmentValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() });
    }
    const { appointmentId } = req.params
    const updatedAppointment = req.body
    const appointment = await updateAppointmentById(appointmentId, updatedAppointment)
    if (appointment === null) {
      return res.status(404).json({ error: 'Appointment no encontrado.' })
    }
    res.json(appointment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo actualizar el appointment' })
  }
}) as RequestHandler)

export default appointmentRouter
