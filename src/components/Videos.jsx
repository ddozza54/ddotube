import React, { useEffect } from 'react';
import styles from './Videos.module.css'
import Video from './Video';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
const key = process.env.REACT_APP_YOUTUBE;

export default function Videos() {
    const { keyword } = useParams();
    const basicUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&`
    const searchUrl = `${basicUrl}maxResults=30&${keyword ? 'q=' + { keyword } : ""}&regionCode=US&key=${key}`


    const { isLoading, error, data: videos } = useQuery(["vidoes"], async () => {
        return fetch(searchUrl)
            .then(res => res.json())
    });



    return (
        <div className={styles.videosGrid}>
            {isLoading ? <span>Loading...</span> :
                videos && videos.items.map((i, ind) => {
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
