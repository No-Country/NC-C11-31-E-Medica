import Appointment from '../models/appointment'
import { IAppointment } from '../declarations/interfaces'
import { getCalendlyCredendtials } from './specialistController'
import { getSpecialistById } from './specialistController'
import axios from 'axios';


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
    console.log("controller", error);

    throw new Error('Error al crear el appointment.')
  }
}

export const getCalendlyAppointment = async (specialistId: any, calendlyUri: string) => {
  try {
    const specialist = await getSpecialistById("6470a37364cbdae90154967d") //deberia ir specialistId
    if (!specialist) throw new Error('Error al obtener el especialista')

    const credentials = await getCalendlyCredendtials(specialist.calendlyToken)
    if (!credentials) throw new Error('Error al obtener las credenciales')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${credentials.accessToken} `
      }
    };

    console.log("aaaaaa");

    const eventInfo = await axios.get(calendlyUri, options)
    console.log("bbbb");

    console.log(eventInfo.data);

    return eventInfo.data
  } catch (error) {
    console.log(error);

  }
}
// Actualizar un appointment por su ID
export const updateAppointmentById = async (appointmentId: string, updatedAppointment: Partial<IAppointment>): Promise<IAppointment | null> => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(appointmentId, updatedAppointment)
    return appointment
  } catch (error) {
    throw new Error('Error al actualizar el appointment por su ID.')
  }
}
