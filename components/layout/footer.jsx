import React from 'react';
import { Logo, Twitter, Telegram, Facebook } from '../svgs';
import { ButtonOutline } from '../button-outline';

export const Footer = () => (
  <div className="bg-gray-50">
    <footer className="max-w-screen-xl mx-auto pt-24 pb-6 px-6 sm:px-8 lg:px-16">
      <div className="flex items-center">
        <Logo className="w-14" />
        <span className="text-2xl ml-3 font-extrabold text-purple-500">Money tran$fer</span>
      </div>
      <div className="my-12 grid grid-cols-12 gap-8 lg:grid-rows-1 grid-rows-2">
        <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <p className="font-bold text-xl">Product</p>
            <div className="text-gray-500 flex flex-col items-start capitalize text-sm leading-8">
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">structured content</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">developer experience</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">studio</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">pricing</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">enterpise</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">security & compliance</p>
            </div>
          </div>
          <div className="col-span-4">
            <p className="font-bold text-xl">Resouces</p>
            <div className="text-gray-500 flex flex-col items-start capitalize text-sm leading-8">
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">get started</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">documentation</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">reference documentation</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">guides</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">plugin & tool</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">case studies</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">solutions</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">start projects</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">headless cms explained</p>
            </div>
          </div>
          <div className="col-span-4">
            <p className="font-bold text-xl">Company</p>
            <div className="text-gray-500 flex flex-col items-start capitalize text-sm leading-8">
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">contact us</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">blog</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">careers</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">terms of service</p>
              <p className="cursor-pointer hover:text-green-500 transition-all duration-200">privacy policy</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 border border-solid border-gray-300 text-gray-400 rounded lg:row-start-1 row-start-2">
          <div className="border-solid border-b border-gray-300 p-4">
            <p className="uppercase mb-2">subscribe to our newsletter</p>
            <div className="flex items-center w-full">
              <input value="nosnart1510@gmail.com"
                onChange={() => {}}
                className="border border-solid border-gray-300 px-4 py-1 bg-gray-100 flex-1 focus:outline-none rounded mr-3"
              />
              <ButtonOutline>Subscribe</ButtonOutline>
            </div>
          </div>
          <div className="p-4">
            <p className="uppercase mb-2">places to find us</p>
            <div className="flex flex-wrap">
              <span className="cursor-pointer flex items-center mr-2"><Twitter className="w-6 h-6"/> @twitter</span>
              <span className="cursor-pointer flex items-center mr-2"><Facebook className="w-6 h-6"/> @facebook</span>
              <span className="cursor-pointer flex items-center mr-2"><Telegram className="w-6 h-6"/> @telegram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
)