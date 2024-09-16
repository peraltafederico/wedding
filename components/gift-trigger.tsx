'use client';

import { Button, useDisclosure } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import GiftModal from './gift-modal';

function fire(particleRatio: number, opts: confetti.Options) {
  confetti({
    ...opts,
    origin: { y: 0.5 },
    colors: ['#A2A27C'],
    particleCount: Math.floor(500 * particleRatio),
  });
}

type Props = {
  text: string;
};

function GiftTrigger({ text }: Props) {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

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
      <Button className='font-bold w-button w-full md:w-auto' color='primary' size='lg' onClick={handleClick}>
        {text}
      </Button>
    </>
  );
}

export default GiftTrigger;
