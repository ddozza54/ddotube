import React, { useEffect, useState } from 'react';
import styles from './Videos.module.css'
import Video from '../Video/Video';
import useVideos from '../../hooks/use-videos';

export default function Videos() {
    //필요한 정보 : 비디오 id, 제목, 시간, 올린채널, 썸네일src, (채널 썸네일), 조회수, 
    const [isLoading, videos, error] = useVideos();
    return (
        <div className={styles.videosGrid}>
            {isLoading ? <span>Loading...</span> :
                videos && videos.map((i, ind) => {
                    return (<Video
                        videoId={i.id.videoId}
                        title={i.snippet.title}
                        description={i.snippet.description}
                        thumnail={i.snippet.thumbnails.default.url}
                    />)
                })}
        </div>
    );
}
