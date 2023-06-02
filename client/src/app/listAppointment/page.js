import ListAppointment from "../components/listAppointment/ListAppointment";
import { getAppointmentInfo } from "../services/appointmentInfo";

const page = async () => {
  const patientId = "646fc7980fce23dd174c16d8";
  const baseURL = "https://nc-c11-31-e-medica-production.up.railway.app";
  const patients = await fetch(`${baseURL}/patient/${patientId}`).then((res) =>
    res.json()
  );
  const { appointments } = patients;
  console.log(appointments);
  const [appointment] = appointments;

  const appointmentId = [appointment._id];
  const appointmentInfo = await getAppointmentInfo([appointmentId]);

  return (
    <>
      <ListAppointment appointmentsAdd={appointmentInfo} />
    </>
  );
};

export default page;
