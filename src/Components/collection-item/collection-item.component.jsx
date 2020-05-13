import React from 'react';
import './collection-item.styles.scss';

const CollectionItem =  ({ id, name, price, imageUrl }) =>
(
  <div className='collection-item'>
    <div
    className='image'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    />
    <div className='collection-footer'>
      <spam1 className='name'>{name}</spam1>
      <spam1 className='price'>{price}</spam1>
    </div>
  </div>
);

export default CollectionItem;

