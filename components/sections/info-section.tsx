import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';

import Section, { Center } from '../section';
import date from '../../assets/date.png';
import simpleFlower from '../../assets/simple-flower.png';

type InfoProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
};

function Info({ children, description, title, delay }: InfoProps) {
  return (
    <div className='flex flex-col items-center' data-aos='fade-up' data-aos-delay={delay}>
      <div className='w-[100px]'>
        <NextImage alt='Date Icon' src={date} />
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
        <div className=' relative w-fit'>
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
          <Info delay={100} description={t('date.date')} title={t('date.title')}>
            <span className='font-whiteStar text-mossGreen'>{t('date.time')}</span>
          </Info>
          <Info delay={200} description={t('dress.description')} title={t('dress.title')} />
          <Info delay={300} description={t('location.description')} title={t('location.title')}>
            <span className='text-xs mt-2'>{t('location.address')}</span>
          </Info>
          {/* <Info description='@noscasamos.camiyfede' title='Instagram' /> */}
        </div>
      </Center>
    </Section>
  );
}

export default InfoSection;
