import React from 'react';
import styles from './Thumnail.module.css';


export default function Thumnail({ thumnail }) {
    return (
        <div>
            <img src={thumnail} alt='thumnail' width='200px' />
        </div>
    );
}

