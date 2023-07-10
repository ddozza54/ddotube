import React, { useState } from 'react';
import styles from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi'

export default function Searchbar() {
    const [seach, setSearch] = useState('');
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }
    console.log(seach);
    return (
        <div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <input className={styles.input} type='text' placeholder='Search'
                    name='search'
                    onChange={handleInputChange} value={seach} />
                <button className={styles.searchBtn}>
                    <span className={styles.searchIcon}>
                        <BiSearch />
                    </span>
                </button>
            </form>
        </div>
    );
}

