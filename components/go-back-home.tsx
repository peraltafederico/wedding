'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

import { track } from '../utils/mixpanel';

const GoBackHome = () => {
  const t = useTranslations('cover');

  return (
    <Button
      as={Link}
      className='z-30 font-bold fixed top-0 left-0 bg-mossGreen opacity-70 text-white rounded-t-none rounded-bl-none'
      href='/'
      size='sm'
      onClick={() => {
        track('Go Back Home');
      }}>
      {t('goBack')}
    </Button>
  );
};

export default GoBackHome;
