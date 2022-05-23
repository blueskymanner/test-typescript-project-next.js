import Link from 'next/link'

import Container from '../container';
import BottomBar from '../bottom-bar';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.links}>
              <Link href="/">
                <a className={styles.home}>Home</a>
              </Link>
              <a href="#">About Us</a>
              <a href="#">FAQ</a>
              <a href="#contact">Contact</a>
              <div className={styles.contacts}>
                <img src="/assets/img/icon-phone.png" alt="Okidok phone number" />
                <span>1 800 789 123</span>
              </div>
            </div>
            <div className={styles.links}>
              <a href="#services">Services</a>
              <a href="#">Laboratory</a>
              <a href="#">Woman Care</a>
              <a href="#">Imaging</a>
              <a href="#">Family Doctors</a>
            </div>
            <div className={styles.social}>
              <h3>Okidok App</h3>
              <div>
                <img src="/assets/img/apple app.png" alt="Okidok iPhone App" />
                <img src="/assets/img/Android app.png" alt="Okidok Androiod App" />
              </div>
              <div className={styles.socialLinks}>
                <a className={styles.instagramLogo} href="https://www.instagram.com/okidok.health/" />
                <a className={styles.facebookLogo} href="https://www.facebook.com/OKidok-health-100747832550190/" />
                <a className={styles.twitterLogo} href="https://twitter.com/okidok_health" />
                <a className={styles.linkedinLogo} href="https://www.linkedin.com/company/82246851/admin/" />
              </div>
            </div>
          </div>
          <Link href="/">
            <a className={styles.brand}>
              <img src="/assets/img/Okidok logo.png" alt="Okidok logo" />
            </a>
          </Link>
          <div className={styles.appLinks}>
            <img src="/assets/img/apple app.png" alt="Okidok iPhone App" />
            <img src="/assets/img/Android app.png" alt="Okidok Androiod App" />
          </div>
        </div>
      </Container>
      <BottomBar />
    </footer>
  );
};

export default Footer;
