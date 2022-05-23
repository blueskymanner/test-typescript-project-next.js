import { useState } from 'react'
import Button from '../button'
import MobileModal from '../mobile-modal'

import styles from './advertise-panel.module.scss'

const AdvertisePanel = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  
  function openModal() {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <article className={styles.container}>
      <h2>
        Pap Smear Test <br />
        in <span>Hialeah, FL</span>
      </h2>
      <p>Book your Pap Smear Test appointment on of Okidok Health Center in Westland Shopping Plaza, Hialeah and receive trusted and confidential results.</p>
      <div>
        <Button
          style={{
            margin: '0.75em 0',
            padding: '0.75em 0.5em',
            fontSize: '1.3em',
            zIndex: '1000',
            fontFamily: 'Montserrat'
          }}
          onClick={openModal}
        >
          Book your appointment now!
        </Button>
      </div>
      <MobileModal
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </article>
  );
};

export default AdvertisePanel;
