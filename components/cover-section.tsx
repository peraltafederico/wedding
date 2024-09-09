'use client';

import React from 'react';

function CoverSection() {
  return (
    <section className='w-screen h-screen'>
      <div className={`absolute w-full h-full bg-[url('/cover.jpg')] bg-fixed bg-center bg-cover`}>
        {/* <NextImage
          fill
          alt='Default Image'
          src={cover}
          style={{
            backgroundPositionY: 'center',
            objectFit: 'cover',
          }}
        /> */}
      </div>
      <div className='absolute w-full h-full flex'>
        <div className='font-whiteStar flex text-center text-4xl flex-col mt-auto text-white w-full mb-8 gap-6'>
          <h1 className='leading-snug'>Cami y Fede</h1>
          <h1 className='leading-snug'>Nos Casamos!</h1>
        </div>
      </div>
    </section>
  );
}

export default CoverSection;
