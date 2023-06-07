import { Router, Request, Response, RequestHandler } from 'express'
import { getPatientByCredentials } from '../controllers/patientController'
// import { getSpecialistByEmail } from '../controllers/specialistController'
import { validationResult } from 'express-validator'

const authRouter = Router()

// Ruta para obtener el usuario (especialista o paciente) que se autentica exitosamente
// authRouter.get('/:email', (async (req: Request, res: Response) => {
//   try {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ error: 'Errores de validación', errors: errors.array() })
//     }
//     const { email } = req.params
//     const specialist = await getSpecialistByEmail(email)
//     const patient = await getPatientByEmail(email)
//     if (specialist === null && patient === null) {
//       return res.status(404).json({ error: 'Usuario no encontrado.' })
//     }
//     const user = specialist === null ? { userType: 'patient', patient } : { userType: 'specialist', specialist }
//     res.status(200).json(user)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: 'No se encontró un usuario con el email ingresado.' })
//   }
// }) as RequestHandler)

// Ruta para verificar la contraseña del usuario (especialista o paciente) que intenta autenticarse
authRouter.get('/', (async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Errores de validación', errors: errors.array() })
    }
    const credentials = req.header('Authorization')
    const email = credentials !== undefined ? credentials.split(':')[0] : ''
    const password = credentials !== undefined ? credentials.split(':')[1] : ''
    const patient = await getPatientByCredentials(email, password)
    const user = patient
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'No se encontró un usuario con el email ingresado.' })
  }
}) as RequestHandler)

export default authRouter
