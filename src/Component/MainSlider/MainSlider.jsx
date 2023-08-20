import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'
export default function MainSlider() {
  return (
    <>
      <div className="row g-0 mt-5 py-4">
        <div className="col-md-9">
          <OwlCarousel className='owl-theme' loop={true} items={1} margin={0} >
            <img src={slider2} alt="slide1"  className='w-100' height={360} />
            <img src={slider3} alt="slide2" className='w-100' height={360} />
            <img src={slider1} alt="slide3" className='w-100' height={360} />
          </OwlCarousel>
        </div>
        <div className="col-md-3">
          <img src={slider2} alt="slide1" className='w-100' />
          <img src={slider3} alt="slide2" className='w-100' />
        </div>
      </div>
    
    </>
  )
}
