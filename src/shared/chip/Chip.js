import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Chip.css';

export const Chip = ({ name, onRemove }) => {
  return (
    <div className="chip">
      <span>{name}</span>
      <FontAwesomeIcon icon={faCircleXmark} onClick={() => onRemove(name)} />
    </div>
  );
};
