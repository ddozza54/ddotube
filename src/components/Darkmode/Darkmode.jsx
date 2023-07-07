import React from 'react';
import styles from './Darkmode.module.css';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'

export default function Mode() {
    return (
        <div>
            <BiSolidSun />
            <BiSolidMoon />
        </div>
    );
}

