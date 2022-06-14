import React from "react";
import SubMenuCard from "./SubMenuCard";
import "./SubMenu.css";

const SubMenu = () => {
  return (
    <div className="subMenu">
      <SubMenuCard
        image="./assets/shared/desktop/image-category-thumbnail-headphones.png"
        title="HEADPHONES"
        link="/headphone"
      />
      <SubMenuCard
        image="./assets/shared/desktop/image-category-thumbnail-speakers.png"
        title="SPEAKERS"
        link="/speakers"
      />
      <SubMenuCard
        image="./assets/shared/desktop/image-category-thumbnail-earphones.png"
        title="EARPHONES"
        link="/earphones"
      />
    </div>
  );
};

export default SubMenu;
