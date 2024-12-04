import '@/styles/page.css';

import Feedback from '../components/feedback';
import Instagram from '../components/instagram';

export default function Home() {
  return (
    <>
      <div className='h-screen w-full bg-black'>
        <div className='h-full w-full relative overflow-hidden bg-red opacity-70 flex justify-center items-center'>
          <Feedback />
        </div>
      </div>
      <Instagram show />
    </>
  );
}
