'use client';

import React from 'react';
import NextImage, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';

import Section, { Center } from '../section';
import date from '../../assets/icons/date.png';
import place from '../../assets/icons/place.png';
import camera from '../../assets/icons/camera.png';
import dress from '../../assets/icons/dress.png';
import { track } from '../../utils/mixpanel';

type InfoProps = {
  children?: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  delay?: number;
  className?: string;
  src: StaticImageData;
};

const DIRECTIONS = 'https://maps.app.goo.gl/JUnGFbCWYJT7HR2u6?g_st=com.google.maps.preview.copy';

function Info({ children, description, title, delay, className, src }: InfoProps) {
  return (
    <div
      className={clsx('flex flex-col items-center info-item gap-2', className)}
      data-aos='fade-up'
      data-aos-delay={delay}>
      <div className='w-[60px] lg:w-[2rem] info-img-wrapper'>
        <NextImage
          alt={title}
          sizes='(max-width: 640px) 60px, 10vw'
          src={src}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='font-bold'>{title}</h3>
        <div className='flex flex-col items-center'>
          <span className='font-whiteStar text-mossGreen'>{description}</span>
          {children}
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  const t = useTranslations('info');
  const handleAddress = () => {
    track('Address');
  };

  const handleInstagram = () => {
    track('Instagram', {
      section: 'Info',
    });
  };

  return (
    <Section className='flex justify-center'>
      <Center className='flex flex-col items-center'>
        <div className='relative w-fit md:grid flex flex-col md:grid-cols-2 md:grid-rows-2 md:gap-x-24 md:gap-y-12 gap-y-6 info-container'>
          <Info delay={100} description={t('date.date')} src={date} title={t('date.title')}>
            <span className='font-whiteStar text-mossGreen'>{t('date.time')}</span>
          </Info>
          <Info delay={200} description={t('location.description')} src={place} title={t('location.title')}>
            <Button
              as='a'
              className='text-xs mt-1 hidden md:flex'
              href={DIRECTIONS}
              size='sm'
              target='_blank'
              variant='light'
              onClick={handleAddress}>
              {t('location.address')}
            </Button>
            <Button
              as='a'
              className='text-xs mt-1 md:hidden'
              href={DIRECTIONS}
              size='sm'
              target='_blank'
              variant='flat'
              onClick={handleAddress}>
              {t('location.address')}
            </Button>
          </Info>
          <Info delay={300} description={t('dress.description')} src={dress} title={t('dress.title')} />
          <Info
            className='hidden md:flex'
            delay={400}
            description={
              <>
                <Button
                  as='a'
                  className='text-sm font-whiteStar text-mossGreen'
                  href='https://www.instagram.com/noscasamos.camiyfede'
                  rel='noreferrer'
                  size='sm'
                  target='_blank'
                  variant='light'
                  onClick={handleInstagram}>
                  @noscasamos.camiyfede
                </Button>
              </>
            }
            src={camera}
            title={'Instagram'}
          />
          {/* <Info description='@noscasamos.camiyfede' title='Instagram' /> */}
        </div>
      </Center>
    </Section>
  );
}

export default InfoSection;
