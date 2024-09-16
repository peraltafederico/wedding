import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card } from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';
import { useTranslations } from 'next-intl';

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

function GiftModal({ isOpen, onOpenChange }: Props) {
  const t = useTranslations('gift.modal');

  return (
    <Modal
      hideCloseButton
      className='md:text-[1vw]'
      isOpen={isOpen}
      placement='center'
      size='xs'
      onOpenChange={onOpenChange}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className='flex flex-col gap-1 md:text-[1.125em] md:py-[1em] md:px-[1.5em]'>
              {t('title')}
            </ModalHeader>
            <ModalBody className='md:py-[0.5em] md:px-[1.5em]'>
              <div>
                <p className='md:text-[1em]'>Federico Manuel Peralta</p>
                <p className='md:text-[1em]'>CVU: 0000003100067378552623 </p>
                <p className='md:text-[1em]'>Alias: noscasamos.camiyfede</p>
              </div>
              <Divider />
              <p>{t('note')} \uD83D\uDC95</p>
            </ModalBody>
            <ModalFooter className='md:py-[1em] md:px-[1.5em]'>
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
