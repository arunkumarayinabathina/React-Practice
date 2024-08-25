import { useState } from "react";
import styles from './First.module.css';
export default function First() {
  const [value,setValue] = useState(0);
  const Increment = () => {
    setValue(value+1)
  }
  const Decrement = () => {
    setValue(value-1)
  }
  const Reset = () =>{
    setValue(0)
  }
  return(
      <div>
        <h1 className={styles.counterHead}>{value}</h1>
        <div className={styles.counterButtons}>
          <button className={styles.counterButton} onClick={Increment}>Increment</button>
          <button className={styles.counterButton} onClick={Reset}>Reset</button>
          <button className={styles.counterButton} onClick={Decrement}>Decrement</button>
          </div>
      </div>
  );
}