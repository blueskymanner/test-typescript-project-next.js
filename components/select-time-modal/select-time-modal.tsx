import Modal from 'react-modal'

import Button from '../button';

import styles from './select-time-modal.module.scss'

type Props = {
  modalIsOpen: boolean;
  afterOpenModal: Function;
  closeModal: Function;
  handleClickBookButton: Function;
  selectTime: Function;
};

const SelectTimeModal = ({ modalIsOpen, afterOpenModal, closeModal, selectTime }: Props) => {
  const handleBook = () => {
    closeModal()
    selectTime("14:30  /  $95 .- Center Clinic Garrden")
  }

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
          zIndex: '1000'
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
          minWidth: '30em',
          maxWidth: '40em',
          margin: 'auto',
          zIndex: '1000'
        }
      }}
    >
      <div className={styles.container}>
        <div>
          <img src="/assets/img/icon-close.png" alt='' style={{visibility: 'hidden'}} />
          <h2 style={{fontWeight: '400', fontSize: '1.2em'}}>Book your appointment</h2>
          <img
            src="/assets/img/icon-close.png" alt=''
            onClick={() => closeModal()} />
        </div>
        <div>
          <h3>Monday 1, March</h3>
          <div>
            <div>
              <p>14:00 am<sup>Best Offer!</sup></p>
              <p>Centric clinic Garden</p>
            </div>
            <div>
              <p>$100.- <br /><span>-20% OFF</span></p>
              <Button
                onClick={handleBook}
                style={{
                  color: '#a2a2a2',
                  margin: '0.25em 0',
                  border: '1px solid #ccc',
                  width: 'fit-content',
                  padding: '0.5em 2.0em',
                  textTransform: 'uppercase',
                  fontSize: '1.0em',
                  fontWeight: 400,
                  backgroundColor: 'transparent',
                }}
              >
                Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SelectTimeModal;
