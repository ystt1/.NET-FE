import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Hàng mới về</h2>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>Bộ sưu tập</p>
        <p>cho tất cả </p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="hero_image" />
      </div>
    </div>
  );
};
