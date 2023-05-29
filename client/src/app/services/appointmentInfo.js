const baseURL = "http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com";

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