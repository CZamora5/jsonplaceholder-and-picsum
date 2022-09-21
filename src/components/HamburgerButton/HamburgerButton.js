import React, { useState } from 'react';

// Styles
import './HamburgerButton.styles.scss';

export default function HamburgerButton(props) {
  const [animationDuration, setAnimationDuration] = useState("0ms");

  function handleClick() {
    props.setState(prevState => !prevState);
    setAnimationDuration("400ms");
  }

  return (
    <button 
      className={props.state ? "hamburger active" : "hamburger"}
      onClick={handleClick}
      style={{ "--size": `${props.size}rem`, "--duration": animationDuration }}
    />
  );
}