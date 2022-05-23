import Button from '../button';

import styles from './mobile-confirmation-box.module.scss'

type Props = {
  next: Function;
  close: Function;
};

const MobileConfirmationBox = ({ next, close }: Props) => {
  const onClose = () => {
    next('booking')
    close()
  }

  return (
    <section className={styles.container}>
      <div>
        <img src="/assets/img/icon-close-green.png" alt='' style={{visibility: 'hidden'}} />
        <h2>Confirm appointment</h2>
        <img
          src="/assets/img/icon-close.png" alt=''
          onClick={() => onClose()}
        />
      </div>
      <div>
        <p>Name</p>
        <h3>Stefany Aguilar</h3>
        <p>Time</p>
        <h3>14:00 am</h3>
        <p>Medic center</p>
        <h3>Centric Clinic Garden</h3>
        <h4>Hialeah, FL<br /> 7707 NW 103rd St, Hialeah Gardens, FL 33016,</h4>
        <div style={{width: '100%'}}>
          <p>Total</p>
          <h4>$95.00</h4>
        </div>
        <p style={{margin: 'auto', textAlign: 'center'}}>Clicking &ldquo;Ok&rdquo; means that you agree to the <span>Okidok Services</span><br /> Agreement and privacy and <span>cookies statement.</span></p>
        <Button
          style={{
            width: '100%',
            padding: '0.75em 0.5em',
            fontSize: '1.4em',
            backgroundColor: '#99B940',
            marginBottom: '1.5em',
            fontFamily: 'Montserrat',
            fontWeight: 400
          }}
          onClick={() => next('checkout')}
        >
          OK
        </Button>
      </div>
    </section>
  );
};

export default MobileConfirmationBox;
