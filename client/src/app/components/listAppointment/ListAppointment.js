"use client";
import { useRouter } from "next/navigation";
import { Report } from "notiflix/build/notiflix-report-aio";
import Image from "next/image";
function ListAppointment({ appointmentsToAdd = [] }) {
  const router = useRouter();
  if (appointmentsToAdd.length > 0) {
    return (
      <div className="listAppointment">
        <div className="cardIcons">
          <Image
            src="/images/calendarIcon.png"
            className="cardIcons"
            width={50}
            height={80}
          />

          <h2>Próximas citas pendientes</h2>
        </div>
        <div className="cardList">
          {appointmentsToAdd.map((appointment) => {
            const { specialists, resource = {}, _id } = appointment;
            const { start_time = new Date() } = resource.resource;
            const formatedDate = new Date(start_time)
              .toLocaleString(undefined, { hour12: true })
              .replace(/\s/g, " ");
            return (
              <div
                key={specialists._id}
                className="cardAppointment"
                onClick={() => {
                  router.push(`/appointmentDetail/${_id}`);
                }}
              >
                <div className="cardName">
                  <Image
                    src={specialists.picture}
                    alt="Specialist"
                    className="cardImg"
                    width={80}
                    height={90}
                  />
                  <div className="specialistName">
                    <h3>
                      {specialists.firstName + " " + specialists.lastName}
                    </h3>
                    <p>
                      <strong>Medicina general</strong>
                    </p>
                  </div>
                </div>
                <ul className="cardInfo">
                  <li>
                    <strong>Fecha: </strong> {formatedDate}
                  </li>
                  <li>
                    <strong>Motivo: </strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="cardIcons">
          <Image
            src="/images/advisorIcon.png"
            className="advisorIcon cardIcons "
            width={92}
            height={88}
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
