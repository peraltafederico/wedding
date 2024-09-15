'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import NextImage from 'next/image';

import leftFlower1 from '../assets/left-flower-1.png';
import leftFlower2 from '../assets/left-flower-2.png';

import Section, { Center } from './section';
import Body from './body';

function GiftSection() {
  return (
    <Section>
      <Center>
        {/* <NextImage
          alt='Default Image'
          src={leftFlower2}
          style={{
            opacity: 0.25,
            position: 'absolute',
            left: -180,
            top: -32,
            maxWidth: 'unset',
            width: '300px',
          }}
        /> */}
        <Body
          body={{
            text: 'Tu presencia ya es un regalo que no tiene precio. Si adicionalmente quieres enviarnos algún detalle ayudanos con nuestra...',
          }}
          cta={{
            component: (
              <Button className='bg-mossGreen text-white font-bold w-button w-full md:w-auto' size='lg'>
                Luna de miel
              </Button>
            ),
          }}
          title={{
            text: `Estamos ansiosos de celebrarlo juntos`,
          }}
        />
      </Center>
    </Section>
  );
}

export default GiftSection;
