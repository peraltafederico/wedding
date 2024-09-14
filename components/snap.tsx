'use client';

import React, { createRef, useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
};
import fullpage from 'fullpage.js';

function Snap({ children }: Props) {
  const isSet = useRef(false);

  useEffect(() => {
    if (!window) return;
    if (isSet.current) return;
    new fullpage('#fullpage', {
      //options here
      scrollBar: true,
    });
    isSet.current = true;
  }, []);

  return (
    <main className='w-full' id='fullpage'>
      {children}
    </main>
  );
}

export default Snap;
