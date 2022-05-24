import { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  time: number;
  onEnd: () => void;
}

const CountDown = (props: IProps) => {
  const { time, onEnd } = props;
  const [count, setCount] = useState(time || 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          onEnd && onEnd();
          return count;
        }
        return count - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [onEnd, time]);

  return <div className={styles.count_down}>{count}s</div>;
};

export default CountDown;
