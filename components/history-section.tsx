'use client';

import React from 'react';

import {} from '@nextui-org/react';
import NextImage from 'next/image';

import leftFlower1 from '../assets/left-flower-1.png';

import Section from './section';

function HistorySection() {
  return (
    <Section>
      <div className='relative'>
        <NextImage
          alt='Default Image'
          src={leftFlower1}
          style={{
            opacity: 0.25,
            position: 'absolute',
            left: -92,
            top: '-3rem',
            maxWidth: 'unset',
            width: '300px',
          }}
        />
        <div className='flex flex-col gap-6 text-center'>
          <div data-aos='fade-up'>
            <div className='font-bold text-2xl flex flex-col'>
              <h2>
                <span className='block'>{`Todo empezó con un`}</span>
                <span className='block'>{`"Me Gusta"`}</span>
              </h2>
            </div>
            <p className='leading-loose'>
              En tiempos de Facebook nos conocimos a traves de un ¨Me Gusta¨, en esos estados de canciones que uno
              publicaba en el muro. Nuestros caminos se cruzaron siendo adolescentes, crecimos a la par y formamos a lo
              largo de estos 10 años una hermosa relaciasdón de compañerismo, amistad, amor y respeto. Hoy queremos
              festejar el amor que nos tenemos el uno para el otro con las personas que formaron y forman parte
              importante en nuestras vidas. <span className='text-mossGreen'>Y vos sos una de ellas.</span>
            </p>
          </div>
          <div data-aos='fade-up'>
            <p className='font-whiteStar text-3xl text-mossGreen'>Listo para formar parte de nuestra celebracion?</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HistorySection;
