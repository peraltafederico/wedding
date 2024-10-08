import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';

import leftFlower1 from '../../assets/left-flower-1.png';
import rightFlower1 from '../../assets/right-flower-1.png';
import Section, { Center } from '../section';
import Body from '../body';

function HistorySection() {
  const t = useTranslations('history');

  return (
    <Section>
      <Center>
        <NextImage
          alt='Flower'
          className='opacity-25 absolute left-[-7rem] md:left-[-4rem] top-[50%] transform -translate-y-1/2 w-[14rem] md:w-[10rem] max-w-none md:opacity-100'
          sizes='33vw'
          src={leftFlower1}
        />
        <NextImage
          alt='Flower'
          className='opacity-25 absolute right-[-7rem] md:right-[-4rem] top-[50%] transform -translate-y-1/2 w-[14rem] md:w-[10rem] max-w-none md:opacity-100 hidden sm:block'
          slot='33vw'
          src={rightFlower1}
        />
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
