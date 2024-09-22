'use client';

import React, { useContext, useEffect } from 'react';
import NextImage from 'next/image';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import followENDark from '../assets/icons/follow-en-dark.png';
import followENLight from '../assets/icons/follow-en-light.png';
import followESDark from '../assets/icons/follow-es-dark.png';
import followESLight from '../assets/icons/follow-es-light.png';
import { track } from '../utils/mixpanel';
import { LocaleContext } from '../app/providers';

function Instagram() {
  const [show, setShow] = React.useState(false);
  const isSSR = useIsSSR();
  const { theme } = useTheme();
  const handleInstagram = () => {
    track('Instagram', {
      section: 'Fixed',
    });
  };
  const locale = useContext(LocaleContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.fullpage_api) {
        const index = window.fullpage_api.getActiveSection().index();

        setShow(index >= 3);
      }
    });
  }, []);

  const config: Record<
    string,
    {
      dark: StaticImport;
      light: StaticImport;
    }
  > = {
    es: {
      dark: followESDark,
      light: followESLight,
    },
    en: {
      dark: followENDark,
      light: followENLight,
    },
  };

  const current = config[locale];
  const src = theme === 'light' || isSSR ? current?.light : current?.dark;

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
      <div className='flex gap-2 items-center w-[5rem] xl:w-[3rem]'>
        <NextImage alt='Instagram' sizes='(max-width: 640px) 5rem, 10vw' src={src} />
      </div>
    </a>
  );
}

export default Instagram;
