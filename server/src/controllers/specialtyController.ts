import '../db-connection'
import Specialty from '../models/specialty'
import { ISpecialty } from '../declarations/interfaces'

// Crear una nueva especialidad
export async function createSpecialty(
  name: string,
  description: string,
  active: boolean
): Promise<ISpecialty> {
  try {
    const newSpecialty = new Specialty({
      name,
      description,
      active
    })

    const savedSpecialty: ISpecialty = await newSpecialty.save()
    return savedSpecialty
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo crear la especialidad')
  }
}

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
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo obtener la especialidad')
  }
}

