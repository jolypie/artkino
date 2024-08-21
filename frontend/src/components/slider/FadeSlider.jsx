import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import './fadeSlider.css';

import barbie_img from '../../images/home/barbie.jpg';
import ind_jns_img from '../../images/home/indiana_jones_5.jpg';
import terr_img from '../../images/home/terrifier.jpg';
import wonka_img from '../../images/home/wonka.jpg';
import evil_dead_rise from '../../images/home/evil_dead_rise.jpg';

function FadeSlider() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const handleSlideClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  return (
    <div className="">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide-item" onClick={() => handleSlideClick(346698)}>
            <img src={barbie_img} alt="Barbie" />
            <p className="slide-caption">Barbie</p>
          </div>
          <div className="slide-item" onClick={() => handleSlideClick(787699)}>
            <img src={wonka_img} alt="Wonka" />
            <p className="slide-caption">Wonka</p>
          </div>
          <div className="slide-item" onClick={() => handleSlideClick(335977)}>
            <img src={ind_jns_img} alt="Indiana Jones 5" />
            <p className="slide-caption">Indiana Jones</p>
          </div>
          <div className="slide-item" onClick={() => handleSlideClick(420634)}>
            <img src={terr_img} alt="Terrifier" />
            <p className="slide-caption">Terrifier</p>
          </div>
          <div className="slide-item" onClick={() => handleSlideClick(713704)}>
            <img src={evil_dead_rise} alt="Evil Dead Rise" />
            <p className="slide-caption">Evil Dead Rise</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default FadeSlider;
