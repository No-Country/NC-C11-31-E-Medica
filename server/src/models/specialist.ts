import { Schema, model } from 'mongoose'
import { ISpecialist } from '../declarations/interfaces'

const specialistSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  picture: { type: String, required: false },
  fee: { type: Number, required: false },
  bio: { type: String, required: false },
  dni: { type: String, required: false },
  rup: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  signatureLink: { type: String, required: false },
  calendlyLink: { type: String, required: true },
  calendlyToken: { type: String, required: true },
  mercadoPago: { type: String, required: false },
  specialty: { type: Schema.Types.ObjectId, ref: 'Specialty', required: false },
  reviews: { type: [Schema.Types.ObjectId], ref: 'Review' },
  active: { type: Boolean, default: true }
}, {
  timestamps: true
})

const Specialist = model<ISpecialist>('Specialist', specialistSchema)

export default Specialist
