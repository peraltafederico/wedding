'use client';

import React, { useEffect } from 'react';
import NextImage from 'next/image';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';

import followDark from '../assets/icons/follow-dark.png';
import followWhite from '../assets/icons/follow-light.png';
import { track } from '../utils/mixpanel';

function Instagram() {
  const [show, setShow] = React.useState(false);
  const isSSR = useIsSSR();
  const { theme } = useTheme();
  const handleInstagram = () => {
    track('Instagram', {
      section: 'Fixed',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.fullpage_api) {
        const index = window.fullpage_api.getActiveSection().index();

        setShow(index >= 3);
      }
    });
  }, []);

  const src = theme === 'light' || isSSR ? followWhite : followDark;

  return (
    <a
      className={clsx('animate-bouceSlow fixed z-10 bottom-0 right-0  transition-all cursor-pointer', {
        'opacity-100': show,
        'opacity-0': !show,
      })}
      color='primary'
      href='https://www.instagram.com/noscasamos.camiyfede'
      rel='noreferrer'
      role='button'
      target='_blank'
      onClick={handleInstagram}>
      <div className='flex gap-2 items-center'>
        <NextImage alt='Instagram' height={80} sizes='(max-width: 640px) 80px, 100px' src={src} width={80} />
      </div>
    </a>
  );
}

export default Instagram;
