import TextInput from '../text-input';
import DatetimeInput from '../datetime-input';
import Button from '../button';

import styles from './mobile-booking-box.module.scss'
import { useState } from 'react';

type Props = {
  next: Function;
  close: Function;
};

const MobileBookingBox = ({ next, close }: Props) => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const onClose = () => {
    next('booking')
    close()
  }

  return (
    <div className={styles.container}>
      <div>
        <img src="/assets/img/icon-close.png" alt='' style={{visibility: 'hidden'}} />
        <h2 style={{fontWeight: '400', fontSize: '1.2em'}}>Pap Smear test</h2>
        <img
          src="/assets/img/icon-close.png" alt=''
          onClick={() => onClose()}
        />
      </div>
      <div>
        <h2>Personal information</h2>
        <TextInput name="fname" placeholder="First Name" value={fname} onChange={setFname} />
        <TextInput name="lname" placeholder="Last Name" value={lname} onChange={setLname} />
        <TextInput name="email" placeholder="Email" value={email} onChange={setEmail} />
        <TextInput name="phone" placeholder="Phone" value={phone} onChange={setPhone} />
        <div>
          <div className={styles.indicators}>
            <button
              className={styles.active}
            >
            </button>
            <button
            >
            </button>
          </div>
          {
            fname && lname && email && phone ?
              <Button
                style={{
                  margin: 0,
                  fontFamily: 'Montserrat',
                  fontSize: '1.4em',
                  fontWeight: 400,
                  padding: '0.75em 0.5em',
                  backgroundColor: '#FC655F'
                }}
                onClick={() => next('select-time')}
              >
                Next
              </Button>
            :
              <Button
                style={{
                  margin: 0,
                  fontFamily: 'Montserrat',
                  fontSize: '1.4em',
                  fontWeight: 400,
                  padding: '0.75em 0.5em',
                  backgroundColor: '#DEDEDE',
                  color: 'white'
                }}
              >
                Next
              </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default MobileBookingBox;
