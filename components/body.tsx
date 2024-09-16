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
  cta?: {
    component: React.ReactNode;
    className?: string;
  };
  className?: string;
};

function Body({ cta, body, title, className }: Props) {
  return (
    <div className={clsx('flex flex-col gap-6 text-center justify-center w-full', className)}>
      <div data-aos='fade-up'>
        <div className='font-bold text-xl flex justify-center mb-4'>
          <h2 className={title.className}>{title.text}</h2>
        </div>
        {body && <p className={clsx('leading-loose text-sm', body.className)}>{body.text}</p>}
        {cta && <div className={clsx('mt-4', cta.className)}>{cta.component}</div>}
      </div>
    </div>
  );
}

export default Body;
