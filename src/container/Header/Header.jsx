import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id=''>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the New Flavor"/>
      <h1 className='app__header-h1'>The Key To <br/> Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}> Prepare to savor the finest ingredients, expertly prepared to tantalize your palate. We invite you to relax, savor, and savor every moment with us as we take you on a gastronomic adventure like no other. Thank you</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
