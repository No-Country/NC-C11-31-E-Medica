import React from 'react'

const Dropdown = () => {
  return (
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Botón Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Perfil</a></li>
    <li><a class="dropdown-item" href="#">Mis citas</a></li>
    <li><a class="dropdown-item" href="#">Salir</a></li>
  </ul>
</div>
  )
}

export default Dropdown