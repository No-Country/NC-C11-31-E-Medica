import React from "react";
import "./DoctorCard.scss";
import Star from "./Star/Star";
import Image from "next/image";
export default function DoctorCard({ image, texto }) {
  return (
    <div>
      {/* Here would go the logic of how many stars the doctor's profile will have */}
      <Star />
      <Image src={image} alt={image} width={500} height={500} />
      <p>{texto}</p>
    </div>
  );
}
