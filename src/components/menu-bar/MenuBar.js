import React, { useState, useEffect } from 'react';
import { Button } from '../../shared/button/Button';
import { Chip } from '../../shared/chip/Chip';
import { DropdownFilter } from '../dropdown-filter/DropdownFilter';
import {
  getOptions,
  toggleFilter,
  MIN_PRICE,
  MAX_PRICE,
} from './MenuBar.helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpShortWide,
  faArrowDownShortWide,
} from '@fortawesome/free-solid-svg-icons';

import { PriceSlider } from '../price-slider/PriceSlider';
import './MenuBar.css';

export const MenuBar = ({
  dresses,
  sortOrder,
  onFilterDress,
  onToggleSortOrder,
}) => {
  const [colorFilters, setColorFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);

  const sortIcon =
    sortOrder === 'asc' ? faArrowUpShortWide : faArrowDownShortWide;

  useEffect(() => {
    updateFilters();
    // eslint-disable-next-line
  }, [colorFilters, sizeFilters, priceRange]);

  function handleToggleColorFilter(filter) {
    const updatedFilters = toggleFilter(colorFilters, filter);
    setColorFilters(updatedFilters);
  }

  function handleToggleSizeFilter(filter) {
    const updatedFilters = toggleFilter(sizeFilters, filter);
    setSizeFilters(updatedFilters);
  }

  function handlePriceRangeChange(value) {
    setPriceRange(value);
  }

  function updateFilters() {
    onFilterDress(
      sizeFilters.map((s) => s.value),
      colorFilters.map((c) => c.value),
      priceRange
    );
  }

  function renderColorFilters() {
    return colorFilters.map((filter) => (
      <Chip
        key={filter.name}
        name={filter.name}
        onRemove={() => handleToggleColorFilter(filter)}
      />
    ));
  }

  function renderSizeFilters() {
    return sizeFilters.map((filter) => (
      <Chip
        key={filter.name}
        name={filter.name}
        onRemove={() => handleToggleSizeFilter(filter)}
      />
    ));
  }

  const hasFilters = colorFilters.length > 0 || sizeFilters.length > 0;

  function handleClearFilters() {
    setColorFilters([]);
    setSizeFilters([]);
  }

  return (
    <>
      <div className="menuBar">
        <div className="menuFilters">
          <PriceSlider
            defaultRange={[MIN_PRICE, MAX_PRICE]}
            priceRange={priceRange}
            onPriceChange={handlePriceRangeChange}
          />
          <DropdownFilter
            filterName="Color"
            options={getOptions(dresses, 'color')}
            onToggleFilter={handleToggleColorFilter}
          />
          <DropdownFilter
            filterName="Size"
            options={getOptions(dresses, 'size')}
            onToggleFilter={handleToggleSizeFilter}
          />
        </div>

        <Button onClick={onToggleSortOrder}>
          <FontAwesomeIcon icon={sortIcon} /> Price
        </Button>
      </div>

      <div className="menuFilters">
        {renderColorFilters()}
        {renderSizeFilters()}
        {hasFilters && <Chip name="Clear all" onRemove={handleClearFilters} />}
      </div>
    </>
  );
};
