import Container from '../container'
import Button from '../button'

import styles from './specials.module.scss'

const Specials = () => {
  const handleClick = () => {
    window.location.href = "/"
  }

  return (
    <section className={styles.container}>
      <Container>
        <div className={styles.summary}>
          <h2>Hurry up! and get<br /> <u>Free</u><br /> Treatment for first 50 person</h2>
          <p>Limited time offer for this month.<br />No credit card required</p>
          <Button
            style={{width: 'fit-content', padding: '0.75em 2em', fontSize: '0.9em', letterSpacing: '1px'}}
            onClick={handleClick}
          >
            MAKE AN APPOINTMENT
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Specials;
