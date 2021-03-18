import React from 'react';
import createStore from "../configureStore"

import {
  toggleButton
} from '../middleware/button';
import styles from './Counter.module.css';

export const Counter = () => {
  const store = createStore();
  
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Toggle"
          onClick={() => store.dispatch(toggleButton())}
        >
          Toggle me
        </button>
      </div>
    </div>
  );
}
