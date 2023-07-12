import React from 'react';
import styles from './Videos.module.css'
import Video from '../Video/Video';
import useVideos from '../../hooks/use-videos';

export default function Videos() {
    //필요한 정보 : 비디오 id, 제목, 시간, 올린채널, 썸네일src, (채널 썸네일), 조회수, 
    const [isLoading, videos, error] = useVideos('');
    return (
        <div className={styles.videosGrid}>
            {isLoading ? <span>Loading...</span> :
                videos && videos.map((i, ind) => {
                    return (<Video
                        key={ind}
                        videoId={i.id.videoId}
                        title={i.snippet.title}
                        channel={i.snippet.channelTitle}
                        description={i.snippet.description}
                        date={i.snippet.publishedAt}
                        thumnail={i.snippet.thumbnails.medium.url}
                    />)
                })}
            {error && <span>{error}</span>}
        </div>
    );
}
