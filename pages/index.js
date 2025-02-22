import { useState } from 'react';
import Greeting from '../components/Greeting';
import StatusToggle from '../components/StatusToggle';
import { getEvenNumbers } from '../utils/arrayHelpers';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.container}>
      <StatusToggle isOn={isOn} setIsOn={setIsOn} />
      
      <div className={styles.conditionalSection}>
        {isOn ? (
          <Greeting name="John" />
        ) : (
          <p className={styles.hiddenText}>Greeting is hidden</p>
        )}
      </div>

      <div className={styles.arraySection}>
        <p>Even Numbers: {getEvenNumbers(numbers).join(', ')}</p>
      </div>
    </div>
  );
}