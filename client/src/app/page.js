"use client";
import { Hero } from "./components/Hero/Hero";
import { CardSpecialties } from "./components/CardSpecialties/CardSpecialties";
import TurnSteps from "./components/turnSteps/TurnSteps";
import Gallery from "./components/Gallery/Gallery";

const Page = () => {
  const specialties = [
    "Cardiología",
    "Odontología",
    "Traumatología",
    "Obstetricia",
    "Oftalmología",
    "Dermatología",
    "Pediatría",
    "Cirugía",
  ];

  return (
    <div>
      <Hero />
      <div className="wrapperTexts">
        <h2>Nuestros servicios</h2>
        <p>Contamos con +200 servicios para vos y tu familia</p>
      </div>
      <div className="wrapperGrid">
        {specialties.map((specielty) => (
          <CardSpecialties specielty={specielty} />
        ))}
      </div>
      <TurnSteps />
      <Gallery />
    </div>
  );
};

export default Page;
