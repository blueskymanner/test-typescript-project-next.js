import BenefitItem from '../benefit-item'

import { Benefit } from '../../types/benefit'

import styles from './benefits-list.module.scss'

type Props = {
  benefits: Benefit[];
};

const BenefitsList = ({ benefits }: Props) => {
  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} benefit={benefit} />
      ))}
    </div>
  )
}

export default BenefitsList
