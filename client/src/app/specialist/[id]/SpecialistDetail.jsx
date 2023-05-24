'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import {useParams} from 'next/navigation'
import getSpecialistDetail from '@/app/services/getSpecialistDetail';

const SpecialistDetail = () => {
  const params = useParams()
  console.log(params.id)
  const [dataSpecialistDetail, setDataSpecialistDetail] = useState()
  console.log('estado', dataSpecialistDetail)

    useEffect(()=> {
        getSpecialistDetail(params.id).then(data => setDataSpecialistDetail(data))       
    }, [])
    
    return (
    <div className='specialist-detail'>
      <h2>Conoce más a</h2>
      <div className='specialist-detail-card'>
        <Image 
        src="/images/doctor.jpg"
        width={50}
        height={50}
        alt="Foto de perfil del especialista"
        className='specialist-detail-card-image'
        /> 
        <div>
            <h2>Dr. {dataSpecialistDetail.firstName} {dataSpecialistDetail.lastName} </h2>
            <p>{dataSpecialistDetail.specialty.name}</p>
        </div>
      </div>
      <div className='specialist-detail-description'>
        <h4>Se destaca en</h4>
        <ul>
            <li>Manejo de insulinoterapia en pacientes con enfermedades agudas. Bomba de insulina.</li>
            <li>Control glucémico en el acto quirúrgico. Control glucémico durante el transplante pancreático y de islotes. Tratamiento de la crisis tirotóxica. Suspensión de corticorterapia: intervención del endocrinólogo. Evaluación y seguimiento de pacientes pre y postransplante (renal, hepático, reno-pancreático, cardíaco y pulmonar).</li>
            <li>Infusiones de medicamentos antiresortivos en osteoporosis secundaria y en enfermedades malignas.</li>
        </ul>
      </div>
      <div className='specialist-detail-button-cont'>
        <button className='specialist-detail-button1'>Ver reseñas de pacientes</button>
        <button className='specialist-detail-button specialist-detail-button2'>Volver</button>
        <button className='specialist-detail-button'>Ver agenda</button>
      </div>
    </div>
  )
}

export default SpecialistDetail