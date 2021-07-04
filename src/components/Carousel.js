import React from 'react';
import { Carousel } from 'antd';
import '../assets/scss/carousel.scss';

export default function CarouselTemplate() {
    return (
        <Carousel autoplay>
            <div>
                <h3 className="ps-carousel-content__desktop">1</h3>
            </div>
            <div>
                <h3 className="ps-carousel-content__desktop">2</h3>
            </div>
            <div>
                <h3 className="ps-carousel-content__desktop">3</h3>
            </div>
            <div>
                <h3 className="ps-carousel-content__desktop">4</h3>
            </div>
        </Carousel>
    );
}
