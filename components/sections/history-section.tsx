import React from 'react';
import NextImage from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import leftFlower2 from '../assets/left-flower-2.png';
import Section, { Center } from '../section';
import Body from '../body';

function HistorySection() {
  const t = useTranslations('history');

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
            top: '50%',
            transform: 'translateY(-50%)',
            maxWidth: 'unset',
            width: '300px',
          }}
        /> */}
        <Body
          body={{
            text: (
              <>
                {t('part1')} <span className='text-mossGreen'>{t('part2')}</span>
              </>
            ),
          }}
          cta={{
            component: <p className='font-whiteStar text-xl text-mossGreen'>{t('footer')}</p>,
          }}
          title={{
            text: t('title'),
          }}
        />
      </Center>
    </Section>
  );
}

export default HistorySection;
