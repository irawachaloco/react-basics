import * as React from 'react';
import { ceramic } from '../data/ceramic/ceramic';

const Carousel = require('nuka-carousel');

class FirstCarousel extends React.Component {
    // mixins: [Carousel.ControllerMixin],
    public render() {
      return (
        <Carousel>
          {ceramic.map(
              (artwork, i) =>
                <div className='slide-item' key={i}>
                    <img src={artwork.imageUrl} title={artwork.title}/>
                    <p>{artwork.title}</p>
                </div>,
            )}
        </Carousel>
      );
    }
  }

export const CarouselTest = () =>
    <section>
        <FirstCarousel/>
    </section>;
