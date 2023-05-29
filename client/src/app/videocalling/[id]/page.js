"use client";
import VideoCalling from "@/app/components/Videocalling/VideoCalling";
import { useCalling } from "./../../context/CallingContext";
import { useEffect } from "react";

function page({ params }) {
  /* console.log({
    id: params.id,
  }); */
  /* const { appointmentState, setAppointmentState } = useCalling();
  useEffect(() => {
    console.log({ appointmentState });
  }, [appointmentState]); */
  return <VideoCalling appointmentId={params.id} />;
}

export default page;
