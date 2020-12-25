import React from 'react';
import { ServiceIcon, QRCode } from './svgs';
import Image from 'next/image';

export const Service = () => {
  return (
    <section className="my-24" id="services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="my-12">
          <p className="text-green-500 font-extrabold text-2xl flex items-center justify-center">
            <ServiceIcon className="mr-2 w-10 h-10 inline-block"/> Services
          </p>
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-24">
          <div className="flex flex-col justify-start items-start row-start-2 sm:row-start-1">
            <p className="uppercase flex items-center"><QRCode className="w-12 h-12 inline-block"/>Mobile app</p>
            <p className="text-3xl my-3 font-bold">Manage your finances anywhere</p>
            <p className="text-gray-500 my-3 text-left">Platform allows you to see a reliable forecase of future income, combining all your sources of income.</p>
            <ul className="mt-4 text-left leading-7 text-gray-500">
              <li className="circle-check custom-list relative">
                Pay-as-you-go for additional users and usage
              </li>
              <li className="circle-check custom-list relative">
                SLA, SSO, & support
              </li>
              <li className="circle-check custom-list relative">
                Historic audit records
              </li>
              <li className="circle-check custom-list relative">
                Advanced dataset management
              </li>
            </ul>
          </div>
          <div className="flex justify-center w-full">
            <div style={{ position: 'relative', width: '400px', height: '252px' }}>
              <Image
                alt="hero"
                src="/images/service.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
