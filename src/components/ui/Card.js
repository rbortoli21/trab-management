import React from 'react';

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-md p-6">
    {children}
  </div>
);

export default Card;

const CardHeader = ({ children }) => (
  <div className="border-b border-gray-200 pb-4 mb-4">
    {children}
  </div>
);


const CardContent = ({ children }) => (
  <div className="text-gray-700">
    {children}
  </div>
);


export {CardHeader, CardContent};