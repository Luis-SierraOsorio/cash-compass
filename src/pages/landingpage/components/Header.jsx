import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles['header-container']}>
            <h1 className={styles['text-center']}>Cash Compass</h1>
            <button className={styles['button-container']}>Start Budgeting</button>
        </div>
    );
}