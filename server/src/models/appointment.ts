import { Schema, model } from 'mongoose'
import { IAppointment } from '../declarations/interfaces'
import { EnumStatus } from '../declarations/enums'

const appointmentSchema = new Schema<IAppointment>({
  dateTime: { type: Date, required: true },
  reason: { type: String },
  status: { type: String, enum: Object.values(EnumStatus), default: EnumStatus.Schedule },
  meetingLink: { type: String, required: true },
  paymentId: { type: String, required: true },
  paid: { type: Boolean },
  active: { type: Boolean, default: true },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  specialist: { type: Schema.Types.ObjectId, ref: 'Specialist', required: true },
  specialty: { type: Schema.Types.ObjectId, ref: 'Specialty', required: true },
  review: { type: Schema.Types.ObjectId, ref: 'Review' }
}, {
  timestamps: true
});

const Appointment = model<IAppointment>('Appointment', appointmentSchema)

export default Appointment
