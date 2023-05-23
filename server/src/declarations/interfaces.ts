import { Date, Types, Document, ObjectId } from 'mongoose'
import { EnumExample, EnumGender, EnumStatus } from './enums'

export interface IExample extends Document {
  propExample1: string
  propExample2: Types.ObjectId
  propExample3: number
  propExample4: string[]
  propExample5: Types.ObjectId[]
  propExample6: boolean
  propExample7: Date
  propExample8: EnumExample
}

export interface ISpecialty extends Document {
  name: string
  description: string
  active: boolean
}

export interface IPatient extends Document {
  firstName: string
  lastName: string
  age: number
  gender: EnumGender
  dni: string
  email: string
  active: boolean
}

export interface ISpecialist extends Document {
  firstName: string
  lastName: string
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
