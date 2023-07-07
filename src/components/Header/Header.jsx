import React from 'react';
import { Link } from 'react-router-dom';
import { SiYoutube } from 'react-icons/si';
import styles from './Header.module.css';
import Searchbar from '../Searchbar/Searchbar';
import Darkmode from '../Darkmode/Darkmode';


export default function Header() {
    return (
        <div className={styles.headerDiv}>
            <Link to='/'>
                <SiYoutube />
            </Link>

            <Searchbar />
            <Darkmode />
        </div>
    );
}

