import { Feature } from '../../types/feature';
import Button from '../button';

import styles from './feature-item.module.scss';

type Props = {
  feature: Feature;
  index: number;
};

const FeatureItem = ({ feature: { image, title, descriptions }, index }: Props) => {
  const handleClick = () => {
    window.location.href = "/#"
  }
  return (
    <div className={styles.container} style={{flexDirection: (index % 2) === 0 ? 'row' : 'row-reverse'}}>
      <img src={image.src} alt={image.alt} />
      <div>
        <h3>
          {title}
        </h3>
        {descriptions.map((description, index) =>
          <div key={index}>
            <img src="/assets/img/icon-check-outline.png" alt="" />
            <p>
              {description}
            </p>
          </div>
        )}
        <Button
          onClick={handleClick}
          style={{width: 'fit-content', margin: '2.0em 0', padding: '0.5em 2em', fontSize: '0.9em'}}
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default FeatureItem;
