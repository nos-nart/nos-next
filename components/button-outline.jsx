import React from 'react'

export const ButtonOutline = ({ children }) => {
  return (
    <button className="text-green-500 hover:text-white tracking-wide py-1 px-4 border border-solid border-green-500 rounded-l rounded-r capitalize transition-all duration-200 bg-white hover:bg-green-500 hover:shadow-md focus:outline-none">
      {" "}
      {children}
    </button>
  )
}
