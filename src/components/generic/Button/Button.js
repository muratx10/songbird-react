import React from 'react';
import './Button.scss';


const Button = ({ win, label, action, endGame }) => {
  let btnStyle = 'button level ';
  let disable = false;
  if (endGame) {
    disable = false;
  }
  if (!win && !endGame) {
    btnStyle += 'disabled';
    disable = false;
  }

  return (
    <button className={btnStyle} disabled={disable} type="button" onClick={action}>
      {label}
    </button>
  );
};

export default Button;
