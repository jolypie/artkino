
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
// import Slider from "react-slick";
// import './centerMode.css'

// import barbie_img from '../../images/home/barbie.jpg'
// import evil_dead_img from '../../images/home/evil_dead_rise.jpg'
// import ind_jns_img from '../../images/home/indiana_jones_5.jpg'
// import terr_img from '../../images/home/terrifier.jpg'

// function CenterMode() {
//   const settings = {
//     className: "center",
//     centerMode: false,
//     fade: true,
//     infinite: true,
//     centerPadding: "50px",
//     slidesToShow: 1, // Show only 1 slide at a time
//     slidesToScroll: 1, // Scroll 1 slide at a time
//     speed: 200,
//     autoplay: true, // add autoplay feature
//     autoplaySpeed: 5000, // adjust the autoplay speed
//     arrows: false, // add arrow navigation
//     dots: true, // add dot navigation
//   };

//   const images = [
//     {
//       src: barbie_img,
//       alt: "Image 1"
//     },
//     {
//       src: evil_dead_img,
//       alt: "Image 2"
//     },
//     {
//       src: ind_jns_img,
//       alt: "Image 3"
//     },
//     {
//       src: terr_img,
//       alt: "Image 4"
//     }
//   ];

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image.src} alt={image.alt} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default CenterMode;