import { Schema, model } from 'mongoose'
import { IPatient } from '../declarations/interfaces'
import { EnumGender } from '../declarations/enums';

const patientSchema = new Schema({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: Object.values(EnumGender), required: true },
  dni: { type: String, required: true },
  email: { type: String, required: true },
  active: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Patient = model<IPatient>('Patient', patientSchema)

export default Patient
