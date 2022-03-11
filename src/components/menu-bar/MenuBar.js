import React, { useState, useEffect } from 'react';
import { Button } from '../../shared/button/Button';
import { Chip } from '../../shared/chip/Chip';
import { DropdownFilter } from '../dropdown-filter/DropdownFilter';
import { getOptions } from './MenuBar.helpers';
import './MenuBar.css';

export const MenuBar = ({
  dresses,
  sortOrder,
  onFilterDress,
  onToggleSortOrder,
}) => {
  const [colorFilters, setColorFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  console.log(colorFilters);
  const selectedFilters = colorFilters.concat(sizeFilters);
  const sortButtonName =
    sortOrder === 'asc' ? 'Price: Low to High' : 'Price: High to Low';

  useEffect(() => {
    updateFilters(sizeFilters, colorFilters);
  }, [colorFilters, sizeFilters]);

  function handleRemoveFilter(filter) {
    console.log('remove filter', filter);
  }

  function handleSelectColorFilter(colors) {
    setColorFilters(colors);
  }

  function handleSelectSizeFilter(sizes) {
    setSizeFilters(sizes);
  }

  function updateFilters() {
    onFilterDress(
      sizeFilters.map((s) => s.value),
      colorFilters.map((c) => c.value)
    );
  }

  return (
    <>
      <div className="menuBar">
        <div className="menuFilters">
          <Button name="Price" />
          <DropdownFilter
            filterName="Color"
            options={getOptions(dresses, 'color')}
            onSelectFilters={handleSelectColorFilter}
          />
          <DropdownFilter
            filterName="Size"
            options={getOptions(dresses, 'size')}
            onSelectFilters={handleSelectSizeFilter}
          />
        </div>
        <Button name={sortButtonName} onClick={onToggleSortOrder} />
      </div>
      <div>
        {selectedFilters.length > 0 ? (
          selectedFilters.map((filter) => (
            <button key={filter.name}>{filter.name}</button>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
