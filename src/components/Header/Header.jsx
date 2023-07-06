import React from 'react';
import { SiYoutube } from 'react-icons/si';
import styles from './Header.module.css';


export default function Header() {
    return (
        <div className={styles.headerDiv}>
            <SiYoutube />
            Header
        </div>
    );
}

