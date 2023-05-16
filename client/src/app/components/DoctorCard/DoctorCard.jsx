import React from "react";
import "./DoctorCard.scss";
import Star from "./Star/Star";
export default function DoctorCard({ image, texto }) {
  return (
    <div>
      {/* Here would go the logic of how many stars the doctor's profile will have */}
      <Star />
      <img src={image} alt={image} />
      <p>{texto}</p>
    </div>
  );
}
