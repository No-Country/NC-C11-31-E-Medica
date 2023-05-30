"use client";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

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

  if (windowSize[0] >= 768) {
    // Acceder al tamaño del navegador desde windowSize[0]
    return (
      <section>
        <div className="galleryText">
          <h4>Publicidades varias</h4>
          <h4>Programas de prevención temprana entre otros estudios</h4>
        </div>
        <article className="gallery">
          <Image className="galleryImg" src="/images/carousel1.jpg" alt="Lab" width={500} height={500} />
          <Image className="galleryImg" src="/images/carousel2.jpg" alt="Medics" width={500} height={500} />
          <Image className="galleryImg" src="/images/carousel3.jpg" alt="Emergency" width={500} height={500} />
        </article>
      </section>
    );
  } else {
    return <Carousel />;
  }
};

export default Gallery;
