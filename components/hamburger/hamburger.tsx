import { MouseEvent } from 'react'
import styles from './hamburger.module.scss'

type Props = {
  onPress: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
}

const Hamburger = ({ onPress, isOpen }: Props) => {
  return (
    <button className={styles.container} onClick={onPress}>
      {isOpen ? (
        <img src="/assets/img/icon-close-grey.png" alt="Hamburger" />
      ) : (
        <img src="/assets/img/icon-hamburger.png" alt="Hamburger" />
      )}
    </button>
  )
}

export default Hamburger
