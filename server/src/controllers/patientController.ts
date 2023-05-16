import '../db-connection'
import Patient from "../models/patient";
import { IPatient } from "../declarations/interfaces";
import { EnumGender } from '../declarations/enums';
import { ObjectId } from 'mongoose';
// Obtener todos los pacientes
export async function getPatients() {
  try {
    const patients: IPatient[] = await Patient.find();
    return patients
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudieron obtener los pacientes')
  }
}

// Obtener un paciente por ID
export async function getPatientById(id: ObjectId) {
  try {
    const patient: IPatient | null = await Patient.findById(id);

    return patient
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo obtener el paciente')
  }
}

// Crear un nuevo paciente
export async function createPatient(
  firstName: string,
  lastName: string,
  age: number,
  gender: EnumGender,
  dni: string,
  email: string,
) {
  try {
    const newPatient = { firstName, lastName, age, gender, dni, email };
    const patient = new Patient(newPatient);
    const savedPatient: IPatient = await patient.save()
    return savedPatient
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo crear paciente')
  }
}

// Actualizar un paciente
export async function updatePatient(
  id: ObjectId,
  firstName: string,
  lastName: string,
  age: number,
  gender: EnumGender,
  dni: string,
  email: string,
) {
  try {
    const updatedPatient = { firstName, lastName, age, gender, dni, email };
    const patient: IPatient | null = await Patient.findByIdAndUpdate(id, updatedPatient, { new: true });

    return patient
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo actualizar paciente')
  }
}

// Eliminar un paciente
export async function deletePatient(id: ObjectId) {
  try {
    const patient = await Patient.findByIdAndDelete(id);

    return patient
  } catch (error) {
    // Manejar el error
    console.error(error)
    throw new Error('No se pudo eliminar el paciente')
  }
}

