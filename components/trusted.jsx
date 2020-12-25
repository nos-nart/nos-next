import React from 'react';
import Slider from 'react-slick';
import { Netflix, MagicLeap, MozillaVR, AuthOIcon, Discord, Amazon, Heart } from './svgs';

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
  speed: 7000,
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
    <div className="my-24" id="our-customer">
      <div className="text-center mb-16">
        <p className="text-green-500 font-extrabold text-2xl">
          <Heart className="w-10 h-10 inline-block" /> Trusted by thousands customer
        </p>
        <p className="text-gray-400 max-w-xl mx-auto mt-3">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.
        </p>
      </div>
      <div className="my-6">
        <Slider {...settings}>
          <div className="mx-10"><Netflix className="w-40 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><MagicLeap className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><MozillaVR className="w-44 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><AuthOIcon className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><Amazon className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><Netflix className="w-40 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><AuthOIcon className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><Discord className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><AuthOIcon className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><MozillaVR className="w-44 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
        </Slider>
      </div>
      <div className="my-6">
        <Slider {...rtl}>
          <div className="mx-10"><Netflix className="w-40 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><MozillaVR className="w-44 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><MagicLeap className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><Discord className="w-40 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><AuthOIcon className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><Amazon className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><MagicLeap className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><AuthOIcon className="w-32 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><Discord className="w-40 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
          <div className="mx-10"><MozillaVR className="w-44 text-gray-300 hover:text-gray-900 transition-all duration-200"/></div>
        </Slider>
      </div>
    </div>
  );
}
