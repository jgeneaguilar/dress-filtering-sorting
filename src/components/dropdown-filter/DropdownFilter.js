import React, { useState } from 'react';
import { Dropdown } from '../../shared/dropdown/Dropdown';
import update from 'immutability-helper';

export const DropdownFilter = ({ filterName, options, onSelectFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSelectFilter(filter) {
    const selectedIndex = selectedFilters.findIndex(
      (selectedFilter) => selectedFilter.value === filter.value
    );

    if (selectedIndex > -1) {
      removeSelectedFilter(selectedIndex);

      return;
    }

    addSelectedFilter(filter);
  }

  function updateSelectedFilters(updatedSelectedFilters) {
    setSelectedFilters(updatedSelectedFilters);
    onSelectFilters(updatedSelectedFilters);
  }

  function removeSelectedFilter(index) {
    const newSelectedFilters = update(selectedFilters, {
      $splice: [[index, 1]],
    });

    updateSelectedFilters(newSelectedFilters);
  }

  function addSelectedFilter(filter) {
    const newSelectedFilters = selectedFilters.concat(filter);
    updateSelectedFilters(newSelectedFilters);
  }

  return (
    <Dropdown
      name={filterName}
      isOpen={isOpen}
      options={options}
      selectedOptions={selectedFilters}
      onClick={handleClick}
      onSelect={handleSelectFilter}
    />
  );
};
