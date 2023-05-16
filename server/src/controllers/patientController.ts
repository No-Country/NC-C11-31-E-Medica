import express, { Request, Response } from 'express';
import Patient from "../models/patient";
import { IPatient } from "../declarations/interfaces";

const router = express.Router();

// Obtener todos los pacientes
router.get('/patients', async (req: Request, res: Response) => {
  try {
    const patients = await Patient.find();
    res.status(201).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pacientes' });
  }
});

// Obtener un paciente por ID
router.get('/patients/:id', async (req: Request, res: Response) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el paciente' });
  }
});

// Crear un nuevo paciente
router.post('/patients', async (req: Request, res: Response) => {
  try {
    const newPatient: IPatient = req.body;
    const patient = await Patient.create(newPatient);
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el paciente' });
  }
});

// Actualizar un paciente
router.put('/patients/:id', async (req: Request, res: Response) => {
  try {
    const updatedPatient: IPatient = req.body;
    const patient = await Patient.findByIdAndUpdate(req.params.id, updatedPatient, { new: true });
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el paciente' });
  }
});

// Eliminar un paciente
router.delete('/patients/:id', async (req: Request, res: Response) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }
    res.json({ message: 'Paciente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el paciente' });
  }
});

export default router;
