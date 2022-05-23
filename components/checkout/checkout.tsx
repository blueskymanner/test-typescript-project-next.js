import Container from '../container'

import styles from './checkout.module.scss'

const Checkout = () => {
  const handleClickArea = () => {
    window.location.href = '/'
  }

  return (
    <section id="checkout" className={styles.container}>
      <Container>
        <div className={styles.wrapper} onClick={handleClickArea}>
          <img src="/assets/img/icon-check.png" alt='Check Icon' />
          <h2>your appointment was<br /> successfully booked!</h2>
          <p>You will receive an email with all details<br /> you need to know for your appointment.</p>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
