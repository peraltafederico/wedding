'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';

import beach1 from '../../assets/carousel/beach1.jpg';
import boat1 from '../../assets/carousel/boat1.jpg';
import mexico1 from '../../assets/carousel/mexico1.jpg';
import sea1 from '../../assets/carousel/sea1.jpg';
import sea2 from '../../assets/carousel/sea2.jpg';
import sea3 from '../../assets/carousel/sea3.jpg';
import Section, { Center } from '../section';

import 'swiper/css';
import 'swiper/css/effect-cards';
const ORDERED_SLIDES = [sea3, sea2, boat1, beach1, mexico1, sea1];

function UsSection() {
  return (
    <Section className='us-slider'>
      <Center fullWide data-aos='fade-up'>
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
          }}
          slidesPerView='auto'>
          {ORDERED_SLIDES.map(slide => (
            <SwiperSlide key={slide.src}>
              <NextImage
                fill
                alt='Vacation Image'
                placeholder='blur'
                quality={100}
                sizes='(max-width: 640px) 100vw, 33vw'
                src={slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Center>
    </Section>
  );
}

export default UsSection;
