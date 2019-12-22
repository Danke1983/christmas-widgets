import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.css';

export default class Slideshow extends React.Component {
  render() {
    return <Carousel style={{ backgroundColor: "black" }}>
      <Carousel.Item> <img src={ require('./0b0.jpg') } alt="my extended family" /> </Carousel.Item>
      <Carousel.Item> <img src={ require('./0b1.jpg') } alt="my extended family" /> </Carousel.Item>
      <Carousel.Item> <img src={ require('./0b2.jpg') } alt="my extended family" /> </Carousel.Item>
      <Carousel.Item> <img src={ require('./0b3.jpg') } alt="my extended family" /> </Carousel.Item>
      <Carousel.Item> <img src={ require('./0b4.jpg') } alt="my extended family" /> </Carousel.Item>
      <Carousel.Item> <img src={ require('./0b5.jpg') } alt="my extended family" /> </Carousel.Item>
      <Carousel.Item> <img src={ require('./0b6.jpg') } alt="my extended family" /> </Carousel.Item>
      <Carousel.Item> <img src={ require('./0b7.jpg') } alt="my extended family" /> </Carousel.Item>
    </Carousel>;
  }
}
