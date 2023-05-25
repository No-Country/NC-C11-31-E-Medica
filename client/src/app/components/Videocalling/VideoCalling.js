"use client";
import { useRouter } from "next/navigation";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { useEffect } from "react";
import InformationUser from "./InformationUser";
import { Report } from "notiflix/build/notiflix-report-aio";
// import { userInfo } from "./InformationUser";
// import { useCalling } from "./../../context/CallingContext";

function VideoCalling() {
  const router = useRouter();
  const userInfo = {
    _id: "6467879c465bf1347b5246c5",
    firstName: "John",
    lastName: "Doe",
    dni: 123456789,
    rup: "RUP123",
    email: "john.doe@example.com",
    signatureLink: "https://example.com/signature",
    calendarLink: "",
    mercadoPago: "",
    reviews: [],
    active: true,
    createdAt: "2023-05-19 T14:28:44.763+00:00",
    updatedAt: "2023-05-19 T14:28:44.763+00:00",
  };

  const { firstName, lastName, email, _id: id, rup, dni } = userInfo;

  let jitsiAPI; // variable que guarda la API
  let alertShowed = false; // comprobante de la alerta a los 5 minutos
  // info del usuario
  let startTime = new Date(); // info de la fecha agendada en la API server


  const interval = setInterval(() => {
    // validaciones del tiempo transcurrido en la reunion
    if (startTime) {
      // mientras que startime este disponible va a ser lo siguiente
      const currentTime = new Date(); // Obtiene el tiempo actual
      const elapsedSeconds = Math.floor((currentTime - startTime) / 1000); // calcula el tiempo transcurrido en segundos
      const elapsedMinutes = elapsedSeconds / 60; // el tiempo  transcurrido a segundos se trasnforma a minutos
      if (elapsedMinutes > 25 && !alertShowed) {
        alert("Quedan 5 minutos"); // cuando a la llamada le queden 5 minutos desplegara una notificacion
        alertShowed = true;
      }
      if (elapsedMinutes >= 30 && jitsiAPI) {
        jitsiAPI.dispose(); // mientras que la API de jitsi este disponible realizara la funcion "colgar "
      }
    }
  }, 1000);

  return (
    <div className="videocalling">
      <JaaSMeeting
        userInfo={{
          displayName: firstName + " " + lastName,
          email: email,
          rup: rup,
          dni: dni,
        }} // info del usuario que tiene que ser suministrada de la API de authentication
        appId="vpaas-magic-cookie-cbde2f015c1541469a2074684145eddd" //NECESARIO
        roomName={id} // NECESARIO Nombre de la sala seria "Nombre patient + Nombre Specialist + Appoiment ID"
        configOverwrite={{
          toolbarButtons: ["camera", "hangup", "microphone", "chat"], // Iconos que se desplegaran en la interfaz
          disableThirdPartyRequests: true,
          disableLocalVideoFlip: true,
          backgroundAlpha: 0.5,
          welcomePage: {
            disabled: true, // desactivar la paagina de inicio que solicita datos
          },
          prejoinConfig: {
            // lo mismo de la linea 49
            enabled: false,
          },
        }}
        interfaceConfigOverwrite={{
          VIDEO_LAYOUT_FIT: "nocrop",
          MOBILE_APP_PROMO: false,
          TILE_VIEW_MAX_COLUMNS: 4,
          SHOW_JITSI_WATERMARK: false, //desactivar marca de agua
          SHOW_POWERED_BY: false, // lo mismo linea 59
          SHOW_PROMOTIONAL_CLOSE_PAGE: false, // desactivar pagina final de promocion
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%"; //ampliar el componente segun lo que mida la division donde este se encuentra
        }}
        onReadyToClose={() => {
          router.push("/");
          Report.success(
            "Notiflix Success",
            '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
            "Okay"
          ); // cuando se seleccione el boton de cerrar deberia mostrar un review
        }}
        onApiReady={(api) => {
          jitsiAPI = api; // llamada a la API de Jitsi la cual se guarda en la variable JitsiAPI
        }}
      />
      <InformationUser />
    </div>
  );
}

export default VideoCalling;
