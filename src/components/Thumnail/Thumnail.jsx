import React from 'react';
import styles from './Thumnail.module.css';


export default function Thumnail({ thumnail }) {
    return (
        <img src={thumnail} alt='thumnail' />
    );
}

