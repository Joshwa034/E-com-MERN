// import React from 'react';
// 
// const Homepage = () => {
//   return (
//     <div>
//       <maincarosel />
//       <div>
//         others section
//       </div>
//     </div>
//   )
// }
// 
// export default Homepage;



import React from 'react';
import MainCarosel from '../../components/homecarosel/maincarosel'; // Replace 'path-to-maincarosel-component' with the actual path
import HomeSectionCaresol from '../../components/HomeSectionCarosel/HomeSectionCaresol';
import { mens_kurta } from '../../../Data/Mens_kurta';

const Homepage = () => {
  return (
    <div>
      <MainCarosel /> {/* Use the correct component name and self-closing tag */}
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCaresol data ={mens_kurta} sectionName={"Men's kurta"}/>
        <HomeSectionCaresol data ={mens_kurta}sectionName={"Men's Shoes"}/>
        <HomeSectionCaresol data ={mens_kurta}sectionName={"Men's \Shirt"}/>
        <HomeSectionCaresol data ={mens_kurta}sectionName={"Women's Saree"}/>
        <HomeSectionCaresol data ={mens_kurta}sectionName={"Women's dress"}/>

        
      </div>
    </div>
  );
};

export default Homepage;
