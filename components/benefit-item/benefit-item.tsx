import { Benefit } from '../../types/benefit';

import styles from './benefit-item.module.scss';

type Props = {
  benefit: Benefit;
};

const BenefitItem = ({ benefit: { image, title } }: Props) => {
  return (
    <div className={styles.container}>
      <img src={image.src} alt={image.alt} />
      <h3>{title}</h3>
    </div>
  );
};

export default BenefitItem;
