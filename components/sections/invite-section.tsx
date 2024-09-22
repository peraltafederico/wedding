'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';

import bottomFlower from '../..//assets/bottom-flower-1.png';
import Section, { Center } from '../section';
import Body from '../body';
import InviteCTA from '../invite-cta';

function InviteSection() {
  const t = useTranslations('invite');

  return (
    <Section>
      <Center>
        <NextImage
          alt='Flower'
          className='opacity-50 absolute w-[150%] max-w-[unset] sm:max-w-[80%] sm:w-full left-1/2 bottom-0 transform translate-x-[-50%] translate-y-[50%] md:opacity-100'
          sizes='50vw'
          src={bottomFlower}
        />
        <div />
        <Body
          body={{
            text: t('description'),
          }}
          className='!gap-0'
          cta={{
            component: <InviteCTA text={t('cta')} />,
            className: 'mt-0',
          }}
          title={{
            text: t('title'),
          }}
        />
      </Center>
    </Section>
  );
}

export default InviteSection;
