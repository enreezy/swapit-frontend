import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import 'assets/scss/carousel.scss';

const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'left',
    backgroundColor: 'white'
}

export default function CarouselTemplate() {
    const carousel = useRef(null);

    function next() {
        carousel.current.next();
    }

    function previous() {
        carousel.current.prev();
    }

    return (
        <>
        <LeftCircleOutlined className="carousel-control-prev" onClick={previous} />
            <Carousel ref={carousel} autoplay>
                <div>
                    <h3 className="ps-carousel-content__desktop">
                        <img src="assets/images/banners/slide1.jpg" style={{ width: "100%", height: "100%" }}/>
                    </h3>
                </div>
                <div>
                    <h3 className="ps-carousel-content__desktop">
                        <img src="assets/images/banners/slide2.jpg" style={{ width: "100%", height: "100%" }}/>
                    </h3>
                </div>
                <div>
                    <h3 className="ps-carousel-content__desktop">
                        <img src="assets/images/banners/slide3.jpg" style={{ width: "100%", height: "100%" }}/>
                    </h3>
                </div>
                <div>
                    <h3 className="ps-carousel-content__desktop">
                        <img src="assets/images/banners/slide2.jpg" style={{ width: "100%", height: "100%" }}/>
                    </h3>
                </div>
            </Carousel>
        <RightCircleOutlined className="carousel-control-next" onClick={next} />
        </>
    );
}
