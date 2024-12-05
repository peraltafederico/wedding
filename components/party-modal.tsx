import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { track } from '../utils/mixpanel';

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

function PartyModal({ isOpen, onOpenChange }: Props) {
  const t = useTranslations('party.modal');

  const buttonClasses = 'md:text-[1em] md:min-w-[5em] md:h-[2.5em] font-bold';

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
            <ModalHeader className='text-center flex flex-col gap-1 md:text-[1.125em] lg:py-[1em] lg:px-[1.5em] px-4'>
              {t('title')}
            </ModalHeader>
            <ModalBody className='lg:py-[0.5em] lg:px-[1.5em] px-4'>
              <div className='flex items-center flex-col gap-2'>
                <Button
                  as='a'
                  className={buttonClasses}
                  color='primary'
                  href='https://drive.google.com/drive/folders/1c7qOKCrrk5RSUUcVIvdTeeBmBUyjDDLS?usp=sharing'
                  size='sm'
                  target='_blank'
                  variant='bordered'
                  onClick={() => {
                    track('See Photos');
                  }}>
                  {t('photos')}
                </Button>
                <Button
                  as='a'
                  className={buttonClasses}
                  color='primary'
                  href='https://youtu.be/GBqf6IaUWvU?si=w-yDLtu-8s3kYUD3'
                  size='sm'
                  target='_blank'
                  variant='bordered'
                  onClick={() => {
                    track('See Party Video');
                  }}>
                  {t('party')}
                </Button>
                <Button isDisabled as='a' className={buttonClasses} color='primary' size='sm' variant='bordered'>
                  {t('video')}
                </Button>
                <Button
                  as={Link}
                  className={buttonClasses}
                  color='primary'
                  href='/invitacion'
                  size='sm'
                  variant='bordered'
                  onClick={() => {
                    track('See Invitation');
                  }}>
                  {t('invite')}
                </Button>
              </div>
            </ModalBody>
            <ModalFooter className='lg:py-[1em] lg:px-[1.5em] px-4 '>
              <Button className={buttonClasses} color='primary' onPress={onClose}>
                {t('cta')}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default PartyModal;
