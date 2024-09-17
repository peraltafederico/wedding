'use client';

import { Button } from '@nextui-org/button';
import confetti from 'canvas-confetti';

import { triggerConfetti } from '../utils/confetti';

type Props = {
  text: string;
};

function InviteCTA({ text }: Props) {
  const scalar = 2;
  const love = confetti.shapeFromText({ text: '💖', scalar });
  const handleClick = () => {
    triggerConfetti({
      shapes: [love],
    });
  };

  return (
    <Button
      as={'a'}
      className='font-bold w-button w-full md:w-auto'
      color='primary'
      href='https://docs.google.com/forms/d/1jcMBC6Rhw_JDOkxwRukwnl60YiZH5GtSBg1TGEQJbOE'
      size='lg'
      onClick={handleClick}>
      {text}
    </Button>
  );
}

export default InviteCTA;
