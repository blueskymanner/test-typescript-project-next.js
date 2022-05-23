import Container from '../container'
import Button from '../button'

import styles from './confirmation.module.scss'

const Confirmation = () => {
  const handleClickOk = () => {
    window.location.href = '/checkout'
  }
  
  return (
    <section id="confirmation" className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <h2>Confirm appointment</h2>
          <p>Name</p>
          <h3>Stefany Aguilar</h3>
          <p>Time</p>
          <h3>14:00 am</h3>
          <p>Medic center</p>
          <h3>Centric Clinic Garden</h3>
          <h4>Hialeah, FL<br /> 7707 NW 103rd St, Hialeah Gardens, FL 33016,</h4>
          <div>
            <p>Total</p>
            <div>
              <h4>$95.00</h4>
              <h4>-20%OFF</h4>
            </div>
          </div>
          <Button
            style={{width: 'fit-content', padding: '1em 7.5em', fontSize: '1.0em', backgroundColor: '#99B940', marginBottom: '2.0em'}}
            onClick={handleClickOk}
          >
            OK
          </Button>
          <p>Clicking &ldquo;Ok&rdquo; means that you agree to the <span>Okidok Services</span><br /> Agreement and privacy and <span>cookies statement.</span></p>
        </div>
      </Container>
    </section>
  );
};

export default Confirmation;
