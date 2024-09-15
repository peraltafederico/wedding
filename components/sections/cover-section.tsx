'use client';

import React from 'react';
import NextImage from 'next/image';

import cover from '../../assets/cover.jpg';
import Section from '../section';

function CoverSection() {
  return (
    <Section>
      <NextImage
        fill
        alt='Default Image'
        src={cover}
        style={{
          backgroundPositionY: 'center',
          objectFit: 'cover',
        }}
      />
      <div className='w-full h-full'>
        <div className='absolute bottom-[-20px] font-whiteStar flex text-center text-2xl flex-col mt-auto text-white w-full mb-8 gap-6'>
          <h1 className='leading-snug'>Cami y Fede</h1>
          <h1 className='leading-snug'>Nos Casamos!</h1>
        </div>
      </div>
      <div />
    </Section>
  );
}

export default CoverSection;
