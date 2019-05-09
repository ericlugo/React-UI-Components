import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

import './Header.css';

const HeaderContainer = () => {
  return (
    <header>
      <ImageThumbnail />
      <div className='text-container'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
};

export default HeaderContainer;
