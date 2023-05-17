import Appointment from '../models/appointment'
import { IAppointment } from '../declarations/interfaces'

// Obtener todos los appointments
export const getAppointments = async (): Promise<IAppointment[]> => {
  try {
    const appointments = await Appointment.find()
    return appointments
  } catch (error) {
    throw new Error('Error al obtener los appointments.')
  }
}

// Obtener un appointment por su ID
export const getAppointmentById = async (appointmentId: string): Promise<IAppointment | null> => {
  try {
    const appointment = await Appointment.findById(appointmentId)
    return appointment
  } catch (error) {
    throw new Error('Error al obtener el appointment por su ID.')
  }
}

// Crear un nuevo appointment
export const createAppointment = async (newAppointment: IAppointment): Promise<IAppointment> => {
  try {
    const appointment = await Appointment.create(newAppointment)
    return appointment
  } catch (error) {
    throw new Error('Error al crear el appointment.')
  }
}

// Actualizar un appointment por su ID
export const updateAppointmentById = async (appointmentId: string, updatedAppointment: Partial<IAppointment>): Promise<IAppointment | null> => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(appointmentId, updatedAppointment, { new: true })
    return appointment
  } catch (error) {
    throw new Error('Error al actualizar el appointment por su ID.')
  }
}
