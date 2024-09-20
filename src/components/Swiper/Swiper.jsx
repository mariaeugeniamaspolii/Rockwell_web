import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Swiper.scss';

import CustomCard from '../Card/CustomCard';
import { Col } from 'react-bootstrap';

import Swiper from 'swiper';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';



const CustomSwiper = ({ array }) => {

    useEffect(() => {
        Swiper.use([EffectCoverflow]);

        new Swiper('.swiper', {
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
            },
            direction: 'horizontal',
            loop: false,
            slidesPerView: "auto",
            centeredSlides: true,
            initialSlide: 1,
            grabCursor: true,
            spaceBetween: 24,

        });
    }, []);


    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                {array.map(({ id, name, cover, year }) => (
                    <Col key={id} sm={6} md={4} lg={3} className="swiper-slide d-flex justify-content-stretch">
                        <div className="h-100">
                            <Link to={`/albums/${id}`} key={id}>
                                <CustomCard img={cover} title={name} description={year} text="" subtitle="" />
                            </Link>
                        </div>
                    </Col>
                ))}
            </div>
        </div>
    );
};

export default CustomSwiper;
