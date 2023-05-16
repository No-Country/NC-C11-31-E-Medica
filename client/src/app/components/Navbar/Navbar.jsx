import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header>
      <h1>E-Medica</h1>
      <input type="text" placeholder="Buscar especialista" />
      <ul>
        <li>
          <Link href="/medic">Médico</Link>
        </li>
        <li>
          <Link href="/register">Registro</Link>
        </li>
        <li>
          <Link href="/login">Ingresar</Link>
        </li>
      </ul>
    </header>
  );
}
