'use client';

import React, { useState, useTransition } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faLanguage, faMoon, faSun, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';

import { Locale } from '../i18n/config';
import { getUserLocale, setUserLocale } from '../services/locale';

function Config() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const [isSound, setIsSound] = useState(false);
  const [audio] = useState(typeof window !== 'undefined' ? new Audio('/audio/song.mp3') : null);
  const [_isPending, startTransition] = useTransition();

  function handleLanguage() {
    startTransition(async () => {
      const locale = (await getUserLocale()) as Locale;

      setUserLocale(locale === 'en' ? 'es' : 'en');
    });
  }
  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const handleSound = () => {
    if (isSound) {
      setIsSound(!isSound);
      audio?.pause();
    } else {
      setIsSound(!isSound);
      audio?.play();
    }
  };

  const isLight = theme === 'light' || isSSR;

  return (
    <div className='fixed z-10 right-0'>
      <div className='p-2 flex gap-3'>
        <FontAwesomeIcon
          className='w-5 md:w-3 text-light select-none'
          icon={isSound ? faVolumeMute : faVolumeHigh}
          role='button'
          onClick={handleSound}
        />
        <FontAwesomeIcon
          className='w-3 md:w-2 text-light select-none'
          icon={isLight ? faMoon : faSun}
          role='button'
          onClick={handleTheme}
        />
        <FontAwesomeIcon
          className='w-5 md:w-4 text-light select-none'
          icon={faLanguage}
          role='button'
          onClick={handleLanguage}
        />
      </div>
    </div>
  );
}

export default Config;
