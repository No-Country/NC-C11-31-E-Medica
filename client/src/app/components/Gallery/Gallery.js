"use client";
import Image from "next/image";

const Gallery = () => {

  return (
    <section>
      <div className="galleryText">
        <h2>Conoce los nuevos beneficios</h2>
        <h4>Revisa aquí nuestras alianzas y accede a los descuentos que tenemos para ti</h4>
      </div>
      <article className="gallery">
        <Image className="galleryImg" src="/images/carousel1.jpg" alt="Lab" width={500} height={500} />
        <Image className="galleryImg" src="/images/carousel2.jpg" alt="Medics" width={500} height={500} />
        <Image className="galleryImg" src="/images/carousel3.jpg" alt="Emergency" width={500} height={500} />
      </article>
    </section>
  );

};

export default Gallery;
