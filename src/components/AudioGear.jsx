import React, { useState } from "react";
import "./AudioGear.css";

const AudioGear = () => {
  const [screenWidth, setScreenWidth] = useState();
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });
  return (
    <div className="audiogear">
      <img
        src={
          screenWidth >= 1080
            ? "./assets/shared/desktop/image-best-gear.jpg"
            : screenWidth >= 768
            ? "./assets/shared/tablet/image-best-gear.jpg"
            : "./assets/shared/mobile/image-best-gear.jpg"
        }
        alt="portrait of the person using Audiophile headphones"
        style={{ borderRadius: "1rem" }}
      />
      <h3>
        BRINGING YOU THE <span>BEST</span> AUDIO GEAR
      </h3>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a larger showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};

export default AudioGear;
