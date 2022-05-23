import { useState } from 'react';
import styles from './datetime-input.module.scss'

type Props = {
  name: string;
  placeholder?: string;
  onClick: Function;
  value: string;
};

const DatetimeInput = ({ name, placeholder, onClick, value }: Props) => {
  return (
    <div className={styles.container} onClick={() => onClick()}>
      <div>
        <img src="/assets/img/icon-calendar.png" alt="Okidok calendar icon" />
        <input type="text" value={value} name={name} placeholder={placeholder} readOnly />
        {
          value !== '' ?
            <img src="/assets/img/icon-check.png" alt='Check Icon' />
          :
            <img src="/assets/img/icon-check.png" alt='Check Icon' style={{visibility: 'hidden'}} />
        }
      </div>
    </div>
  )
}

export default DatetimeInput
