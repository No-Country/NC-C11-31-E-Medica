import { Date, Document, ObjectId } from 'mongoose'
import { EnumGender, EnumStatus } from './enums'

export interface ISpecialty extends Document {
  name: string
  description: string
  active: boolean
}

export interface IPatient extends Document {
  firstName: string
  lastName: string
  dob: Date
  gender: EnumGender
  dni: string
  email: string
  active: boolean
}

export interface ISpecialist extends Document {
  firstName: string
  lastName: string
  picture: string
  bio: string
  dni: string
  rup: string
  email: string
  signatureLink: string
  calendarLink: string
  mercadoPago: string
  specialty: ObjectId
  reviews: ObjectId
  active: boolean
}

export interface IAppointment extends Document {
  dateTime: Date
  reason: string
  status: EnumStatus
  meetingLink: string
  paymentId: string
  paid: boolean
  patient: ObjectId
  specialist: ObjectId
  specialty: ObjectId
  review: ObjectId
  active: boolean
}
