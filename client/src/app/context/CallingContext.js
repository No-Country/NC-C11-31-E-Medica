// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// export const callingContext = createContext();

// export const useCalling = () => {
//   const context = useContext(callingContext);
//   if (!context) throw new Error("useCalling must use within a provider");
//   return context;
// };
// export const CallingProvider = ({ children }) => {
//   const [appointment, setAppointment] = useState([]);
//   useEffect(() => {
//     fetch("http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/appointment")
//       .then((response) => response.json())
//       .then((data) => setAppointment(data));
//   }, []);

//   return (
//     <callingContext.Provider value={appointment}>
//       {children}
//     </callingContext.Provider>
//   );
// };
