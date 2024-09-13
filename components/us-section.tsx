'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import NextImage from 'next/image';

import simpleFlower from '../assets/simple-flower.png';

import Section, { Center } from './section';

import 'swiper/css';
import 'swiper/css/effect-cards';

function UsSection() {
  return (
    <Section>
      <Center>
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
        <Swiper className='mySwiper' effect={'cards'} grabCursor={true} modules={[EffectCards]}>
          <SwiperSlide className={`bg-[url('/slide1.jpg')] bg-center bg-cover`} />
          <SwiperSlide className={`bg-[url('/slide2.jpg')] bg-center bg-cover`} />
          <SwiperSlide className={`bg-[url('/slide3.jpg')] bg-center bg-cover`} />
        </Swiper>
      </Center>
    </Section>
  );
}

export default UsSection;
