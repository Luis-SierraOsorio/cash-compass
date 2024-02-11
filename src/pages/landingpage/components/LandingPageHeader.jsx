import React from 'react'
import styles from './LandingPageHeader.module.css'

export default function LandingPageHeader() {
    return (
        <div className={`${styles['header-container']} ${styles['container']}`}>
            <h1 className={styles['text-center']}>Cash Compass</h1>
            <button className={styles['button-container']}>Log In</button>
        </div>
    );
}