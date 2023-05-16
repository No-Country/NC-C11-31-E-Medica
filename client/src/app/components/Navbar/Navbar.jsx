import React from "react";

export default function Navbar() {
  return (
    <header>
      <h1>E-Medica</h1>
      <input type="text" placeholder="Buscar especialista" />
      <ul>
        <li>
          <a href="#">Médico</a>
        </li>
        <li>
          <a href="#">Registro</a>
        </li>
        <li>
          <a href="#">Ingresar</a>
        </li>
      </ul>
    </header>
  );
}
