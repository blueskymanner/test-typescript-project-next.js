import { ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  children: ReactNode;
  style?: Object;
  onClick?: Function;
};

const Button = ({ children, style, onClick }: Props) => {
  return (
    <button
      className={styles.container}
      style={style && style}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
