import { useState } from 'react'

import TextInput from '../text-input';
import DatetimeInput from '../datetime-input';
import Button from '../button';
import SelectTimeModal from '../select-time-modal'

import styles from './booking-box.module.scss'

const BookingBox = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [time, setTime] = useState("")
  
  function openModal() {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
  }

  function handleClickBookButton() {
    window.location.href = '/confirmation'
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.container}>
        <h2>No need for an insurance plan!</h2>
        <TextInput name="fname" placeholder="First Name" value={fname} onChange={setFname} />
        <TextInput name="lname" placeholder="Last Name" value={lname} onChange={setLname} />
        <TextInput name="email" placeholder="Email" value={email} onChange={setEmail} />
        <TextInput name="phone" placeholder="Phone" value={phone} onChange={setPhone} />
        <DatetimeInput name="time" placeholder="Select time to appointment" value={time} onClick={openModal} />
        <Button
          onClick={handleClickBookButton}
          style={{
            fontFamily: 'Montserrat',
            fontSize: '1.1em',
            marginTop: '1.25em',
            marginBottom: '0.75em'
          }}
        >
          Book your appointment now!
        </Button>
        <h3>Save 12%!</h3>
        <p>Clicking &ldquo;Book Now&rdquo; means that you agree to the <strong>Okidok Services <br />Agreement and privacy</strong> and <strong>cookies statement.</strong></p>
      </div>
      <SelectTimeModal
        selectTime={setTime}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        handleClickBookButton={handleClickBookButton}
      />
    </>
  );
};

export default BookingBox;
