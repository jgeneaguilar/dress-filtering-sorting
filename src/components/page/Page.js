import React, { useState } from 'react';
import { dressData } from '../../dressData';
import { MenuBar } from '../menu-bar/MenuBar';

export const Page = () => {
  const [filteredDresses, setFilteredDresses] = useState(dressData);

  function handleFilterDress(sizes, colors) {
    console.log('FILTER DRESS FUNC', sizes, colors);

    setFilteredDresses(
      dressData.filter(
        (d) =>
          (sizes.length === 0 || sizes.includes(d.size)) &&
          (colors.length === 0 || colors.includes(d.color))
      )
    );
  }
  console.log('FILTERED DRESSES', filteredDresses);

  return (
    <>
      <div className="dressFilters">
        <MenuBar dresses={dressData} onFilterDress={handleFilterDress} />
      </div>
      <div className="dressSortResults">
        {filteredDresses.map((dressDataItem) => (
          <div className="dressGridItem">
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
