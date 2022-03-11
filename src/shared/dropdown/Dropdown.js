import React from 'react';
import { Button } from '../button/Button';
import './Dropdown.css';

export const Dropdown = ({
  selectedOptions,
  options,
  isOpen,
  name,
  onClick,
  onSelect,
}) => {
  function handleItemClick(option) {
    onSelect(option);
  }

  const hasOptions = options.length > 0;

  return (
    <div className="dropdown" onClick={onClick}>
      <Button name={name} />
      {isOpen && (
        <div className="list" role="list">
          {hasOptions &&
            options.map((option) => (
              <button
                key={`${option.type}-${option.value}`}
                type="button"
                isSelected={
                  !!selectedOptions.find(
                    (selected) => selected.value === option.value
                  )
                }
                onClick={() => handleItemClick(option)}
              >
                {option.name}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
