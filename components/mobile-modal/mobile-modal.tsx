import Modal from 'react-modal'

import MobileBookingBox from '../mobile-booking-box';
import MobileSelectTimeBox from '../mobile-select-time-box';
import MobileConfirmationBox from '../mobile-confirmation-box';
import MobileCheckoutBox from '../mobile-checkout-box';

import styles from './mobile-modal.module.scss'
import { useState } from 'react';

type Props = {
  modalIsOpen: boolean;
  afterOpenModal: Function;
  closeModal: Function;
};

const MobileModal = ({ modalIsOpen, afterOpenModal, closeModal }: Props) => {
  
  const [content, setContent] = useState('booking')

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={() => afterOpenModal()}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1001
        },
        content: {
          position: 'absolute',
          border: 'none',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0px',
          outline: 'none',
          padding: '0px',
          margin: 'auto',
          zIndex: '1000',
          minWidth: '24em',
          maxWidth: '30em',
          top: '1.0em',
          bottom: '1.0em',
          left: '1.0em',
          right: '1.0em',
        }
      }}
    >
      {
        content === "booking" &&
          <MobileBookingBox next={setContent} close={() => closeModal()} />
      }
      {
        content === "select-time" &&
          <MobileSelectTimeBox next={setContent} close={() => closeModal()} />
      }
      {
        content === "confirmation" &&
          <MobileConfirmationBox next={setContent} close={() => closeModal()} />
      }
      {
        content === "checkout" &&
          <MobileCheckoutBox next={setContent} close={() => closeModal()} />
      }
    </Modal>
  );
};

export default MobileModal;
