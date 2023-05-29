// "use client";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const callingContext = createContext();

// export const useCalling = () => {
//   const context = useContext(callingContext);
//   //if (!context) throw new Error("useCalling must use within a provider");
//   return context;
// };

// export const CallingProvider = ({ children }) => {
//   const [appointmentState, setAppointmentState] = useState([]);

//   const values = React.useMemo(
//     () => ({
//       appointmentState, // States que seran visibles en el contexto.
//       setAppointmentState, // Funciones que son exportadas para manejo externo.
//     }),
//     [appointmentState]
//   ); // States que serán visibles en el contexto.

//   return (
//     <callingContext.Provider value={values}>{children}</callingContext.Provider>
//   );
// };
// export default useCalling;
