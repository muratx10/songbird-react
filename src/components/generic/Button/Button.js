import React from 'react';
import './Button.scss';


const Button = ({ win, label, nextSection, endGame }) => {
  let btnStyle = 'button level ';
  let disable = false;
  if (!win) {
    btnStyle += 'disabled';
    disable = true;
  }

  return (
    <button className={btnStyle} disabled={disable} type="button" onClick={nextSection}>
      {label}
    </button>
  );
};

export default Button;
