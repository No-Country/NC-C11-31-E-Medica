import { Router, Request, Response, RequestHandler } from 'express'

import { getSpecialists, getSpecialistById, createSpecialist, updateSpecialist, deleteSpecialist, getSpecialistsByName, getSpecialistsBySpecialty, getRefreshToken } from '../controllers/specialistController'
import { validationResult } from 'express-validator'
import { specialistValidation, idValidation } from '../validations'

const specialistRouter = Router()
//TODO: Ruta que traiga el promedio de estrellas en las reviews de medicos


// Ruta para obtener todos los especialistas
specialistRouter.get('/', (async (_req: Request, res: Response) => {
  try {
    const specialists = await getSpecialists()
    res.status(200).json(specialists)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se encontraron especialistas.' })
  }
}) as RequestHandler)

// Ruta para encontrar especialistas por nombre o apellido
specialistRouter.get('/search', (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación.', errors: errors.array() })
    }
    const terms = req.query.terms
    if (typeof terms === 'string') {
      const specialists = await getSpecialistsByName(terms)
      res.json(specialists)
    } else {
      res.json('Los términos de búsqueda no son válidos.')
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener el especialista.' })
  }
}) as RequestHandler)

// Ruta para encontrar especialistas por especialidad
specialistRouter.get('/category/:id', idValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación.', errors: errors.array() })
    }
    const { id } = req.params
    const specialists = await getSpecialistsBySpecialty(id)
    if (specialists === null) {
      return res.status(404).json({ error: 'No se encontraron especialistas con la especialidad ingresada.' })
    }
    res.json(specialists)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudieron obtener los especialistas.' })
  }
}) as RequestHandler)

// Ruta para obtener un especialista por su ID
specialistRouter.get('/:id', idValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación.', errors: errors.array() })
    }
    const { id } = req.params
    const specialist = await getSpecialistById(id)
    if (specialist === null) {
      return res.status(404).json({ error: 'Especialista no encontrado.' })
    }
    res.json(specialist)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo obtener el especialista.' })
  }
}) as RequestHandler)

// Ruta para crear un nuevo especialista
specialistRouter.post('/', specialistValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación.', errors: errors.array() })
    }
    const { firstName, lastName, dni, rup, email, signatureLink, calendarLink, mercadoPago, specialty } = req.body
    const newSpecialist = await createSpecialist(
      firstName,
      lastName,
      dni,
      rup,
      email,
      signatureLink,
      calendarLink,
      mercadoPago,
      specialty)
    res.json(newSpecialist)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo crear el especialista.' })
  }
}) as RequestHandler)

// Ruta para actualizar un especialista por su ID
specialistRouter.put('/:id', idValidation, specialistValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación.', errors: errors.array() })
    }
    const { id } = req.params
    const { firstName, lastName, dni, rup, email, signatureLink, calendarLink, mercadoPago, specialty, reviews } = req.body
    const specialist = await updateSpecialist(
      id,
      firstName,
      lastName,
      dni,
      rup,
      email,
      signatureLink,
      calendarLink,
      mercadoPago,
      specialty,
      reviews)
    if (specialist === null) {
      return res.status(404).json({ error: 'Especialista no encontrado.' })
    }
    res.json(specialist)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo actualizar el especialista.' })
  }
}) as RequestHandler)

// Ruta para eliminar un especialista por su ID
specialistRouter.delete('/:id', idValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación.', errors: errors.array() })
    }
    const { id } = req.params
    const specialist = await deleteSpecialist(id)
    if (specialist === null) {
      return res.status(404).json({ error: 'Especialista no encontrado.' })
    }
    res.json(specialist)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo eliminar el especialista.' })
  }
}) as RequestHandler)

specialistRouter.post('/calendly', (async (req: Request, res: Response) => {
  try {
    //Obtengo el codigo para el refresh token
    const { code } = req.body

    const refreshToken = await getRefreshToken(code)


    res.json({ refreshToken: refreshToken })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se pudo crear el especialista.' })
  }
}) as RequestHandler)


export default specialistRouter
