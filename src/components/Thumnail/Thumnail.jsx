import React from 'react';
import styles from './Thumnail.module.css';


export default function Thumnail({ thumnail }) {
    return (
        <div className={styles.thumnailDiv}>
            <img className={styles.thumnailImg} src={thumnail} alt='thumnail' />
        </div>
    );
}

