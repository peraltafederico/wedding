'use client';

import React from 'react';
import clsx from 'clsx';

type Props = {
  title: {
    text: string | React.ReactNode;
    className?: string;
  };
  body?: {
    text: string | React.ReactNode;
    className?: string;
  };
  cta: {
    component: React.ReactNode;
    className?: string;
  };
  className?: string;
};

function Body({ cta, body, title, className }: Props) {
  return (
    <div className={clsx('flex flex-col gap-6 text-center justify-center w-full', className)}>
      <div
      // data-aos='fade-up'
      >
        <div className='font-bold text-2xl flex justify-center mb-6'>
          <h2 className={title.className}>{title.text}</h2>
        </div>
        {body && <p className={clsx('leading-loose', body.className)}>{body.text}</p>}
        <div
          className={clsx('mt-4', cta.className)}
          // data-aos='fade-up'
        >
          {cta.component}
        </div>
      </div>
    </div>
  );
}

export default Body;
