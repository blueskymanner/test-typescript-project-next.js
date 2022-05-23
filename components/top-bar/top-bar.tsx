import { useState, useEffect, useRef } from 'react';

import styles from './top-bar.module.scss';

const useCurrentCallback = (callback: any) => {
  const reference: any = useRef();
  reference.current = callback;
  return (...args: any[]) => {
    return reference.current?.(...args);
  };
};

const TopBar = () => {
  var currentdate = new Date(); 
  const [current, setCurrent] = useState({
    second: currentdate.getSeconds().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    }),
    minite: currentdate.getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    }),
    hour: currentdate.getHours().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    }),
    day: currentdate.getDate().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    }),
  })
  
  const currentCallback = useCurrentCallback(() => {
    const currentdate = new Date();
    setCurrent({
      second: currentdate.getSeconds().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      }),
      minite: currentdate.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      }),
      hour: currentdate.getHours().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      }),
      day: currentdate.getDate().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      }),
    });
  });

  useEffect(() => {
    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, [currentCallback]);
  
  return (
    <div className={styles.container}>
      <h2>
        LIMITED TIME OFFER<span className={styles.exclamationMark}> !</span>
        <span className={styles.middot}>·</span>
        <a href='#' target="_self">Pap smear test in hialeah, FL From $39</a>
      </h2>
      <div className={styles.datetime}>
        <div className={styles.unit}>
          <p><span>{current.day}</span><span className={styles.abbr}> d</span></p>
          <p>Day</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.unit}>
          <p><span>{current.hour}</span><span className={styles.abbr}> h</span></p>
          <p>Hr</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.unit}>
          <p><span>{current.minite}</span><span className={styles.abbr}> m</span></p>
          <p>Min</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.unit}>
          <p><span>{current.second}</span><span className={styles.abbr}> s</span></p>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
