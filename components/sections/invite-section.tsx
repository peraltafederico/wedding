'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import leftFlower1 from '../..//assets/left-flower-1.png';
import leftFlower2 from '../../assets/left-flower-2.png';
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
      <Center>
        {/* <NextImage
          alt='Default Image'
          src={leftFlower2}
          style={{
            opacity: 0.25,
            position: 'absolute',
            left: -180,
            top: -32,
            maxWidth: 'unset',
            width: '300px',
          }}
        /> */}
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
        <a
          className='absolute bottom-[25px] right-[20px] text-sm animate-bouceSlow font-whiteStar text-mossGreen'
          href='https://www.instagram.com/noscasamos.camiyfede'
          rel='noreferrer'
          target='_blank'
          onClick={handleInstagram}>
          @noscasamos.camiyfede
        </a>
      </Center>
    </Section>
  );
}

export default InviteSection;
