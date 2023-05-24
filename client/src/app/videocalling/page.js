"use client";
import React from "react";
import VideoCalling from "../components/Videocalling/VideoCalling";
import InformationUser from "../components/Videocalling/InformationUser";

function page() {
  return (
    <div className="videocalling">
      <VideoCalling />
      <InformationUser />
    </div>
  );
}

export default page;
