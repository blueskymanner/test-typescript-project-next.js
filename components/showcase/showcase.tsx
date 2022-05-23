import Container from '../container'
import BookingBox from '../booking-box'
import AdvertisePanel from '../advertise-panel';
import PricePanel from '../price-panel';

import styles from './showcase.module.scss'
import BenefitsSection from '../benefits-section';

const Showcase = () => {
  return (
    <>
      <section className={styles.container}>
        <Container>
          <div className={styles.wrapper}>
            <div>
              <PricePanel />
              <AdvertisePanel />
            </div>
            <div>
              <BookingBox />
            </div>
          </div>
        </Container>
      </section>
      <BenefitsSection />
    </>
  );
};

export default Showcase;
