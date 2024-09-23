import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem } from '@/components/ui';

function Header() {
  return (
    <Navbar>
      <NavbarBrand>Gerenciador de Orçamento Pessoal</NavbarBrand>
      <NavbarNav>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
        <NavItem><Link to="/sobre">Sobre</Link></NavItem>
        <NavItem><Link to="/login">Login</Link></NavItem>
      </NavbarNav>
    </Navbar>
  );
}

export default Header;