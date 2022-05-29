import React from 'react';
import './Hero.css'
import images from '../image'
const Hero = () => {
  return (
    <div className='app__hero' >
      <div style={{ color: 'white', fontFamily: 'Libre Baskerville', fontStyle: 'normal', fontWeight: 700, fontSize: '80px', lineHeight: '96px' }}>Cari Cari</div>
      <p style={{ color: 'white', fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 400, fontSize: '24px', lineHeight: '32px' }}>Live from their sofa to yours. Get closer to your favorite <br /> artists, and never miss out.</p>
      <div className="app__hero-circle">
      <div className="app__hero-circle1">
        <img src={images.Element} alt='' />
      </div>
      <div className="app__hero-circle2">
        <img src={images.Default} alt='' />
      </div>
      <div className="app__hero-circle3">
        <img src={images.Default} alt='' />
      </div>
      <div className="app__hero-circle4">
        <img src={images.Default} alt='' />
      </div>

      </div>



    </div>


  )
}

export default Hero;