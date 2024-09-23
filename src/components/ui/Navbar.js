import React from 'react';

const Navbar = ({ children }) => (
  <nav className="bg-green-600 text-white py-4 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      {children}
    </div>
  </nav>
);

const NavbarBrand = ({ children }) => (
  <div className="text-xl font-bold hover:text-green-300 transition-colors">
    {children}
  </div>
);

const NavbarNav = ({ children }) => (
  <ul className="flex space-x-6">{children}</ul>
);

const NavItem = ({ children }) => (
  <li className="hover:text-green-300 transition-colors">
    {children}
  </li>
);


export default Navbar;
export { NavbarBrand, NavbarNav, NavItem };
