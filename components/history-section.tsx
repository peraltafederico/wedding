'use client';

import React from 'react';
import NextImage from 'next/image';

import leftFlower2 from '../assets/left-flower-2.png';

import Section, { Center } from './section';
import Body from './body';

function HistorySection() {
  return (
    <Section>
      <Center>
        <NextImage
          alt='Default Image'
          src={leftFlower2}
          style={{
            opacity: 0.25,
            position: 'absolute',
            left: -180,
            top: '50%',
            transform: 'translateY(-50%)',
            maxWidth: 'unset',
            width: '300px',
          }}
        />
        <Body
          body={{
            text: (
              <>
                En tiempos de Facebook nos conocimos a traves de un ¨Me Gusta¨, en esos estados de canciones que uno
                publicaba en el muro. Nuestros caminos se cruzaron siendo adolescentes, crecimos a la par y formamos a
                lo largo de estos 10 años una hermosa relación de compañerismo, amistad, amor y respeto. Hoy queremos
                festejar el amor que nos tenemos el uno para el otro con las personas que formaron y forman parte
                importante en nuestras vidas. <span className='text-mossGreen'>Y vos sos una de ellas.</span>
              </>
            ),
          }}
          cta={{
            component: (
              <p className='font-whiteStar text-3xl text-mossGreen'>Listo para formar parte de nuestra celebracion?</p>
            ),
          }}
          title={{
            text: `Todo empezó con un "Me Gusta"`,
          }}
        />
      </Center>
    </Section>
  );
}

export default HistorySection;
