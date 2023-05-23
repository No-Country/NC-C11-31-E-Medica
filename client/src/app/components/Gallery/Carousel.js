import React from "react";
import Image from "next/image";

function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src="/images/carousel1.jpg" alt="" />
          <Image src="/images/carousel2.jpg" alt="" />
          <Image src="/images/carousel3.jpg" alt="" />
          <Image src="/images/carousel1.jpg" alt="" />
          <Image src="/images/carousel2.jpg" alt="" />
          <Image src="/images/carousel3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
