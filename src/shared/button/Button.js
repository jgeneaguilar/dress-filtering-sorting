import React from 'react';
import './Button.css';

export const Button = ({ children, onClick }) => {
  return (
    <button className="sharedButton" type="button" onClick={onClick}>
      {children}
    </button>
  );
};
