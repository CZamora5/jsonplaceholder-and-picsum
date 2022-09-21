import React from 'react';

// Styles
import './HamburgerButton.styles.scss';

export default function HamburgerButton(props) {
  return (
    <button className="hamburger" style={{"--size": `${props.size}rem`}}></button>
  );
}