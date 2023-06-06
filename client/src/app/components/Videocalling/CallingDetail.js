"use client";
import { getAppointmentInfo } from "@/app/services/appointmentInfo";
import Link from "next/link";

async function CallingDetail() {
  const patientId = "646fc7980fce23dd174c16d8";
  const baseURL = "https://nc-c11-31-e-medica-production.up.railway.app";
  const patients = await fetch(`${baseURL}/patient/${patientId}`).then((res) =>
    res.json()
  );
  const { appointments } = patients; // citas del paciente
  const [appointment] = appointments;
  const { _id: id, status } = appointment;
  const appointmentInfo = await getAppointmentInfo(id); //llamada a la API
  const { specialists, resource } = appointmentInfo;
  const { picture, firstName, lastName, specialty } = specialists;
  const { created_at } = resource.resource; // dia en que se creo la cita
  const date = new Date(created_at);
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const [month, day, hours] = [
    date.getMonth(),
    date.getDate(),
    date.getHours(),
  ];

  return (
    <main className="videocalling">
      <h2 className="tittleCalling">Te estamos prepando la reunión . . .</h2>
      <section className="appointmentInfo">
        <article className="divInfo">
          <h2>La reunion esta lista...</h2>
          <p>
            El día de la fecha martes {day} de {monthNames[month]} a las{" "}
            {hours + ":00"} agendaste un turno con el especialista:
          </p>

          <ul className="specialistInfo">
            <img className="pictureSpecialist" src={picture} alt="Perfil" />
            <div>
              <li>
                <strong> {firstName + " " + lastName}</strong>
              </li>
              <li>Especialista en {specialty.name} </li>
              <li>
                <strong>Estado de la cita: </strong>
                {status === "scheduled" ? "agendado" : status}
              </li>
            </div>
          </ul>
        </article>
        <article className="calling">
          <div className="divInfo2">
            <Link href={`/videocalling/${id}`}>
              <button className="buttonsV">Entrar Videollamada</button>
            </Link>
            <Link href="/">
              <button className="buttonsV1">Cancelar Citas</button>
            </Link>
          </div>
          <div className="contactInfo">
            <Link href="/">
              <button className="problemButton">
                Tienes problemas con ingresar?
              </button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default CallingDetail;
