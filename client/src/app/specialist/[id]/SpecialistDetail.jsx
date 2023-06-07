'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useParams } from 'next/navigation'
import getSpecialistDetail from '@/app/services/getSpecialistDetail';
import Loading from '@/app/components/Loading/Loading';
import Calendly from '@/app/components/Calendly/Calendly';
const SpecialistDetail = () => {
  const params = useParams()
  const [dataSpecialistDetail, setDataSpecialistDetail] = useState()
  const [isCalendly, setIsCalendly] = useState()

  useEffect(() => {
    console.log('useffect ejecutado')
    getSpecialistDetail(params.id).then(data => setDataSpecialistDetail(data))
  }, [params.id])

  return (
    dataSpecialistDetail ?
      (<div className='specialist-detail'>
        <h6>Conoce un poco más a</h6>
        <div className='specialist-detail-card'>
          <Image
            src={dataSpecialistDetail.picture}
            width={500}
            height={500}
            alt="Foto de perfil del especialista"
            className='specialist-detail-card-image'
          />
          <div>
            <p className='doctor-name'>Dr. {dataSpecialistDetail.firstName} {dataSpecialistDetail.lastName} </p>
            <p className='doctor-specialty'> Especialista en {dataSpecialistDetail.specialty?.name} </p>
          </div>
        </div>
        <div className='specialist-detail-description'>
          <h4>Se destaca en</h4>
          <p> {dataSpecialistDetail.bio} </p>

        </div>
        <div className='specialist-detail-button-cont'>
          <button className='specialist-detail-button1'>Ver reseñas de pacientes</button>
          <button className='specialist-detail-button specialist-detail-button2'>Volver</button>
          <Calendly calendlyLink="https://calendly.com/roblesfontc/e-medica"
            patientId=""
            specialistId={params.id}
            specialtyId={dataSpecialistDetail.specialty._id} />
        </div>
      </div>) : <Loading />

  )
}

export default SpecialistDetail