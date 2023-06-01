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

// Obtener un especialista por email
export async function getSpecialistByEmail(email: string): Promise<ISpecialist | null> {
  try {
    const specialist: ISpecialist | null = await Specialist.findOne({ email })
    return specialist
  } catch (error) {
    throw new Error('No se pudo obtener el especialista.')
  }
}

// Crear un nuevo especialista
export async function createSpecialist(newSpecialist: any, refreshToken: string) {

  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingSpecialist = await Specialist.findOne({ email: newSpecialist.email }).exec();
    if (existingSpecialist) {
      return false
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
  reviews: ObjectId[],
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
        code,
        redirect_uri: 'https://dev.d2mgpjd3ipukhz.amplifyapp.com/'
      })
    }

    const refreshToken = fetch('https://auth.calendly.com/oauth/token', options)
      .then(async response => await response.json())
      .then(response => response.refresh_token)
      .catch(err => {
        console.error(err)
        throw new Error('No se pudo obtener el refreshToken.')
      })
    return await refreshToken
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
    console.log(responseJson);

    const { access_token, owner, refresh_token } = await responseJson
    const user = await getCalendlyData(access_token, owner)
    console.log(user);

    if (!user) return false
    const specialist = await getSpecialistByEmail(user.email)
    //actualizar refresh_token
    if (specialist) {
      const updatedSpecialist = await updateCalendlyToken(specialist._id, refresh_token)
      console.log(updatedSpecialist);

    }

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

export async function getCalendlyEvent(accessToken: string, owner: string) {
  try {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };

    const specialistEvents = await fetch(`https://api.calendly.com/scheduled_events?user=${owner}`, options)
      .then(response => response.json())
    const eventWithName = await specialistEvents.collection.filter((event: { name: string }) => event.name === "E-Medica");
    return eventWithName
  } catch (error) {

  }

}

export async function updateCalendlyToken(id: string, calendlyToken: string) {
  try {

    const specialist: ISpecialist | null = await Specialist.findByIdAndUpdate(id, { calendlyToken }, { new: true })
    return specialist
  } catch (error) {
    console.log(error);

  }
}
/*
export async function crearUsuariosDesdeJSON() {
  try {
    const data = await fs.promises.readFile('./seed.json', 'utf8');
    const usuariosJSON = JSON.parse(data);

    for (const usuarioData of usuariosJSON) {
      const usuario = new Specialist(usuarioData);
      await usuario.save();
      console.log(`Usuario creado: ${usuario.firstName} ${usuario.lastName}`);
    }

    console.log('Todos los usuarios han sido creados correctamente.');
  } catch (error) {
    console.error('Error al crear los usuarios:', error);
  }
}*/