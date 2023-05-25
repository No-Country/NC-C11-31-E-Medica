// "https://calendly.com/julianlopez43013/30min"
// Solo tengo que mostrar el componente sin <Calendly /> con su prop sin ninguna complejidad
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data),
  });

  const options = {
    method: "GET",
    url:
      "https://api.calendly.com/scheduled_events/4140532e-2bff-470f-9751-0a1",
    headers: {
      "Content-Type": "application/json",
      Authorization: "CIaBtUBIttbC-EV3hJ4985bq-P9R0bbiI8kc9u_CD5E",
    },
  };

  axios
    .request(options)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.error(error);
    });

  return (
    <div className="App">
      <InlineWidget url={"https://calendly.com/julianlopez43013/30min"} />
    </div>
  );
};

export default Calendly;
