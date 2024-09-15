'use client';

import React from 'react';

import Section, { Center } from './section';

import NextImage from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-cards';
import date from '../assets/date.png';
import simpleFlower from '../assets/simple-flower.png';

type InfoProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
};

function Info({ children, description, title }: InfoProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[100px]'>
        <NextImage alt='Date Icon' src={date} />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='font-bold'>{title}</h3>
        <div className='flex flex-col items-center'>
          <span className='font-whiteStar text-mossGreen'>{description}</span>
          {children}
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <Section className='flex justify-center'>
      <Center className='flex flex-col items-center'>
        <div className=' relative w-fit'>
          <NextImage
            alt='Default Image'
            src={simpleFlower}
            style={{
              opacity: 0.1,
              width: '300px',
              maxWidth: 'unset',
              top: 0,
              left: -140,
              position: 'absolute',
            }}
          />
          <Info description='17 de Noviembre 2024' title='Fecha y hora'>
            <span className='font-whiteStar text-mossGreen'>17:30 hs</span>
          </Info>
          <Info description='Elegante' title='Dress Code' />
          <Info description='Quinta de Benavidez' title='Lugar'>
            <span className='text-xs mt-2'>Mendoza 3499, Benavidez, Bs.As</span>
          </Info>
          {/* <Info description='@noscasamos.camiyfede' title='Instagram' /> */}
        </div>
      </Center>
    </Section>
  );
}

export default InfoSection;
