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
      licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE_KEY}
      render={() => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
      scrollingSpeed={500}
      verticalCentered={false}
    />
  );
}

export default Snap;
