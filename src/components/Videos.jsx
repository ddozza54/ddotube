import React, { useEffect } from 'react';
import Video from './Video';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
const key = process.env.REACT_APP_YOUTUBE;

export default function Videos() {
    const { keyword } = useParams();
    console.log(keyword)
    const { isLoading, error, data: videos } = useQuery(["videos", keyword], async () => {

        const basicUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&regionCode=KR&`
        const searchUrl = `${basicUrl}q=${keyword ? keyword : ""}&key=${key}`

        return fetch(searchUrl)
            .then(res => res.json())
    });



    return (
        <div className="">
            {isLoading ? <span>Loading...</span> :
                videos && videos.items.map((i, ind) => {
                    return (<Video
                        className="w-full grid grid-cols-repeat(5, minmax(300px, 1fr))"
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
        </ div>
    );
}
