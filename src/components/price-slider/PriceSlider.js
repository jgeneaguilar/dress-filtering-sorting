import React, { useState } from 'react';
import { Button } from '../../shared/button/Button';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './PriceSlider.css';

export const PriceSlider = ({
  defaultRange,
  name,
  range,
  step,
  onRangeChange,
}) => {
  const [min, max] = defaultRange;

  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSlider() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSliderChange(value) {
    onRangeChange(value);
  }

  function handleSliderClear() {
    onRangeChange(defaultRange);
  }

  return (
    <>
      <div className="priceSlider">
        <Button onClick={handleToggleSlider}>{name}</Button>
      </div>
      {isOpen && (
        <div className="priceDropdown">
          <Range
            defaultValue={range}
            min={min}
            max={max}
            handleStyle={[
              { backgroundColor: '#7455E3', borderColor: '#7455E3' },
              { backgroundColor: '#7455E3', borderColor: '#7455E3' },
            ]}
            step={step}
            trackStyle={[{ backgroundColor: '#7455E3' }]}
            value={range}
            onChange={handleSliderChange}
          />
          <div className="priceRange">
            {name === 'Price' ? (
              <span>{`$${range[0]} - $${range[1]}`}</span>
            ) : (
              <span>{`${range[0]} - ${range[1]}`}</span>
            )}
          </div>
          <div>
            <button type="button" onClick={handleSliderClear}>
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
};
