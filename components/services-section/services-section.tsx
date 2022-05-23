import Container from '../container'
import ServicesList from '../services-list'

import { SERVICES } from '../../data/services'

import styles from './services-section.module.scss'

const ServicesSection = () => {
  return (
    <section id="servicesSection" className={styles.container}>
      <Container>
        <div>
          <p>Do you need anything else?</p>
          <h2>Our other service</h2>
        </div>
        <ServicesList services={SERVICES} />
      </Container>
    </section>
  )
}

export default ServicesSection
