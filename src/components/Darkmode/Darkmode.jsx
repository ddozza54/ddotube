import React from 'react';
import styles from './Darkmode.module.css';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'

export default function Mode() {
    return (
        <div className={styles.modeIcon}>
            <BiSolidSun />
            {/* <BiSolidMoon /> */}
        </div>
    );
}

