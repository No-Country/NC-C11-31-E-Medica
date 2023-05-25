import '../db-connection'
import Specialist from '../models/specialist'
import { ISpecialist } from '../declarations/interfaces'
import { ObjectId } from 'mongoose'

// Obtener todos los especialistas
export async function getSpecialists(): Promise<ISpecialist[] | null> {
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
export async function getSpecialistsByName(terms: string): Promise<ISpecialist[]> {
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
export async function getSpecialistsBySpecialty(specialty: string): Promise<ISpecialist[]> {
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
export async function getSpecialistById(id: string): Promise<ISpecialist | null> {
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
export async function createSpecialist(newSpecialist: any, refreshToken: string): Promise<ISpecialist | null> {
  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingSpecialist = await Specialist.findOne({ email: newSpecialist.email }).exec();
    if (existingSpecialist) {
      throw new Error('El especialista ya existe en la base de datos');
    }
    const specialist = new Specialist({ ...newSpecialist, calendlyToken: refreshToken })
    const savedSpecialist: ISpecialist = await specialist.save()
    return savedSpecialist
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo crear el especialista.')
  }
}

// Actualizar un especialista
export async function updateSpecialist(
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
export async function deleteSpecialist(id: string): Promise<ISpecialist | null> {
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

export async function getRefreshToken(code: string): Promise<string> {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('uoB6oI_BXqLz8yWmKInA9YZ4VLEAsbjuSU_BCl4pzhI:yv8XODn_azGYc8zFtTQogE3FwXsBLqtYv4kKwOtBDes')
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'https://dev.d2mgpjd3ipukhz.amplifyapp.com/'
      })
    };

    const refreshToken = fetch('https://auth.calendly.com/oauth/token', options)
      .then(response => response.json())
      .then(response => response.refresh_token)
      .catch(err => {
        console.error(err);
        throw new Error('No se pudo obtener el refreshToken.');
      });
    return refreshToken
  } catch (error) {
    throw new Error('No se pudo obtener el refreshToken.')
  }
}

export async function getCalendlyCredendtials(refreshToken: string) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('uoB6oI_BXqLz8yWmKInA9YZ4VLEAsbjuSU_BCl4pzhI:yv8XODn_azGYc8zFtTQogE3FwXsBLqtYv4kKwOtBDes')
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      })
    };

    const response = await fetch('https://auth.calendly.com/oauth/token', options)
    const responseJson = await response.json()
    const { access_token, owner } = responseJson
    //actualizar refresh_token
    const credentials = {
      accessToken: String(access_token),
      owner: String(owner)
    }
    return credentials
  } catch (error) {
    console.log(error);

  }
}

export async function getCalendlyData(accessToken: string, owner: string) {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };

    const response = await fetch(`${owner}`, options)
    const responseJson = await response.json()

    const names = responseJson.resource.name.split(" ")
    const userFormat = {
      email: String(responseJson.resource.email),
      firstName: String(names[0]),
      lastName: String(names[1]),
      calendlyLink: String(responseJson.resource.scheduling_url),
    }

    return userFormat
  } catch (error) {
    console.log(error);

  }
}

