'use client';

import React from 'react';
import { Button, useDisclosure } from '@nextui-org/react';
import NextImage from 'next/image';
import confetti from 'canvas-confetti';

import leftFlower1 from '../assets/left-flower-1.png';
import leftFlower2 from '../assets/left-flower-2.png';
import Section, { Center } from '../section';
import Body from '../body';
import GiftModal from '../gift-modal';

function fire(particleRatio: number, opts: confetti.Options) {
  confetti({
    ...opts,
    origin: { y: 0.5 },
    colors: ['#A2A27C'],
    particleCount: Math.floor(500 * particleRatio),
  });
}

function GiftSection() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = () => {
    onOpen();
    fire(0.25, {
      spread: 100,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <>
      <GiftModal isOpen={isOpen} onOpenChange={onOpenChange} />
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
                <Button className='font-bold w-button w-full md:w-auto' color='primary' size='lg' onClick={handleClick}>
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
    </>
  );
}

export default GiftSection;
