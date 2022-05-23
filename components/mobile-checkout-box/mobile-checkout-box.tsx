import styles from './mobile-checkout-box.module.scss'

type Props = {
  next: Function;
  close: Function;
};

const MobileCheckoutBox = ({ next, close }: Props) => {
  const onClose = () => {
    next('booking')
    close()
  }

  return (
    <section className={styles.container}>
      <div>
        <img src="/assets/img/icon-close-green.png" alt='' style={{visibility: 'hidden'}} />
        <h2 style={{visibility: 'hidden'}}>Confirm appointment</h2>
        <img
          src="/assets/img/icon-close.png" alt=''
          onClick={() => onClose()}
        />
      </div>
      <div>
        <img src="/assets/img/icon-check.png" alt='Check Icon' />
        <h2>your appointment was<br /> successfully booked!</h2>
        <p>You will receive an email with all details you need to know for your appointment.</p>
      </div>
    </section>
  );
};

export default MobileCheckoutBox;
