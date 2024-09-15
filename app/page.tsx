import '@/styles/page.css';

import CoverSection from '../components/sections/cover-section';
import HistorySection from '../components/sections/history-section';
import UsSection from '../components/sections/us-section';
import InfoSection from '../components/sections/info-section';
import GiftSection from '../components/sections/gift-section';
import InviteSection from '../components/invite-section';

export default function Home() {
  return (
    <>
      <CoverSection />
      <HistorySection />
      <UsSection />
      <InfoSection />
      <GiftSection />
      <InviteSection />
    </>
  );
}
