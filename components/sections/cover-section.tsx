'use client';

import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import cover1 from '../../assets/cover/cover1.jpg';
import cover2 from '../../assets/cover/cover2.jpg';
import Section from '../section';

function CoverSection() {
  const t = useTranslations('cover');

  return (
    <Section className='cover-slider'>
      <div className='w-full h-full z-20'>
        <div className='absolute bottom-[-20px] font-whiteStar flex text-center text-2xl flex-col mt-auto text-white w-full mb-8 gap-6'>
          <h1 className='leading-snug'>
            <span className='block mb-6'>{t('title')}</span>
            <span className='block'>{t('subtitle')}</span>
          </h1>
        </div>
      </div>
      <Swiper
        grabCursor
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
          stopOnLastSlide: true,
        }}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        slidesPerView='auto'>
        {[cover1, cover2].map(slide => (
          <SwiperSlide key={slide.src}>
            <NextImage fill alt={'Cami & Fede'} placeholder='blur' src={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default CoverSection;
