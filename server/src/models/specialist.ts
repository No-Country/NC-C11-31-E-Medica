import { Schema, model } from 'mongoose'
import { ISpecialist } from '../declarations/interfaces'

const specialistSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dni: { type: String, required: true },
	rup: { type: String, required: true },
	email: { type: String, required: true },
	signatureLink: { type: String, required: true },
	calendarLink: { type: String },
	mercadoPago: { type: String, required: true },
	active: { type: Boolean, default: true },
	specialty: { type: Schema.Types.ObjectId, ref: 'Specialty', required: true },
	reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
}, {
	timestamps: true
});


const Specialist = model<ISpecialist>('Specialist', specialistSchema)

export default Specialist
