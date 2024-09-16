import React from 'react';
import { Button } from '@nextui-org/react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';

import leftFlower1 from '../..//assets/left-flower-1.png';
import leftFlower2 from '../../assets/left-flower-2.png';
import Section, { Center } from '../section';
import Body from '../body';
import InviteCTA from '../invite-cta';

function InviteSection() {
  const t = useTranslations('invite');

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
        <Body
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
