import { getAppointmentInfo } from "@/app/services/appointmentInfo";
import AppointmentDetail from "@/app/components/Videocalling/AppointmentDetail";
async function page({ params }) {
  const appointmentInfo = await getAppointmentInfo(params.id);

  return <AppointmentDetail appointmentInfo={appointmentInfo} />;
}

export default page;
