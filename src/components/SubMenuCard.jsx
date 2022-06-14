import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import subMenuLink from "./SubMenuLink.module.css";
import "./SubMenuCard.css";

const SubMenuCard = ({ image, title, link }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <NavLink to={link} className={subMenuLink.navlink}>
          SHOP <i className="fa fa-solid fa-angle-right"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default SubMenuCard;
