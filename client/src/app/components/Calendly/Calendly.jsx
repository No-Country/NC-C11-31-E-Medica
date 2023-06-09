import { postAppointment } from "@/app/services/appointmentInfo";
import { useCalendlyEventListener } from "react-calendly";
const Calendly = ({ calendlyLink, patientId, specialistId, specialtyId }) => {
  useCalendlyEventListener({
    onProfilePageViewed: () => undefined,
    onDateAndTimeSelected: () => undefined,
    onEventTypeViewed: () => undefined,
    onEventScheduled: async (e) => {
      const calendlyUri = e.data.payload.event.uri
      const newAppointment = await postAppointment(calendlyUri, patientId, specialistId, specialtyId)
      if (typeof window !== 'undefined') {
        window.location.href = "/";
      }
    }
  });
  const handleClick = async () => {
    window.Calendly.initPopupWidget({ url: calendlyLink });
    return false;
  }
  return (
    <>
      <button className='specialist-detail-button specialist-detail-button2' onClick={handleClick}>
        Agendar
      </button>
    </>
  )
};

export default Calendly;
