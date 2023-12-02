// 
// import React from 'react'
// import { maincaroseldata } from './maincaroseldata'
// import AliceCarousel from 'react-alice-carousel'
// 
// const maincarosel = () => {
// 
//     const items = maincaroseldata.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=""/>)
// 
//   return (
//     <AliceCarousel
//     items={items}
//     />
//   )
// }
// 
// export default maincarosel




import React from 'react';
import { maincaroseldata } from './maincaroseldata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 

const MainCarosel = () => {
  const items = maincaroseldata.map((item) => (
    <img className='cursor-pointer' role='presentation -z-10' src={item.image} alt='' />
  ));

  return <AliceCarousel items={items}
  disableButtonsControls
  autoPlay
  autoPlayInterval={1000}
  infinite />;
};

export default MainCarosel;
