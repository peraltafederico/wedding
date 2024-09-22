import { Button } from '@nextui-org/button';
import { useContext } from 'react';

import { track } from '../utils/mixpanel';
import { LocaleContext } from '../app/providers';

type Props = {
  text: string;
};

function InviteCTA({ text }: Props) {
  const handleClick = () => {
    track('Confirm');
  };

  const locale = useContext(LocaleContext);

  const href = {
    es: 'https://docs.google.com/forms/d/1jcMBC6Rhw_JDOkxwRukwnl60YiZH5GtSBg1TGEQJbOE',
    en: 'https://docs.google.com/forms/d/1YLzEFxQP7Y3SUzWI70tGPi0H1Hn0XrzGy0hiTXvYwfM',
  };

  return (
    <Button
      as={'a'}
      className='font-bold w-button w-full md:w-auto'
      color='primary'
      href={href[locale as keyof typeof href]}
      size='lg'
      onClick={handleClick}>
      {text}
    </Button>
  );
}

export default InviteCTA;
