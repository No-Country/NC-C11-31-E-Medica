import React from "react";
import "./Card.scss";
export default function Card({ image, text }) {
  return (
    <div>
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
}
