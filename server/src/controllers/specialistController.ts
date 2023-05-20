import '../db-connection'
import Specialist from '../models/specialist'
import { ISpecialist } from '../declarations/interfaces'
import { ObjectId } from 'mongoose'

// Obtener todos los especialistas
export async function getSpecialists (): Promise<ISpecialist[] | null> {
  try {
    const specialists: ISpecialist[] = await Specialist.find({})
      .populate('specialty')
      // .populate('reviews')
    // const specialistsWithRating = specialists.map(specialist => {
    //   return specialist.reviews.map(review => )
    // })
    return specialists
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se encontraron especialistas.')
  }
}

// Obtener especialistas por nombre/apellido
export async function getSpecialistsByName (terms: string): Promise<ISpecialist[]> {
  try {
    const names = terms.toLowerCase()
      .split(' ')
      .filter(term => term !== '')
      .join(' ')
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
    const specialists: ISpecialist[] | null = await Specialist.find()
      .populate('specialty')
    // .populate('Review')
    const matches = specialists
      .filter(specialist => names.includes(specialist.firstName.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')) || names.includes(specialist.lastName.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')))
    return matches
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se encontraron especialistas.')
  }
}

// Obtener especialistas por especialidad
export async function getSpecialistsBySpecialty (specialty: string): Promise<ISpecialist[]> {
  try {
    const specialists: ISpecialist[] | null = await Specialist.find({ specialty })
      .populate('specialty')
      .exec()
    // .populate('Review')
    return specialists
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se encontraron especialistas con la especialidad ingresada.')
  }
}

// Obtener un especialista por ID
export async function getSpecialistById (id: string): Promise<ISpecialist | null> {
  try {
    const specialist: ISpecialist | null = await Specialist.findById(id)
      .populate('specialty')
    return specialist
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo obtener el especialista.')
  }
}

// Crear un nuevo especialista
export async function createSpecialist (
  firstName: string,
  lastName: string,
  dni: string,
  rup: string,
  email: string,
  signatureLink: string,
  calendarLink: string,
  mercadoPago: string,
  specialty: ObjectId
): Promise<ISpecialist | null> {
  try {
    const newSpecialist = { firstName, lastName, dni, rup, email, signatureLink, calendarLink, mercadoPago, specialty }
    const specialist = new Specialist(newSpecialist)
    const savedSpecialist: ISpecialist = await specialist.save()
    return savedSpecialist
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo crear el especialista.')
  }
}

// Actualizar un especialista
export async function updateSpecialist (
  id: string,
  firstName: string,
  lastName: string,
  dni: string,
  rup: string,
  email: string,
  signatureLink: string,
  calendarLink: string,
  mercadoPago: string,
  specialty: ObjectId,
  reviews: ObjectId[]
): Promise<ISpecialist | null> {
  try {
    const updatedSpecialist = { firstName, lastName, dni, rup, email, signatureLink, calendarLink, mercadoPago, specialty, reviews }
    const specialist: ISpecialist | null = await Specialist.findByIdAndUpdate(id, updatedSpecialist, { new: true })
      .populate('specialty')
    return specialist
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo actualizar el especialista.')
  }
}

// Eliminar un especialista
export async function deleteSpecialist (id: string): Promise<ISpecialist | null> {
  try {
    const specialist = await Specialist.findByIdAndDelete(id)
      .populate('specialty')
    return specialist
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo eliminar el especialista.')
  }
}
