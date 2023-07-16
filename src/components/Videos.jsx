import React, { useEffect } from 'react';
import Video from './Video';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import { search } from '../api/youtube';

export default function Videos() {
    const { keyword } = useParams();
    const { isLoading, error, data: videos
    } = useQuery(["videos", keyword], () => search(keyword));


    // /repeat(auto-fill, minmax(280px, 1fr))
    return (
        <div className="grid grid-cols-5">
            {error && <p>Something is wrong</p>}
            {isLoading ? <span>Loading...</span> :
                videos && videos.map((video) => {
                    return (<Video
                        key={video.id}
                        videoId={video.id.videoId}
                        title={video.snippet.title}
                        channel={video.snippet.channelTitle}
                        description={video.snippet.description}
                        date={video.snippet.publishedAt}
                        thumnail={video.snippet.thumbnails.medium.url}
                    />)
                })}
            {error && <span>{error}</span>}
        </ div>
    );
}
