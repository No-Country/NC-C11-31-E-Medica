import { Router, Request, Response, RequestHandler } from 'express'
import { getAppointments, getAppointmentById, createAppointment, updateAppointmentById } from '../controllers/appointmentController'

const appointmentRouter = Router()

// Ruta para obtener todos los appointments
appointmentRouter.get('/appointments', (async (req: Request, res: Response) => {
  try {
    const appointments = await getAppointments()
    res.json(appointments)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener los appointments' })
  }
}) as RequestHandler)

// Ruta para obtener un appointment por su ID
appointmentRouter.get('/:appointmentId', (async (req: Request, res: Response) => {
  const { appointmentId } = req.params
  try {
    const appointment = await getAppointmentById(appointmentId)
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment no encontrado.' })
    }
    res.json(appointment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener el appointment' })
  }
}) as RequestHandler)

// Ruta para crear un nuevo appointment
appointmentRouter.post('/', (async (req: Request, res: Response) => {
  const newAppointment = req.body
  try {
    const appointment = await createAppointment(newAppointment)
    res.json(appointment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo crear el appointment' })
  }
}) as RequestHandler)

// Ruta para actualizar un appointment por su ID
appointmentRouter.put('/:appointmentId', (async (req: Request, res: Response) => {
  const { appointmentId } = req.params
  const updatedAppointment = req.body
  try {
    const appointment = await updateAppointmentById(appointmentId, updatedAppointment)
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment no encontrado.' })
    }
    res.json(appointment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo actualizar el appointment' })
  }
}) as RequestHandler)

export default appointmentRouter
