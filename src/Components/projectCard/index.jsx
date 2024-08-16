import React from 'react';
import cardData from './cardData';
import "./card.css"
const ImageLink = () => {
  return (
    <>
      {cardData.map((item, index) => (
        <div key={index} className='flex card'>
              <img src={item.image} alt="Project Image" className='img' />
             <div className="cardText flex">
              <h2 className='h2'>{item.title}</h2>
              <p className='projectInfo  primaryColor' >{item.description}</p>
              </div>
        </div>
      ))}
    </>
  );
};

function Index() {
  return (
    <div className='cardContainer flex'>
      <ImageLink />
    </div>
  );
}

export default Index;
