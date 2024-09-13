import '@/styles/page.css';

import CoverSection from '../components/cover-section';
import HistorySection from '../components/history-section';
import UsSection from '../components/us-section';
import InfoSection from '../components/info-section';
import GiftSection from '../components/gift-section';
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
