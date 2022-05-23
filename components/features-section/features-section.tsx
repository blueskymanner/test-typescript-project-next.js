import Container from '../container'
import FeaturesList from '../features-list'

import { FEATURES } from '../../data/features'

import styles from './features-section.module.scss'

const FeaturesSection = () => {
  return (
    <section id="featuresSection" className={styles.container}>
      <Container>
        <div className={styles.summary}>
          <h2>Easy & fast</h2>
          <h3>How it works?</h3>
        </div>
        <FeaturesList features={FEATURES} />
      </Container>
    </section>
  )
}

export default FeaturesSection
