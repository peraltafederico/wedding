import '@/styles/page.css';

import CoverSection from '../components/cover-section';
import HistorySection from '../components/history-section';
import UsSection from '../components/us-section';

export default function Home() {
  return (
    <>
      <CoverSection />
      <HistorySection />
      <UsSection />
      {/* // className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'> */}
      {/* <div className='inline-block max-w-xl text-center justify-center'>
        <h1
          className={title({
            size: 'lg',
          })}>
          Make&nbsp;
        </h1>
        <h1 className={title({ color: 'violet' })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>websites regardless of your design experience.</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>Beautiful, fast and modern React UI library.</h2>
      </div>

      <div className='flex gap-3'>
        <Link
          isExternal
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
          href={siteConfig.links.docs}>
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className='mt-8'>
        <Snippet hideCopyButton hideSymbol variant='bordered'>
          <span>
            Get started by editing <Code color='primary'>app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </>
  );
}
