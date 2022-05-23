import Container from '../container'

import styles from './price-panel.module.scss'

const AdvertisePanel = () => {
  return (
    <div className={styles.container}>
      <span>From</span>
      <div>
        <h2>$39</h2>
        <div>
          -12%
        </div>
      </div>
      <del>$125</del>
    </div>
  );
};

export default AdvertisePanel;
