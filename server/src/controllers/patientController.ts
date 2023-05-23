import '../db-connection'
import Patient from '../models/patient'
import { IPatient } from '../declarations/interfaces'

// Obtener todos los pacientes
export async function getPatients(): Promise<IPatient[]> {
  try {
    const patients: IPatient[] = await Patient.find()
    return patients
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudieron obtener los pacientes')
  }
}

// Obtener un paciente por ID
export async function getPatientById(id: string): Promise<IPatient | null> {
  try {
    const patient: IPatient | null = await Patient.findById(id)
    return patient
  } catch (error) {
    throw new Error('No se pudo obtener el paciente.')
  }
}

// Obtener paciente por email
export async function getPatientByEmail(email: string): Promise<IPatient | null> {
  try {
    const patient: IPatient | null = await Patient.findOne({ email })
    return patient
  } catch (error) {
    throw new Error('No se pudo obtener el paciente.')
  }
}

// Crear un nuevo paciente
export async function createPatient(newPatient: IPatient): Promise<IPatient | null> {
  try {
    const patient = new Patient(newPatient)
    const savedPatient: IPatient = await patient.save()
    return savedPatient
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo crear paciente')
  }
}

// Actualizar un paciente
export async function updatePatient(id: string, updatedPatient: IPatient): Promise<IPatient | null> {
  try {
    const patient: IPatient | null = await Patient.findByIdAndUpdate(id, updatedPatient, { new: true })
    return patient
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo actualizar paciente')
  }
}

// Eliminar un paciente
export async function deletePatient(id: string): Promise<IPatient | null> {
  try {
    const patient = await Patient.findByIdAndDelete(id)
    return patient
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo eliminar el paciente')
  }
}
