import React from "react";
import Image from "next/image";

function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src="/images/carousel1.jpg" alt="" width={500} height={500} />
          <Image src="/images/carousel2.jpg" alt="" width={500} height={500} />
          <Image src="/images/carousel3.jpg" alt="" width={500} height={500} />
          <Image src="/images/carousel1.jpg" alt="" width={500} height={500} />
          <Image src="/images/carousel2.jpg" alt="" width={500} height={500} />
          <Image src="/images/carousel3.jpg" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
