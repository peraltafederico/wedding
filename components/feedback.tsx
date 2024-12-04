'use client';

import { Button } from '@nextui-org/button';
import React from 'react';
import { useDisclosure } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import PartyModal from './party-modal';

const Feedback = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const t = useTranslations('party');
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <>
      <div className='h-full w-full flex justify-center items-center z-10'>
        <div className='flex flex-col absolute top-10'>
          <h1 className='text-white font-bold text-2xl'>{t('title')}</h1>
          <Button
            className='font-youngSerif font-bold bg-mossGreen text-white opacity-90'
            onClick={() => {
              videoRef.current?.play();
              onOpen();
            }}>
            {t('cta')}
          </Button>
        </div>
      </div>
      <PartyModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full absolute object-cover'
        poster='/party.jpg'>
        <source src={'/video/party.mp4'} type='video/mp4' />
      </video>
    </>
  );
};

export default Feedback;
