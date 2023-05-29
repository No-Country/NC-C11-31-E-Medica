'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import {useParams} from 'next/navigation'
import getSpecialistDetail from '@/app/services/getSpecialistDetail';
import Loading from '@/app/components/Loading/Loading';

const SpecialistDetail = () => {
  const params = useParams()
  console.log(params.id)
  const [dataSpecialistDetail, setDataSpecialistDetail] = useState()
  console.log('estado', dataSpecialistDetail)

  useEffect(()=> {
    console.log('useffect ejecutado')
    getSpecialistDetail(params.id).then(data => setDataSpecialistDetail(data))
  }, [])
    
  return ( 
    dataSpecialistDetail ? 
    (<div className='specialist-detail'>
    <h2>Conoce más a</h2>
    <div className='specialist-detail-card'>
      <Image 
      src={dataSpecialistDetail.picture}
      width={500}
      height={500}
      alt="Foto de perfil del especialista"
      className='specialist-detail-card-image'
      /> 
      <div>
        <h2>Dr. {dataSpecialistDetail.firstName} {dataSpecialistDetail.lastName} </h2>
        <p> {dataSpecialistDetail.specialty.name} </p>
      </div>
    </div>
    <div className='specialist-detail-description'>
        <h4>Se destaca en</h4>
        <p> {dataSpecialistDetail.bio} </p>
    </div>
    <div className='specialist-detail-button-cont'>
      <button className='specialist-detail-button1'>Ver reseñas de pacientes</button>
      <button className='specialist-detail-button specialist-detail-button2'>Volver</button>
      <button className='specialist-detail-button'>Ver agenda</button>
    </div>
  </div> ) : <Loading />  
  )
}

export default SpecialistDetail