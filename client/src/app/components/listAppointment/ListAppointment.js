"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
function ListAppointment({ appointmentsAdd }) {
  const { specialists, resource, patients } = appointmentsAdd;
  const { appointments } = patients;
  const { start_time } = resource.resource;
  const [appointmentDate, setAppointmentDate] = useState(start_time);
  useEffect(() => {
    const date = new Date(appointmentDate);
    const setDate = date.toLocaleString();
    setAppointmentDate(setDate);
  }, []);
  const router = useRouter();

  if (appointmentsAdd) {
    return (
      <div className="listAppointment">
        <div className="cardIcons">
          <img src="/images/calendarIcon.png" className="cardIcons" />

          <h2>Próximas citas pendientes</h2>
        </div>
        {appointments.map(() => {
          return (
            <div
              key={specialists._id}
              className="cardAppointment"
              onClick={() => {
                router.push("/videocalling");
              }}
            >
              <div className="cardName">
                <img
                  src={specialists.picture}
                  alt="Specialist"
                  className="cardImg"
                />
                <div className="specialistName">
                  <h3>{specialists.firstName + " " + specialists.lastName}</h3>
                  <p>
                    <strong>Medicina general</strong>
                  </p>
                </div>
              </div>
              <ul className="cardInfo">
                <li>
                  <strong>Fecha: </strong> {appointmentDate}
                </li>
                <li>
                  <strong>Motivo: </strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          );
        })}

        <div className="cardIcons">
          <img
            src="/images/advisorIcon.png"
            className="advisorIcon cardIcons "
          />

          <h5>
            En cada cita y horario te llegará una notificación para unirte a la
            cita médica a tráves de la videollamada
          </h5>
        </div>
      </div>
    );
  } else {
    Report.info(
      "Vaya",
      "Parece que no tienes citas disponibles :(",
      "Inicio",
      () => {
        router.push("/");
      }
    );
  }
}

export default ListAppointment;
