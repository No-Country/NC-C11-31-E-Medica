"use client";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { useEffect } from "react";

function VideoCalling() {
  let jitsiAPI; // variable que guarda la API
  let alertShowed = false; // comprobante de la alerta a los 5 minutos
  const userInfo = {
    displayName: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://example.com/avatar.jpg",
  }; // info del usuario
  let startTime = new Date(
    "Mon May 22 2023 17:45:51 GMT-0400 (hora de Venezuela)"
  ); // info de la fecha agendada en la API server

  useEffect(() => {
    const interval = setInterval(() => {
      // validaciones del tiempo transcurrido en la reunion
      if (startTime) {
        // mientras que startime este disponible va a ser lo siguiente
        const currentTime = new Date(); // Obtiene el tiempo actual
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000); // calcula el tiempo transcurrido en segundos
        console.log("Tiempo transcurrido:", elapsedSeconds, "segundos");
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
  }, []);

  return (
    <div className="videocalling">
      <JaaSMeeting
        userInfo={userInfo} // info del usuario que tiene que ser suministrada de la API de authentication
        appId="vpaas-magic-cookie-cbde2f015c1541469a2074684145eddd"
        roomName="aqui deberia estar el id" // NECESARIO Nombre de la sala seria "Nombre patient + Nombre Specialist + Appoiment ID"
        configOverwrite={{
          toolbarButtons: ["camera", "hangup", "microphone"], // Iconos que se desplegaran en la interfaz
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
          alert("Me cerre jaja salu2"); // cuando se seleccione el boton de cerrar deberia mostrar un review
        }}
        onApiReady={(api) => {
          jitsiAPI = api; // llamada a la API de Jitsi la cual se guarda en la variable JitsiAPI
        }}
      />
    </div>
  );
}

export default VideoCalling;
