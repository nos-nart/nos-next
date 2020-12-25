import React from 'react';
import Image from 'next/image';
import { AppStore, GooglePlay } from './svgs';

export const Hero = (props) => {
  return (
    <section className="mt-24 max-w-screen-xl mx-auto px-8 xl:px-16" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-20">
        <div className="flex justify-center w-full">
          <div style={{ position: 'relative', width: '400px', height: '252px' }}>
            <Image
              alt="hero"
              src="/images/hero.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-normal">
            Financial platform
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Our company is your one-stop solution for any fianacial solution need. There is no doubt
            {' '} that we are leaders and you do not need to worry about our image because it is perfect
          </p>
          <p className="mt-12 font-bold">Manage your finaces anywhere with our app</p>
          <div className="flex mt-4">
            <button className="flex items-start rounded border border-solid border-gray-400 p-2 w-40 hover:shadow-lg">
              <GooglePlay className="w-10 h-10"/>
              <div className="flex flex-col items-start ml-3">
                <span className="text-xs uppercase text-gray-400">get it on</span>
                <span className="text-gray-700">Google Play</span>
              </div>
            </button>
            <button className="flex items-start rounded border border-solid border-gray-400 p-2 ml-3 w-40 hover:shadow-lg">
              <AppStore className="w-10 h-10"/>
              <div className="flex flex-col items-start ml-3">
                <span className="text-xs uppercase text-gray-400">get it on</span>
                <span className="text-gray-700">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-32">
        <div className="grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 rounded-lg shadow-lg">
          {props.about.map((i, index) =>
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-12 h-12">
                <Image
                  src={i.image}
                  objectFit="cover"
                  layout="fill"
                  alt="icon"
                />
              </div>
              <div className="bg-gray-100 flex items-center justify-center my-4 py-4 w-full">
                <span className="font-bold text-2xl">{i.number}</span>
              </div>
              <span className="uppercase text-gray-400">{i.name}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
