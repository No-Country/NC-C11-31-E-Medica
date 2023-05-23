// "https://calendly.com/julianlopez43013/30min"
// Solo tengo que mostrar el componente sin <Calendly /> con su prop sin ninguna complejidad
"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = ({ calendlyUser }) => {
  return (
    <div className="App">
      <InlineWidget url={calendlyUser} />
    </div>
  );
};

export default Calendly;
