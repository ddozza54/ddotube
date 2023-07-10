import React, { useEffect } from 'react';
import styles from './Video.module.css'
import { Link } from 'react-router-dom';
import Thumnail from '../Thumnail/Thumnail';
import VideoDetail from '../VideoDetail/VideoDetail';

export default function Video({ videoId, channel, title, description, date,
    thumnail }) {
    return (
        <div className={styles.video}>
            <Link to={`/video/${videoId}`} >
                <Thumnail thumnail={thumnail} />
            </Link>
            <VideoDetail videoId={videoId} title={title} channel={channel} date={date} />
        </div>
    );
}

