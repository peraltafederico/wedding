'use client';

import { Button } from '@nextui-org/button';

import { track } from '../utils/mixpanel';

type Props = {
  text: string;
};

function InviteCTA({ text }: Props) {
  const handleClick = () => {
    track('Confirm');
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
