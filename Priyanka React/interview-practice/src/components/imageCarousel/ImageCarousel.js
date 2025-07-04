import React, { useState } from 'react';
import './index.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

  const images = [
    'https://picsum.photos/seed/img1/600/400',
    'https://picsum.photos/seed/img2/600/400',
    'https://picsum.photos/seed/img3/600/400',
  ];

  const previous = () => {
    setIndex(index === 0 ? (images.length-1) : index - 1);
  }

  const next = () => {
    setIndex(index === (images.length-1) ? 0 : index + 1);
  }
  

  return (
    <div className='carousel'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previous} />
        {console.log(index)}
        {
            images.map((value, idx) => (
                <img src={value} key={idx} alt={idx} className={index === idx ? "carousel-image": "carousel-image hidden"}/>
            ))
        }
       
        <BsArrowRightCircleFill  className='arrow arrow-right' onClick={next} />
        <span className="indicators">
            {
                images.map((_, idx) => (
                    <button key={idx} className={index === idx ? "indicator": "indicator disable-btn"}/>
                ))
            }
        </span>
    </div>
  );
};

export default ImageCarousel;