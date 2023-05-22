import '../db-connection'
import Specialty from '../models/specialty'
import { ISpecialty } from '../declarations/interfaces'
import { ObjectId } from 'mongoose'

// Obtener todas las especialidades
export async function getAllSpecialties(): Promise<ISpecialty[]> {
  try {
    const specialties: ISpecialty[] = await Specialty.find()
    return specialties
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudieron obtener las especialidades')
  }
}

// Obtener una especialidad por ID
export async function getSpecialtyById(specialtyId: string): Promise<ISpecialty | null> {
  try {
    const specialty: ISpecialty | null = await Specialty.findById(specialtyId)
    return specialty
  } catch (error) {
    throw new Error('No se pudo obtener la especialidad')
  }
}
export async function getSpecialtyByName(specialtyName: string): Promise<ISpecialty | null> {
  try {
    const specialty: ISpecialty | null = await Specialty.findOne({ name: specialtyName })
    return specialty // Envía la especialidad encontrada 
  } catch (error) {
    throw new Error('No se pudo obtener la especialidad')
  }
}
