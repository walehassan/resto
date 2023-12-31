import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>21, chieft Bamidele Eletu street, Osapa Lagos</p>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Monday - Friday: 10:am - 02:00am</p>
        <p className='p__opensans'>Saturday - Sunday: 10:am - 01:00am</p>
      </div>
      <button className='custom__button'>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find us"/>
    </div>
  </div>
);

export default FindUs;
