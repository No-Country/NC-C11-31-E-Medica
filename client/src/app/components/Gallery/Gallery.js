"use client";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const [windowSize, setWindowSize] = useState([]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    setWindowSize([window.innerWidth]); // Obtener el tamaño inicial del navegador

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize[0] >= 768) { // Acceder al tamaño del navegador desde windowSize[0]
    return (
      <section>
        <div className="galleryText">
          <h2>Conoce los nuevos beneficios</h2>
          <h4>Revisa aquí nuestras alianzas y accede a los descuentos que tenemos para ti</h4>
        </div>
        <article className="gallery">
          <Image className="galleryImg" src="/images/carousel1.jpg" alt="Lab" width={500} height={500} />
          <Image
            className="galleryImg"
            src="/images/carousel2.jpg"
            alt="Medics"
            width={500} height={500}
          />
          <Image
            className="galleryImg"
            src="/images/carousel3.jpg"
            alt="Emergency"
            width={500} height={500}
          />
        </article>
      </section>
    );
  } else {
    return <Carousel />;
  }
};

export default Gallery;
