import '@/styles/page.css';

import CoverSection from '../components/sections/cover-section';
import HistorySection from '../components/sections/history-section';
import UsSection from '../components/sections/us-section';
import InfoSection from '../components/sections/info-section';
import GiftSection from '../components/sections/gift-section';
import InviteSection from '../components/sections/invite-section';
import Config from '../components/config';
import Instagram from '../components/Instagram';

export default function Home() {
  return (
    <>
      <Config />
      <Instagram />
      <CoverSection />
      <HistorySection />
      <UsSection />
      <InfoSection />
      <GiftSection />
      <InviteSection />
    </>
  );
}
