import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './fadeSlider.css'

import barbie_img from '../../images/home/barbie.jpg'
import evil_dead_img from '../../images/home/evil_dead_rise.jpg'
import ind_jns_img from '../../images/home/indiana_jones_5.jpg'
import terr_img from '../../images/home/terrifier.jpg'
import wonka_img from '../../images/home/wonka.jpg'

function FadeSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 5000
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={barbie_img} alt="Barbie" />
          <p className="slide-caption">Barbie</p> {/* Добавляем текстовый элемент */}
        </div>
        <div className="slide-item">
          <img src={wonka_img} alt="Wonka" />
          <p className="slide-caption">Wonka</p> {/* Добавляем текстовый элемент */}
        </div>
        <div className="slide-item">
          <img src={ind_jns_img} alt="Indiana Jones 5" />
          <p className="slide-caption">Indiana Jones</p> {/* Добавляем текстовый элемент */}
        </div>
        <div className="slide-item">
          <img src={terr_img} alt="Terrifier" />
          <p className="slide-caption">Terrifier</p> {/* Добавляем текстовый элемент */}
        </div>
      </Slider>
    </div>
  );
}

export default FadeSlider;