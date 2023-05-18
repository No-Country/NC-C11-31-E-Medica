"use client";
import {Hero} from './components/Hero/Hero'

import { CardSpecialties } from './components/CardSpecialties/CardSpecialties'
import TurnSteps from './components/turnSteps/TurnSteps'
import WrapperGrid from './components/specialties/Wrapper-grid'
const Page = () => {
  return (
    <>
      <Hero />
      <WrapperGrid />
      <TurnSteps />
    </>
  )
}


export default Page


