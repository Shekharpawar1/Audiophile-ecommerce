import React, { useState } from "react";
import AudioGear from "./AudioGear";
import "./HomePage.css";
import SubMenu from "./SubMenu";

const Homepage = () => {
  const [screenWidth, setScreenWidth] = useState();
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <main>
      <section
        className="homepage"
        style={{
          backgroundImage:
            screenWidth >= 1080
              ? "url(./assets/home/desktop/image-hero.jpg)"
              : screenWidth >= 768
              ? "url(./assets/home/tablet/image-header.jpg)"
              : "url(./assets/home/mobile/image-header.jpg)",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "25rem",
        }}
      >
        <h2>XX99 MARK II</h2>
        <h1>HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>SEE PRODUCT</button>
      </section>
      <SubMenu />
      <AudioGear />
    </main>
  );
};

export default Homepage;
