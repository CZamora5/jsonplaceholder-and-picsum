import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Components
import HamburgerButton from '../HamburgerButton/HamburgerButton.js';

// Styles
import './Navbar.styles.scss';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <nav className="navbar__content">
          <div className="navbar__main container" style={{ "padding-bottom": isOpen ? "0.25rem" : "1rem" }}>
            <a className="navbar__brand navbar__link" href="https://jsonplaceholder.typicode.com/">{"{JSON}"}</a>
            <HamburgerButton state={isOpen} setState={setIsOpen} size={2.5} />
          </div>
          <div className="navbar__menu" style={{ display: isOpen ? "flex" : "none" }}>
            <div class="navbar__item">
              <div class="container navbar__item__wrapper">
                <NavLink className="navbar__item__link" to="/">Home</NavLink>
              </div>
            </div>
            <div class="navbar__item">
              <div class="container navbar__item__wrapper">
                <NavLink className="navbar__item__link" to="/albums">Albums</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}