import React from 'react';
import Slider from 'react-slick';
import { Netflix } from './svgs';

const settings = {
  customPaging: () => null,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "linear",
  variableWidth: true,
  nextArrow: () => null,
  prevArrow: () => null,
  pauseOnFocus: false,
  pauseOnHover: false,
  focusOnSelect: false,
  swipeToSlide: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
};

const rtl = {...settings, rtl: true };

export const Trusted = () => {
  return (
    <div className="my-12">
      <div className="mb-6">
        <Slider {...settings}>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
        </Slider>
      </div>
      <div>
        <Slider {...rtl}>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
          <div className="item"><Netflix className="w-40"/></div>
        </Slider>
      </div>
      <style jsx>{`
        .item {
          margin: 0 1rem;
        }
      `}</style>
    </div>
  );
}
