import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight, Location } from './svgs';

export const Testimoni = ({ testimonies }) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pinter transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <section className="my-24" id="testimoni">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="my-12">
          <div className="text-center text-xl font-extrabold">
            <Location className="w-12 h-12 inline-block"/>
            <span className="text-green-500">Testimonial</span>
          </div>
          <p className="text-center text-gray-400 my-3 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
          </p>
        </div>
        <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef}
          className="flex items-stretch justify-items-stretch"
        >
          {testimonies.map((testimoni, index) => (
            <div className="px-3 flex items-stretch" key={index}>
              <div className="cursor-pointer border-2 border-gray-300 hover:border-green-500 transition-all duration-150 rounded-lg p-8 flex flex-col">
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <div className="overflow-hidden w-14 h-14 rounded-full">
                      <Image
                        className="object-cover"
                        src={testimoni.image}
                        height={100}
                        width={100}
                        alt="Icon People"
                      />
                    </div>
                    <div className="flex flex-col ml-5 text-left">
                      <p className="text-lg text-black-600 capitalize">
                        {testimoni.name}
                      </p>
                      <p className="text-sm text-black-500 capitalize">
                        {testimoni.city},{testimoni.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                    <p className="text-sm">{testimoni.rating}</p>
                    <span className="flex ml-4">
                      <Star className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-left">“{testimoni.testimoni}”.</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex w-full items-center justify-end mt-4">

      </div>
        <div className="flex flex-none justify-end">
          <div
            className="mx-4 flex items-center justify-center h-12 w-12 rounded-full bg-white border-gray-300 hover:border-green-500 border hover:bg-green-500 hover:text-white transition-all duration-150 text-gray-400 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowLeft className="h-6 w-6" />
          </div>
          <div
            className="flex items-center justify-center h-12 w-12 rounded-full bg-white border-gray-300 hover:border-green-500 border hover:bg-green-500 hover:text-white transition-all duration-150 text-gray-400 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
