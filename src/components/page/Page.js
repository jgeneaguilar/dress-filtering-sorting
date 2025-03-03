import React, { useState } from 'react';
import { dressData } from '../../dressData';
import { MenuBar } from '../menu-bar/MenuBar';
import { sortDressesByPrice } from './Page.helpers';
import './Page.css';

export const Page = () => {
  const [filteredDresses, setFilteredDresses] = useState(dressData);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedDresses = sortDressesByPrice(filteredDresses, sortOrder);

  function handleFilterDress(sizes, colors, priceRange, sizeRange) {
    const [minPrice, maxPrice] = priceRange;
    const [minSize, maxSize] = sizeRange;

    const filterSizes = (dress) =>
      sizes.length === 0 || sizes.includes(dress.size);

    const filterColors = (dress) =>
      colors.length === 0 || colors.includes(dress.color);

    const filterPriceRange = (dress) =>
      (!minPrice || dress.price >= minPrice) &&
      (!maxPrice || dress.price <= maxPrice);

    const filterSizeRange = (dress) =>
      (!minSize || dress.size >= minSize) &&
      (!maxSize || dress.size <= maxSize);

    setFilteredDresses(
      dressData.filter(
        (d) =>
          filterSizes(d) &&
          filterColors(d) &&
          filterPriceRange(d) &&
          filterSizeRange(d)
      )
    );
  }

  function handleToggleSortOrder() {
    setSortOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  const isEmpty = sortedDresses.length === 0;

  return (
    <>
      <div className="dressFilters">
        <MenuBar
          dresses={dressData}
          sortOrder={sortOrder}
          onFilterDress={handleFilterDress}
          onToggleSortOrder={handleToggleSortOrder}
        />
      </div>
      {!isEmpty && (
        <div className="dressSortResults">
          {sortedDresses.map((dressDataItem) => (
            <div className="dressGridItem" key={dressDataItem.dress_id}>
              <div className="dressGridImgContainer">
                <img
                  alt={`${dressDataItem.color}-size-${dressDataItem.size}`}
                  src={dressDataItem['photo_url']}
                  width={150}
                />
              </div>
              <div>${dressDataItem['price']}</div>
              <div>Size {dressDataItem['size']}</div>
              <div>Color: {dressDataItem['color']}</div>
            </div>
          ))}
        </div>
      )}
      {isEmpty && <div className="noResult">No dresses found</div>}
    </>
  );
};
