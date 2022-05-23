import Container from '../container';
import styles from './bottom-bar.module.scss';

const BottomBar = () => {
  return (
    <div className={styles.container}>
      <Container>
        <p>©2022 by OKIDOK, Inc</p>
      </Container>
    </div>
  );
};

export default BottomBar;
