'use client';

import React from 'react';
import NextImage from 'next/image';

import cover from '../assets/cover.jpg';

function CoverSection() {
  return (
    <section className='w-screen h-screen'>
      <div className='absolute w-full h-full'>
        <NextImage
          fill
          alt='Default Image'
          src={cover}
          style={{
            backgroundPositionY: 'center',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='absolute w-full h-full flex' data-aos='fade-up'>
        <div className='flex flex-col mt-auto justify-center w-full mb-24 gap-12'>
          <h1 className='w-full text-center !text-white font-whiteStar text-6xl'>Cami y Fede</h1>
          <h1 className='w-full text-center text-white font-whiteStar text-6xl'>Nos Casamos!</h1>
        </div>
      </div>
    </section>
  );
}

export default CoverSection;
