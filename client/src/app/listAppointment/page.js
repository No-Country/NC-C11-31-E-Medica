"use client";
import ListAppointment from "../components/listAppointment/ListAppointment";
import { getAppointmentInfo } from "../services/appointmentInfo";
import GlobalContext from "@/app/context/global/Global-context";
import { useContext } from "react";

const page = async () => {
  const { userData } = useContext(GlobalContext);
  const patientId = userData._id || "646fc7980fce23dd174c16d8";
  const baseURL = "https://nc-c11-31-e-medica-production.up.railway.app";
  const patient = await fetch(`${baseURL}/patient/${patientId}`, {
    cache: "no-store",
  }).then((res) => res.json());
  const { appointments } = patient;

  const appointmentIdsPromise = appointments.map((e) =>
    getAppointmentInfo(e._id)
  );
  const appointmentsInfo = await Promise.all(appointmentIdsPromise);
  return (
    <>
      <ListAppointment appointmentsToAdd={appointmentsInfo} />
    </>
  );
};

export default page;
