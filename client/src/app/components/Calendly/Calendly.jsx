// "https://calendly.com/julianlopez43013/30min"
import React from "react";
import { postAppointment } from "@/app/services/appointmentInfo";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Calendly = ({ calendlyLink, patientId, specialistId, specialtyId }) => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: async (e) => {
      const calendlyUri = e.data.payload.event.uri
      const newAppointment = await postAppointment(calendlyUri, patientId, specialistId, specialtyId)
      console.log(newAppointment);
      if (typeof window !== 'undefined') {
        window.location.href = "/";
      }
    }
  });

  return (
    <div className="App">
      <InlineWidget url={calendlyLink} />
    </div>
  );
};

export default Calendly;
