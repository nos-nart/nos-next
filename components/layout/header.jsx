import React from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { Logo, AboutIcon, ServicesIconMobile, CustomerIcon, TestimoniIcon } from '../svgs';
import { ButtonOutline } from '../';

export const Header = () => {
  const [activeLink, setActiveLink] = React.useState(null);
  const [scrollActive, setScrollActive] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 70);
    });
  }, []);

  return (
    <>
      <header className={`bg-blur fixed top-0 w-full z-30 transition-all duration-150 ${scrollActive ? " shadow-md pt-0" : " pt-4"}`}>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="flex items-center">
            <Logo className="lg:w-14 w-10"/>
            {/* <span className="ml-2 font-extrabold text-xl text-green-400"></span> */}
          </div>
          <ul className="hidden lg:flex items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="our-customer"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("our-customer");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "our-customer"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Our customer
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Testimonial
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Sign up</ButtonOutline>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t bg-blur">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "border-green-500 text-orange-500"
                  : "border-transparent")
              }
            >
              <AboutIcon className="w-6 h-6"/>
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "services"
                  ? "border-green-500 text-orange-500"
                  : "border-transparent ")
              }
            >
              <ServicesIconMobile className="w-6 h-6" />
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="our-customer"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("our-customer");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "our-customer"
                  ? "border-green-500 text-orange-500"
                  : "border-transparent ")
              }
            >
              <CustomerIcon className="w-6 h-6" />
              Our customer
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "border-green-500 text-orange-500"
                  : "border-transparent ")
              }
            >
              <TestimoniIcon className="w-6 h-6" />
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .bg-blur {
          backdrop-filter: blur(5px);
          background: #f3f4f6b3;
        }
      `}</style>
    </>
  );
}
