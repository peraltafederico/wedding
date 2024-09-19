import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card } from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

import { track } from '../utils/mixpanel';

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const ALIAS = 'noscasamos.camiyfede';
const CVU = '0000003100067378552623';

function GiftModal({ isOpen, onOpenChange }: Props) {
  const t = useTranslations('gift.modal');

  const handleCopy = (text: string, origin: string) => {
    track('Copy to Clipboard', {
      origin,
    });
    navigator.clipboard.writeText(text);
    toast(<p className='text-sm md:text-[2vw] lg:text-[1.5vw] xl:text-[1vw] leading-tigh'>{t('copied')}</p>, {
      position: 'bottom-right',
      className: `!bg-content1 !text-inherit`,
    });
  };

  return (
    <Modal
      hideCloseButton
      className='md:text-[2vw] lg:text-[1.5vw] xl:text-[1vw]'
      isOpen={isOpen}
      placement='center'
      size='xs'
      onOpenChange={onOpenChange}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className='flex flex-col gap-1 md:text-[1.125em] lg:py-[1em] lg:px-[1.5em] px-4'>
              {t('title')}
            </ModalHeader>
            <ModalBody className='lg:py-[0.5em] lg:px-[1.5em] px-4'>
              <div>
                <p className='md:text-[1em]'>Federico Manuel Peralta</p>
                <div className='flex items-center gap-0.5'>
                  <p className='md:text-[1em]'>CVU: {CVU} </p>
                  <FontAwesomeIcon
                    className='md:w-3 px-2 lg:px-0 text-light select-none transition-all duration-300'
                    icon={faCopy}
                    role='button'
                    size='sm'
                    onClick={() => handleCopy(CVU, 'CVU')}
                  />
                </div>
                <div className='flex gap-0.5 items-center'>
                  <p className='md:text-[1em]'>Alias: {ALIAS}</p>
                  <FontAwesomeIcon
                    className='md:w-3 px-2 lg:px-0 text-light select-none transition-all duration-300'
                    icon={faCopy}
                    role='button'
                    size='sm'
                    onClick={() => handleCopy(ALIAS, 'Alias')}
                  />
                </div>
              </div>
              <Divider />
              <p>{t('note')} \uD83D\uDC95</p>
            </ModalBody>
            <ModalFooter className='lg:py-[1em] lg:px-[1.5em] px-4'>
              <Button className='md:text-[1em] md:min-w-[5em] md:h-[2.5em] font-bold' color='primary' onPress={onClose}>
                {t('cta')}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default GiftModal;
