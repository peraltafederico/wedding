import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';

import { track } from '../utils/mixpanel';

type Props = {};

const GoBackHome = () => {
  return (
    <Button
      as={Link}
      className='z-30 font-bold fixed top-0 left-0 bg-mossGreen opacity-70 text-white rounded-t-none rounded-bl-none'
      href='/'
      size='sm'
      onClick={() => {
        track('Go Back Home');
      }}>
      Volver las fotos
    </Button>
  );
};

export default GoBackHome;
