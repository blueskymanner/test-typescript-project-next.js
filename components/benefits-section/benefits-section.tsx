import Container from '../container'
import BenefitsList from '../benefits-list'

import { BENEFITS } from '../../data/benefits'

import styles from './benefits-section.module.scss'

const Benefits = () => {
  return (
    <section className={styles.container}>
      <Container>
        <BenefitsList benefits={BENEFITS} />
      </Container>
    </section>
  )
}

export default Benefits
