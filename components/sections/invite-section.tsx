'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import NextImage from 'next/image';

import leftFlower1 from '../..//assets/left-flower-1.png';
import leftFlower2 from '../../assets/left-flower-2.png';
import Section, { Center } from '../section';
import Body from '../body';

function InviteSection() {
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
          className='!gap-0'
          cta={{
            component: (
              <>
                <Button
                  as={'a'}
                  className='font-bold w-button w-full md:w-auto'
                  color='primary'
                  href='https://docs.google.com/forms/d/1jcMBC6Rhw_JDOkxwRukwnl60YiZH5GtSBg1TGEQJbOE'
                  size='lg'
                  target='_blank'>
                  Confirmar Asistencia
                </Button>
              </>
            ),
            className: 'mt-0',
          }}
          title={{
            text: `¡Contamos con vos!`,
          }}
        />
      </Center>
    </Section>
  );
}

export default InviteSection;
