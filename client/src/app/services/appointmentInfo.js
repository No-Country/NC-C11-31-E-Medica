const baseURL = "https://nc-c11-31-e-medica-production.up.railway.app";
const devURL = "http://localhost:5000";
import axios from "axios";
export const getAppointmentInfo = async (appointmentId) => {
  //traer cita de lista de citas
  const appointments = await fetch(
    `${baseURL}/appointment/${appointmentId}`
  ).then((res) => res.json());

  const [appointment, resource] = appointments;
  const { patient, specialist, status, _id } = appointment;
  //traer paciente de lista de pacientes
  const patients = await fetch(`${baseURL}/patient/${patient}`).then((res) =>
    res.json()
  );
  // traer especialista de la lista de especialistas
  const specialists = await fetch(
    `${baseURL}/specialist/${specialist}`
  ).then((res) => res.json());
  const appointmentInfo = { patients, status, _id, resource, specialists };
  // paciente / estado de la cita/id de la cita/  start_Time / especialista
  return appointmentInfo;
};

export const postAppointment = async (
  calendlyUri,
  patient,
  specialist,
  specialty
) => {
  const appointment = {
    calendlyUri,
    patient: "646fc7700fce23dd174bf232",
    specialist,
    specialty,
  };

  const newAppointment = await axios.post(
    `${baseURL}/appointment`,
    appointment
  );

  return newAppointment;
};
