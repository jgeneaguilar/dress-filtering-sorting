import React, { useState } from 'react';
import { Dropdown } from '../../shared/dropdown/Dropdown';

export const DropdownFilter = ({
  filterName,
  options,
  selectedFilters,
  onToggleFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <Dropdown
      name={filterName}
      isOpen={isOpen}
      options={options}
      selectedOptions={selectedFilters}
      onClick={handleClick}
      onSelect={onToggleFilter}
    />
  );
};
