import React from 'react';

const Button = ({ children, ...props }) => (
  <button
    className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md m-2"
    {...props}
  >
    {children}
  </button>
);

export default Button;