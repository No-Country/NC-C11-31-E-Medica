'use client'
import React, { useEffect, useState } from 'react'
import getSpecialists from '@/app/services/getSpecialists';
import SpecialistCard from './SpecialistCard';
import Loading from '@/app/components/Loading/Loading';
import { useParams } from 'next/navigation';


const SpecialistCardList = () => {
    
    const [specialistData, setSpecialistData] = useState([])
    console.log('specialistData:', specialistData)

    useEffect(()=>{
      getSpecialists().then((data) => setSpecialistData(data))
    }, [])

    const params = useParams()
    console.log(params.id)

    const specialistDataFilted = specialistData.filter(item => item.specialty?._id === params.id)
    console.log('filtrado:', specialistDataFilted)

  return (
    specialistData.length ? 
    specialistDataFilted.map((item, index) => {
      return (
      <SpecialistCard
      key={index}
      picture={item.picture}
      name={item.firstName}
      specialty={item.specialty?.name}
      id={item._id}
      />
        )
      })
    : <Loading />
  )
}

export default SpecialistCardList