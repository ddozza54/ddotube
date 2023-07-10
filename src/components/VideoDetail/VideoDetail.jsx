import React from 'react';
import styles from './VideoDetail.module.css';
import { Link } from 'react-router-dom'

export default function VideoDetail({ videoId, title, date, channel }) {
    return (
        <div className={styles.detailBox}>
            <Link to={`/video/${videoId}`} >
                <h3 className={styles.title}>{title}</h3>
            </Link>
            <span className={styles.channel}>{channel}</span>
            <span className={styles.date}>{
                date.slice(0, 10)}</span>
        </div>
    );
}

