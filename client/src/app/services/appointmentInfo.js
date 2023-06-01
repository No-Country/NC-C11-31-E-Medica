const baseURL = "https://nc-c11-31-e-medica-production.up.railway.app/";

export const getAppointmentInfo = async (appointmentId) => {
  const appointment = await fetch(
    `${baseURL}/appointment/${appointmentId}`
  ).then((res) => res.json());
  const { patient, specialist, dateTime, status, _id, reason } = appointment;

  const patients = await fetch(`${baseURL}/patient/${patient}`).then((res) =>
    res.json()
  );

  const specialists = await fetch(
    `${baseURL}/specialist/${specialist}`
  ).then((res) => res.json());
  const { firstName, lastName, picture, specialty } = specialists;

  const specialtys = await fetch(
    `${baseURL}/specialty/${specialty._id}`
  ).then((res) => res.json());
  const appointmentInfo = { patients, status, dateTime, _id };
  return appointmentInfo;
};

export const postAppointment = async (calendlyUri, patient, specialist, specialty) => {
  const appointment = { calendlyUri, patient: "646fc7700fce23dd174bf232", specialist, specialty }
  console.log(appointment);
  const newAppointment = await axios.post(`${baseURL}/appointment`, appointment)

  return newAppointment
}
