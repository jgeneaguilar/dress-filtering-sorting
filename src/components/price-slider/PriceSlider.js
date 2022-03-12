import React, { useState } from 'react';
import { Button } from '../../shared/button/Button';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './PriceSlider.css';

export const PriceSlider = ({ defaultRange, priceRange, onPriceChange }) => {
  const [minPrice, maxPrice] = defaultRange;

  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSlider() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSliderChange(value) {
    onPriceChange(value);
  }

  return (
    <>
      <div className="priceSlider">
        <Button onClick={handleToggleSlider}>Price</Button>
      </div>
      {isOpen && (
        <div className="priceDropdown">
          <Range
            defaultValue={priceRange}
            min={minPrice}
            max={maxPrice}
            handleStyle={[
              { backgroundColor: '#7455E3', borderColor: '#7455E3' },
              { backgroundColor: '#7455E3', borderColor: '#7455E3' },
            ]}
            trackStyle={[{ backgroundColor: '#7455E3' }]}
            onChange={handleSliderChange}
          />
          <div className="priceRange">
            <span>{`$${priceRange[0]} - $${priceRange[1]}`}</span>
          </div>
        </div>
      )}
    </>
  );
};
