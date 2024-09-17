'use client';

import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/react';

import Section, { Center } from '../section';
import date from '../../assets/date.png';
import simpleFlower from '../../assets/simple-flower.png';

type InfoProps = {
  children?: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  delay?: number;
  className?: string;
};

function Info({ children, description, title, delay, className }: InfoProps) {
  return (
    <div className={clsx('flex flex-col items-center', className)} data-aos='fade-up' data-aos-delay={delay}>
      <div className='w-[100px]'>
        <NextImage
          alt='Date Icon'
          src={date}
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

  return (
    <Section className='flex justify-center'>
      <Center className='flex flex-col items-center'>
        <div className='relative w-fit md:grid flex flex-col md:grid-cols-2 md:grid-rows-2 md:gap-x-24 md:gap-y-12'>
          {/* <NextImage
            alt='Default Image'
            src={simpleFlower}
            style={{
              opacity: 0.1,
              width: '300px',
              maxWidth: 'unset',
              top: 0,
              left: -140,
              position: 'absolute',
            }}
          /> */}

          {/* TODO: Reuse buttons  */}
          <Info delay={100} description={t('date.date')} title={t('date.title')}>
            <span className='font-whiteStar text-mossGreen'>{t('date.time')}</span>
          </Info>
          <Info delay={200} description={t('location.description')} title={t('location.title')}>
            <Button
              as='a'
              className='text-xs mt-1 hidden md:flex'
              href='https://www.google.com/maps/place/Mendoza+3499,+B1621CDG+Benavidez,+Provincia+de+Buenos+Aires/@-34.4166203,-58.7144082,1065m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95bca194caa79cbb:0x49567f11cd2e5506!8m2!3d-34.4166203!4d-58.7144082!16s%2Fg%2F11f3sj5133?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
              size='sm'
              target='_blank'
              variant='light'>
              {t('location.address')}
            </Button>
            <Button
              as='a'
              className='text-xs mt-1 md:hidden'
              href='https://www.google.com/maps/place/Mendoza+3499,+B1621CDG+Benavidez,+Provincia+de+Buenos+Aires/@-34.4166203,-58.7144082,1065m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95bca194caa79cbb:0x49567f11cd2e5506!8m2!3d-34.4166203!4d-58.7144082!16s%2Fg%2F11f3sj5133?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
              size='sm'
              target='_blank'
              variant='flat'>
              {t('location.address')}
            </Button>
          </Info>
          <Info delay={300} description={t('dress.description')} title={t('dress.title')} />
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
                  variant='light'>
                  @noscasamos.camiyfede
                </Button>
              </>
            }
            title={'Instagram'}
          />
          {/* <Info description='@noscasamos.camiyfede' title='Instagram' /> */}
        </div>
      </Center>
    </Section>
  );
}

export default InfoSection;
