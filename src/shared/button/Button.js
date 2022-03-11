import React from 'react';
import './Button.css';

export const Button = ({ name }) => {
  return (
    <button className="sharedButton" type="button">{name}</button>
  );
};
