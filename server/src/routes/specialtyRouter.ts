import express, { Request, Response, RequestHandler } from 'express'
import { getAllSpecialties, getSpecialtyById, getSpecialtyByName } from '../controllers/specialtyController'
import { validationResult } from 'express-validator'
import { idValidation } from '../validations'
const specialtyRouter = express.Router()

specialtyRouter.get('/', (async (req: Request, res: Response) => {
  try {
    const specialties = await getAllSpecialties()

    res.json(specialties)
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las especialidades' })
  }
}) as RequestHandler)

specialtyRouter.get('/name/:name?', (async (req: Request, res: Response) => {
  try {
    //   /name/Medicina General
    const specialtyName = req.params.name

    if (!specialtyName) {
      return res.status(400).json({ message: 'Nombre no ingresado' });
    }

    const specialty = await getSpecialtyByName(specialtyName);

    if (specialty) {
      return res.status(200).json(specialty);
    } else {
      return res.status(404).json({ message: 'Especialidad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la especialidad' });
  }
}) as RequestHandler)

specialtyRouter.get('/:id?', idValidation, (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() });
    }
    const specialtyId = req.params.id;

    const specialty = await getSpecialtyById(specialtyId);

    if (specialty) {
      return res.status(200).json(specialty);
    } else {
      return res.status(404).json({ message: 'Especialidad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la especialidad' });
  }
}) as RequestHandler)

export default specialtyRouter
