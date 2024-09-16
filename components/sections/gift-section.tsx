import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';

import leftFlower1 from '../assets/left-flower-1.png';
import leftFlower2 from '../assets/left-flower-2.png';
import Section, { Center } from '../section';
import Body from '../body';
import GiftTrigger from '../gift-trigger';

function GiftSection() {
  const t = useTranslations('gift');

  return (
    <>
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
