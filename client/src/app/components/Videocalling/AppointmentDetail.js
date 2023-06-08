"use client";
import Link from "next/link";
import Image from "next/image";

async function AppointmentDetail({ appointmentInfo }) {
  const { specialists, resource, status, _id: id } = appointmentInfo;
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
            <Image
              className="pictureSpecialist"
              src={picture}
              alt="Perfil"
              width={500}
              height={500}
            />
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
            <Link href={`/videoCalling/${id}`}>
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

export default AppointmentDetail;
