import React from "react";

function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <image src="/images/carousel1.jpg" alt="" width={500} height={500} />
          <image src="/images/carousel2.jpg" alt="" width={500} height={500} />
          <image src="/images/carousel3.jpg" alt="" width={500} height={500} />
          <image src="/images/carousel1.jpg" alt="" width={500} height={500} />
          <image src="/images/carousel2.jpg" alt="" width={500} height={500} />
          <image src="/images/carousel3.jpg" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
