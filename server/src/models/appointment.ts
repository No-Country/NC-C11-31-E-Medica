import { Schema, model } from 'mongoose'
import { IAppointment } from '../declarations/interfaces'
import { EnumStatus } from '../declarations/enums'

const appointmentSchema = new Schema<IAppointment>({
  dateTime: { type: Date },
  calendlyUri: { type: String, required: true },
  reason: { type: String },
  status: { type: String, enum: Object.values(EnumStatus), default: EnumStatus.Schedule },
  meetingLink: { type: String },
  paymentId: { type: String },
  paid: { type: Boolean },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  specialist: { type: Schema.Types.ObjectId, ref: 'Specialist', required: true },
  specialty: { type: Schema.Types.ObjectId, ref: 'Specialty', required: true },
  review: { type: Schema.Types.ObjectId, ref: 'Review' },
  active: { type: Boolean, default: true }
}, {
  timestamps: true
})

const Appointment = model<IAppointment>('Appointment', appointmentSchema)

export default Appointment
