'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faLanguage, faMoon, faSun, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';

function Config() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const [isSound, setIsSound] = useState(false);
  const [audio] = useState(typeof window !== 'undefined' ? new Audio('/audio/song.mp3') : null);

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
          className='w-3 text-light select-none'
          icon={isSound ? faVolumeMute : faVolumeHigh}
          role='button'
          onClick={handleSound}
        />
        <FontAwesomeIcon
          className='w-2 text-light select-none'
          icon={isLight ? faMoon : faSun}
          role='button'
          onClick={handleTheme}
        />
        <FontAwesomeIcon className='w-4 text-light select-none' icon={faLanguage} role='button' />
      </div>
    </div>
  );
}

export default Config;
