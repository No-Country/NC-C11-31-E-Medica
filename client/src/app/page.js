"use client";
import {Hero} from './components/Hero/Hero'

import { CardSpecialties } from './components/CardSpecialties/CardSpecialties'
import TurnSteps from './components/turnSteps/TurnSteps'
import WrapperGrid from './components/specielties/Wrapper-grid'
const Page = () => {
  return (
    <>
      <Hero />
      <WrapperGrid />
      <TurnSteps />
      <Gallery />
    </>
  );
};


export default Page


