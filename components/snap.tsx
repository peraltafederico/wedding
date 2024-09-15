'use client';

type Props = {
  children: React.ReactNode;
};

import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client

function Snap({ children }: Props) {
  return (
    <ReactFullpage
      scrollBar
      credits={{
        enabled: false,
      }}
      licenseKey='xxxxxxxxxx'
      render={() => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
      scrollingSpeed={1000}
    />
  );
}

export default Snap;
