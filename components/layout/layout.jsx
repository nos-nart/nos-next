import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <style jsx global>{`
        body::-webkit-scrollbar {
          width: 12px;
        }
        body::-webkit-scrollbar-track {
          background: #e5e7eb;
        }
        body::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 20px;
          border: 3px solid #e5e7eb;
        }

        li.custom-list:before {
          content: ""; /* bullet point, for screen readers */
          text-indent: -9999999px; /* move the bullet point out of sight */
          position absolute;
        }

        li.circle-check:before {
          content: "";
          width: 1rem;
          height: 1rem;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("/images/circle-check.svg");
          left: -25px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </>
  )
}
