import { useState } from 'react';
import Button from '../button';
import styles from './mobile-select-time-box.module.scss'

type Props = {
  next: Function;
  close: Function;
};

const MobileSelectTimeBox = ({ next, close }: Props) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  const onClose = () => {
    next('booking')
    close()
  }

  return (
    <div className={styles.container}>
      <div>
        <img src="/assets/img/icon-close.png" alt='' style={{visibility: 'hidden'}} />
        <h2 style={{fontWeight: '400', fontSize: '1.2em'}}>Book your appointment</h2>
        <img
          src="/assets/img/icon-close.png" alt=''
          onClick={() => onClose()}
        />
      </div>
      <div>
        <h3>Monday 1, March</h3>
        <div
          onClick={() => handleClick()}
          style={
            selected ?
              {borderColor: '#90C032', backgroundColor: '#FAFFF1'}
            :
              {borderColor: 'gray'}
        }>
          <div>
            <p>14:00 am<sup>Best Offer!</sup></p>
            <p>Centric clinic Garden</p>
          </div>
          <div>
            <p>$100.- <br /><span>-20% OFF</span></p>
          </div>
        </div>
        {
          selected &&
            <div
              className={styles.fixed}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                textAlign: 'center',
              }}
            >
              <Button
                style={{
                  margin: '1.0em 0',
                  fontSize: '1.4em',
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                  padding: '0.75em 0.5em',
                }}
                onClick={() => next('confirmation')}
              >
                Confirm appointment
              </Button>
            </div>
        }
      </div>
    </div>
  );
};

export default MobileSelectTimeBox;
