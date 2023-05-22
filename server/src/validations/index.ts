import { body, param } from 'express-validator';
import { Types } from 'mongoose'
export const patientValidation = [
  body('firstName').notEmpty().withMessage('El nombre es obligatorio'),
  body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
  body('dob').notEmpty().withMessage('La fecha de nacimiento es obligatoria'),
  body('gender').notEmpty().withMessage('El género es obligatorio'),
  body('dni').notEmpty().withMessage('El DNI es obligatorio'),
  body('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('El email no es válido')
];

export const idValidation = [
  param('id')
    .notEmpty().withMessage('Id no ingresado')
    .custom((value) => {
      if (!Types.ObjectId.isValid(value)) {
        throw new Error('Identificador de paciente inválido');
      }
      return true;
    }),
];

export const appointmentValidation = [
  body('dateTime').notEmpty().withMessage('La fecha es obligatoria'),
  body('meetingLink').notEmpty().withMessage('El meetingLink es obligatorio'),
  body('paymentId').notEmpty().withMessage('El paymentId es obligatorio'),
  body('patient').notEmpty().withMessage('El ID del paciente es obligatorio').custom((value) => {
    if (!Types.ObjectId.isValid(value)) {
      throw new Error('ID de paciente inválido');
    }
    return true;
  }),
  body('specialist').notEmpty().withMessage('El ID del profesional es obligatorio').custom((value) => {
    if (!Types.ObjectId.isValid(value)) {
      throw new Error('ID de profesional inválido');
    }
    return true;
  }),
  body('specialty').notEmpty().withMessage('El ID de la especialidad es obligatorio').custom((value) => {
    if (!Types.ObjectId.isValid(value)) {
      throw new Error('ID de especialidad inválido');
    }
    return true;
  })
]


