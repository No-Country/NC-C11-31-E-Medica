"use client";
import { JitsiMeeting } from "@jitsi/react-sdk";

function VideoCalling() {
  const userInfo = {
    displayName: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://example.com/avatar.jpg",
  };

  return (
    <div className="videocalling">
      <JitsiMeeting
        roomName="pruebaVideoCalling"
        userInfo={userInfo}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%";
        }}
      />
    </div>
  );
}

export default VideoCalling;
