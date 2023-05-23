import { Schema, model } from 'mongoose'
import { ISpecialty } from '../declarations/interfaces'

const specialtySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

const Specialty = model<ISpecialty>('Specialty', specialtySchema)

export default Specialty
