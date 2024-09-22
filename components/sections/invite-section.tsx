'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';

import bottomFlower from '../..//assets/bottom-flower-1.png';
import Section, { Center } from '../section';
import Body from '../body';
import InviteCTA from '../invite-cta';
import { track } from '../../utils/mixpanel';

function InviteSection() {
  const t = useTranslations('invite');
  const handleInstagram = () => {
    track('Instagram', {
      section: 'Info',
    });
  };

  return (
    <Section>
      <Center className='overflow-hidden'>
        <NextImage
          alt='Default Image'
          className='absolute w-[150%] max-w-[unset] sm:max-w-[80%] sm:w-full  left-1/2 bottom-0 transform translate-x-[-50%] translate-y-[50%]'
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
        {/* <a
          className='absolute bottom-[11rem] right-[20px] text-sm animate-bouceSlow font-whiteStar text-mossGreen'
          href='https://www.instagram.com/noscasamos.camiyfede'
          rel='noreferrer'
          target='_blank'
          onClick={handleInstagram}>
          @noscasamos.camiyfede
        </a> */}
      </Center>
    </Section>
  );
}

export default InviteSection;
