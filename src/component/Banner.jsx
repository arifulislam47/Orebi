import React, { useState } from "react";
import Slider from "react-slick";
export default function SimpleSlider() {
  const [active, setActive] = useState(0);

  const screenWidth = window.innerWidth;

  const leftPosition = screenWidth <= 360    ? "4%" : "11.5%";



  var settings = {
    fade: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    beforeChange: (current, next) => setActive(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: leftPosition,
          transform: "translatey(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` flex items-center text-[10px] phone:h-4 ipadmini:h-6 ${
          active == i
            ? "border-r-2 border-[#414141] text-[#161616] font-bold"
            : "border-r-2 border-white text-transparent"
        }`}
        style={{
          width: "20px",
        }}
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/Banner01.png" alt="Banner01" />
      </div>
      <div>
        <img src="/Banner02.png" alt="Banner02" />
      </div>
      <div>
        <img src="/Banner03.png" alt="Banner03" />
      </div>
    </Slider>
  );
}
