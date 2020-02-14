import React from 'react';
import PropTypes from 'prop-types';
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

Button.defaultProps = {
  win: undefined,
};

Button.propTypes = {
  win: PropTypes.bool,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  endGame: PropTypes.bool.isRequired,
};

export default Button;
