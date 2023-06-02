"use client";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { getAppointmentInfo } from "./../../services/appointmentInfo";

async function VideoCalling({ appointmentId = null }) {
  const appointmentInfo = await getAppointmentInfo(appointmentId);
  const { patients, _id: id } = appointmentInfo;

  if (appointmentInfo)
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
        />
      </div>
    );
}

export default VideoCalling;
