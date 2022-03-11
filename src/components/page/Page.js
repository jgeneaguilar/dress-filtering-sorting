import React, { useState } from 'react';
import { dressData } from '../../dressData';
import { MenuBar } from '../menu-bar/MenuBar';
import { sortDressesByPrice } from './Page.helpers';

export const Page = () => {
  const [filteredDresses, setFilteredDresses] = useState(dressData);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedDresses = sortDressesByPrice(filteredDresses, sortOrder);

  function handleFilterDress(sizes, colors) {
    setFilteredDresses(
      dressData.filter(
        (d) =>
          (sizes.length === 0 || sizes.includes(d.size)) &&
          (colors.length === 0 || colors.includes(d.color))
      )
    );
  }
  console.log('FILTERED DRESSES', filteredDresses);

  function handleToggleSortOrder() {
    setSortOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

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
    </>
  );
};
