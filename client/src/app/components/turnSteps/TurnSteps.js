import React from "react";

function page() {
  return (
    <div className="information">
      <h1>¿Querés pedir tu turno?</h1>
      <p>Aprende en cuatro simples pasos cómo funciona E-Medica</p>
      <section className="steps">
        <article>
          <h3>
            <span className="growUp">1</span>er paso
          </h3>
          <p>busca el profesional que estas necesitando</p>
        </article>
        <article>
          <h3>
            <span className="growUp">2</span>do paso
          </h3>
          <p>
            Mirá toda la disponibilidad del profesional, eligiendo el dia y el
            horario
          </p>
        </article>
        <article>
          <h3>
            <span className="growUp">3</span>er paso
          </h3>
          <p>
            Registrá tu turno en la agenda médica. Recibiras la confirmación por
            e-mail y recordatorios por mensajes de texto
          </p>
        </article>
        <article>
          <h3>
            <span className="growUp">4</span>to paso
          </h3>
          <p>
            Espera el turno en el horario y dia acordado. Te recomendamos estar
            conectado 5min antes.
          </p>
        </article>
      </section>
    </div>
  );
}

export default page;
