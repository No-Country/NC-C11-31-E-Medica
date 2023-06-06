function ListAppointment({ appointmentsAdd }) {
  const { specialists, resource, patients } = appointmentsAdd;
  const { appointments } = patients;
  const { start_time } = resource.resource;
  const date = `${new Date(start_time)}`;
  return (
    <div className="cardAppointment">
      {appointments.map(() => {
        return (
          <div key={specialists._id}>
            <h3>
              Especialista: {specialists.firstName + "" + specialists.lastName}
            </h3>
            <p>Fecha: {date}</p>
            <p>Especialidad: Medicina general </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus esse at iusto similique maxime vitae adipisci
              libero ab accusamus cum odit repellat aspernatur totam non,
              repudiandae suscipit recusandae quod saepe.
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListAppointment;
