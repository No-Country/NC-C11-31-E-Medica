"use client";
import { useRouter } from "next/navigation";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { Report } from "notiflix/build/notiflix-report-aio";
import { getAppointmentInfo } from "./../../services/appointmentInfo";
import { useEffect } from "react";

async function VideoCalling({ appointmentId = null }) {
  const appointmentInfo = await getAppointmentInfo(appointmentId);
  const { patients, dateTime, _id: id } = appointmentInfo;
  const roomName = appointmentInfo.patients._id;
  let jitsiAPI; // variable que guarda la API
  let startTime = new Date(dateTime);
  let newStatus = "";
  let alertShowed = false;
  /* const interval = setInterval(() => {
    console.log("Interval");
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
        clearInterval(interval);
      }
    }
  }, 1000);  */

  return (
    <div className="jitsiCalling">
      <JaaSMeeting
        userInfo={{
          displayName: patients.firstName + patients.lastName,
        }}
        appId="vpaas-magic-cookie-cbde2f015c1541469a2074684145eddd" //NECESARIO
        roomName={id}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%"; //ampliar el componente segun lo que mida la division donde este se encuentra
        }}
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
        onReadyToClose={async () => {
          newStatus = "attended";
          await handlePost();
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
    </div>
  );
}


export default VideoCalling;
