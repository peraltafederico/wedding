'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import NextImage from 'next/image';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import Section, { Center } from '../section';

import 'swiper/css';
import 'swiper/css/effect-cards';

function UsSection() {
  return (
    <Section className='us-slider'>
      <Center fullWide>
        {/* <NextImage
        alt='Default Image'
        src={simpleFlower}
        style={{
          opacity: 0.1,
          width: '300px',
          top: 0,
          position: 'absolute',
        }}
      /> */}
        <Swiper
          centeredSlides
          grabCursor
          loop
          loopAddBlankSlides
          breakpoints={{
            0: {
              spaceBetween: 24,
            },
            512: {
              spaceBetween: 32,
            },
            1024: {
              spaceBetween: 64,
            },
          }}
          slidesPerView='auto'>
          {[slide1, slide2, slide3, slide1, slide2, slide3].map(slide => (
            <SwiperSlide key={slide.src}>
              <NextImage fill alt='Default Image' src={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Center>
    </Section>
  );
}

export default UsSection;
