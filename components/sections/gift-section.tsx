import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';

import leftFlower2 from '../../assets/left-flower-2.png';
import Section, { Center } from '../section';
import Body from '../body';
import GiftTrigger from '../gift-trigger';

function GiftSection() {
  const t = useTranslations('gift');

  return (
    <>
      <Section>
        <Center className='!overflow-visible'>
          <NextImage
            alt='Flower'
            className='opacity-50 absolute left-[-12rem] md:left-[-9rem] top-[-6rem] w-[25rem] max-w-none md:w-[20rem] md:opacity-100'
            src={leftFlower2}
          />
          <Body
            body={{
              text: t('description'),
            }}
            cta={{
              component: <GiftTrigger text={t('cta')} />,
            }}
            title={{
              text: t('title'),
            }}
          />
        </Center>
      </Section>
    </>
  );
}

export default GiftSection;
