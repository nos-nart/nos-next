import React from 'react';
import { Header } from './header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
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
      `}</style>
    </>
  )
}
