"use client";
import { Hero } from "./components/Hero/Hero";
import TurnSteps from "./components/turnSteps/TurnSteps";
import WrapperGrid from "./components/specialties/Wrapper-grid";
import Gallery from "./components/Gallery/Gallery";
import VideoCalling from "./components/Videocalling/VideoCalling";
import InformationUser from "./components/Videocalling/InformationUser";

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
