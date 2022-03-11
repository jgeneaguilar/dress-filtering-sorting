import React, { useState, useEffect } from 'react';
import { Button } from '../../shared/button/Button';
import { DropdownFilter } from '../dropdown-filter/DropdownFilter';
import { getOptions } from './MenuBar.helpers';
import './MenuBar.css';

export const MenuBar = ({ dresses, onFilterDress }) => {
  const [colorFilters, setColorFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  console.log(colorFilters);
  const selectedFilters = colorFilters.concat(sizeFilters);

  useEffect(() => {
    updateFilters(sizeFilters, colorFilters);
  }, [colorFilters, sizeFilters]);

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
        <Button name="Sort" />
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
