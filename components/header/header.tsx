import dynamic from 'next/dynamic'

const TopBar = dynamic(
  () => import('../top-bar'),
  { ssr: false }
)
import MainMenu from '../main-menu';

import styles from './header.module.scss';

const Header = () => {  
  return (
    <div className={styles.container}>
      <TopBar />
      <MainMenu />
    </div>
  );
};

export default Header;
