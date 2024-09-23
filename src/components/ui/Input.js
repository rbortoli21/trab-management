import React from 'react';

const Input = (props) => (
  <input
    className="border-gray-300 border-2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-2"
    {...props}
  />
);

export default Input;