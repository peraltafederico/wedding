'use client';

import { Button, useDisclosure } from '@nextui-org/react';

import { triggerConfetti } from '../utils/confetti';

import GiftModal from './gift-modal';

type Props = {
  text: string;
};

function GiftTrigger({ text }: Props) {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const handleClick = () => {
    onOpen();
    triggerConfetti();
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
