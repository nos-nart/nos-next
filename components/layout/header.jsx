import React from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { Logo } from '../svgs';
import { ButtonOutline } from '../';

export const Header = () => {
  const [activeLink, setActiveLink] = React.useState(null);
  const [scrollActive, setScrollActive] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header className="fixed top0 w-full z-30 bg-white-500 transition-all">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="flex items-center">
            <Logo className="w-8"/>
            <span className="ml-2 mt-2 font-extrabold text-xl text-green-400">Park & Go</span>
          </div>
          <ul className="flex items-center">
            <LinkScroll
              activeClass="active"
              to="how"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("how");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              How it works
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
                (activeLink === "about"
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
    </>
  );
}
