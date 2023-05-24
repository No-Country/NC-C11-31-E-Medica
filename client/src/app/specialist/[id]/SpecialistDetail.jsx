'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import getSpecialistDetail from '@/app/services/getSpecialistDetail'

const SpecialistDetail = () => {
    //const router = useRouter()
    //const {id} = router.query;

    const [dataSpecialistDetail, setDataSpecialistDetail] = useState()

    useEffect(()=>{
        getSpecialistDetail().then(data => setDataSpecialistDetail(data))
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
            <h2>Doctor Luis Hernandez</h2>
            <p> Médico Cardiólogo</p>
        </div>
      </div>
      <div className='specialist-detail-button-cont'>
        <button className='specialist-detail-button1'>Ver reseñas de pacientes</button>
        <button className='specialist-detail-button'>Volver</button>
        <button className='specialist-detail-button'>Ver agenda</button>
      </div>
    </div>
  )
}

export default SpecialistDetail