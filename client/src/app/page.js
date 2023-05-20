"use client";
import { Hero } from "./components/Hero/Hero";
import TurnSteps from "./components/turnSteps/TurnSteps";
import WrapperGrid from "./components/specialties/Wrapper-grid";
import Gallery from "./components/Gallery/Gallery";

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

export default Page;
