import React from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../hooks/use-video';


export default function VideoPlayer() {
    let { id } = useParams();
    const [videoData, isLoading, error] = useVideo({ id });
    console.log(videoData)
    return (
        <>
            <iframe title={id} />
            <h1>Video player</h1>
        </>
    );
}

