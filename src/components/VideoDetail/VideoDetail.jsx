import React from 'react';
import styles from './VideoDetail.module.css'

export default function VideoDetail({ title, date, channel }) {
    return (
        <div className={styles.detailBox}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.channel}>{channel}</span>
            <span className={styles.date}>{
                date.slice(0, 10)}</span>
        </div>
    );
}

