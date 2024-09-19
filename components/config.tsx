'use client';

import React, { useRef, useState, useTransition } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faLanguage, faMoon, faSun, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

import { Locale } from '../i18n/config';
import { getUserLocale, setUserLocale } from '../services/locale';
import { track } from '../utils/mixpanel';

function Config() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const [isSound, setIsSound] = useState(false);
  const audio = useRef(typeof window !== 'undefined' ? new Audio('/audio/song.mp3') : null);
  const [isPending, startTransition] = useTransition();

  function handleLanguage() {
    startTransition(async () => {
      const locale = (await getUserLocale()) as Locale;
      const l = locale === 'en' ? 'es' : 'en';

      track('Change Language', {
        locale: l,
      });

      setUserLocale(l);
    });
  }
  const handleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';

    track('Change Theme', {
      theme: t,
    });
    setTheme(t);
  };

  const handleSound = () => {
    if (isSound) {
      track('Mute Song');
      setIsSound(!isSound);
      audio.current?.pause();
    } else {
      track('Play Song');
      setIsSound(!isSound);
      audio.current?.play();
    }
  };

  const isLight = theme === 'light' || isSSR;

  return (
    <div className='fixed z-10 right-0'>
      <div className='p-2 flex gap-2'>
        <FontAwesomeIcon
          className='md:w-3 px-2 md:px-0 text-light select-none transition-all duration-300'
          icon={isSound ? faVolumeMute : faVolumeHigh}
          role='button'
          size='lg'
          onClick={handleSound}
        />
        <FontAwesomeIcon
          className='md:w-2 px-2 md:px-0 text-light select-none transition-all duration-300'
          icon={isLight ? faMoon : faSun}
          role='button'
          size='lg'
          onClick={handleTheme}
        />
        <FontAwesomeIcon
          className={clsx('md:w-4 md:px-0 px-2 text-light select-none', {
            'opacity-50': isPending,
            'cursor-not-allowed': isPending,
            'transition-all duration-300': !isPending,
          })}
          icon={faLanguage}
          role='button'
          size='lg'
          onClick={handleLanguage}
        />
      </div>
    </div>
  );
}

export default Config;
