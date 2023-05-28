import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselContainer } from './CarouselStyles';
import './CarouselStyleCss.css';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <CarouselContainer>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='custom-carousel'>
          <img
            className='d-block'
            src='https://cdn.powered-by-nitrosell.com/store_images/23/5660/image_carousel/WBImagination.jpg'
            alt='Third slide'
          />

          {/*           <Carousel.Caption>
            <h3>Primer Slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block'
            src='https://www.anteikumangas.com/imagenes/Jujutsu%20PC.png'
            alt='Second slide'
          />

          {/*           <Carousel.Caption>
            <h3>Segundo Slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block'
            src='https://cdn.shopify.com/s/files/1/0543/4293/files/HeroSpots-Spring2023-03234_1920x.jpg?v=1679925208'
            alt='Third slide'
          />

          {/*           <Carousel.Caption>
            <h3>Tercer slide</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselComponent;