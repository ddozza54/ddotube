import React from 'react';
import styles from './Videos.module.css'
import Video from '../Video/Video';
import { useQuery } from '@tanstack/react-query'

const key = process.env.REACT_APP_YOUTUBE;

export default function Videos() {
    //searchKey 가져오기
    const getVideos = () => {
        // const basicUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&`
        // const searchUrl = `${basicUrl}maxResults=30&${searchKey ? 'q=' + { searchKey } : ""}&regionCode=US&key=${key}`

        console.log("fetching...")
        return fetch('data/search.json')
            .then(res => res.json())

    }

    const { isLoading, error, data: videos } = useQuery(["vidoes"], async () => { getVideos() });

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
