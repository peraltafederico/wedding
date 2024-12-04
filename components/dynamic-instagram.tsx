'use client';

import React, { useEffect } from 'react';

import Instagram from './instagram';

export const DynamicInstagram = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.fullpage_api) {
        const index = window.fullpage_api.getActiveSection().index();

        setShow(index >= 3);
      }
    });
  }, []);
  const [show, setShow] = React.useState(false);

  return <Instagram show={show} />;
};

export default DynamicInstagram;
