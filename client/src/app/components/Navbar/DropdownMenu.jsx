import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Dropdown} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const DropdownMenu = (props) => {

  return (
  <div className="App">  
    <Container className='p-4'>  
      <Dropdown>  
        <Dropdown.Toggle variant=" primary" id="dropdown-basic">  
          <FontAwesomeIcon icon={faUser} />  
        </Dropdown.Toggle>  
        <Dropdown.Menu>  
          <Dropdown.Item href="#/action-1">Mi perfil</Dropdown.Item>  
          <Dropdown.Item href="#/action-2">Mis citas</Dropdown.Item>  
          <Dropdown.Item href="#/action-3" onClick={props.logOut}>Salir</Dropdown.Item>  
        </Dropdown.Menu>  
      </Dropdown>  
    </Container>  
  </div>  
  )
}

export default DropdownMenu