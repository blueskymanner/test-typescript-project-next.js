import FeatureItem from '../feature-item';

import { Feature } from '../../types/feature'

import styles from './features-list.module.scss'

type Props = {
  features: Feature[];
};

const FeaturesList = ({ features }: Props) => {
  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} index={index} />
      ))}
    </div>
  )
}

export default FeaturesList
