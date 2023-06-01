'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useParams } from 'next/navigation'
import getSpecialistDetail from '@/app/services/getSpecialistDetail';
import Loading from '@/app/components/Loading/Loading';
import Calendly from '@/app/components/Calendly/Calendly';
import { useRouter } from 'next/router';

const SpecialistDetail = () => {
  const params = useParams()
  console.log(params.id)
  const [dataSpecialistDetail, setDataSpecialistDetail] = useState()
  const [isCalendly, setIsCalendly] = useState()
  console.log('estado', dataSpecialistDetail)

  useEffect(() => {
    console.log('useffect ejecutado')
    getSpecialistDetail(params.id).then(data => setDataSpecialistDetail(data))
  }, [])

  const handleClick = () => {
    setIsCalendly(true)
  }
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
            <p> {dataSpecialistDetail.specialty?.name} </p>
          </div>
        </div>
        <div className='specialist-detail-description'>
          <h4>Se destaca en</h4>
          <p> {dataSpecialistDetail.bio} </p>
        </div>
        <div className='specialist-detail-button-cont'>
          <button className='specialist-detail-button1'>Ver reseñas de pacientes</button>
          <button className='specialist-detail-button specialist-detail-button2'>Volver</button>
          <button className='specialist-detail-button' onClick={handleClick}>Ver agenda</button>
          {isCalendly ? <Calendly calendlyLink="https://calendly.com/roblesfontc/e-medica"
            patientId=""
            specialistId={params.id}
            specialtyId={dataSpecialistDetail.specialty._id} /> : false}
        </div>
      </div>) : <Loading />

  )
}

export default SpecialistDetail